<template>
    <div>
        <!-- <classifysearch></classifysearch> -->
        <search @searchVal="searchVal"></search>
        <classifylist :categoryList="categoryList" @currentIndex="currentFn" :firstIndex="firstIndex"></classifylist>
        <div class="container">
            <childlist v-if="type == 'category'" :childClassify="childClassify"></childlist>
            <productlist v-if="type == 'product'" :productList="productList" @canScroll="scrollBottom"></productlist>
        </div>

        <alert v-model="showAlert">{{alertMsg}}</alert>
    </div>
</template>
<script>
import classifysearch from '../classify/classifySearch'
import search from '../search'
import classifylist from '../classify/classifyList'
import childlist from '../classify/childList'
import productlist from '../classify/productList'
import axios from 'axios'
import {Alert} from 'vux'
export default {
    data () {
        return {
            categoryList: [], //分类列表
            type: "", //category为二级或三级分类  prodcut为一级分类
            firstIndex: -1,
            childClassify: [],
            productList: [],
            currentIndex: -1, //选中的下标
            canLoad: 1,
            pages: 1, //第几页
            alertMsg: '',//提示信息
            showAlert: false, //提示
        }
    },
    components:{
        classifysearch,
        classifylist,
        childlist,
        productlist,
        search,
        Alert,
    },
    methods: {
        judgeFn(index){
            this.currentIndex = index;
        },
        searchVal (val) {
            if (val) {
                this.$router.push({path: '/producSeachtList', query:{val:val}})
            } else {
                this.$router.push({path: '/producSeachtList', query:{val:-1}})
            }
        },
        currentFn (index) {
            this.judgeFn(index);
        },
        scrollBottom(){
            if(this.canLoad){
                this.canLoad = 0;
                this.getProduct(this.categoryList[this.currentIndex].cid,"",this.pages)
            }
        },
        getProduct(id,title,page){
            if (this.pages != -1) {
                this.$vux.loading.show({
                 text: '我已经很努力了~'
                })
                axios.get('/goods/index')
                .then(res => {
                    this.productList.push(...res.data.list.product_list)
                    if(res.data.list.product_list.length >= 10) {
                        this.pages ++
                    } else {
                        this.pages = -1
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.$vux.loading.hide();
                })
            }
        },
    },
    mounted(){
        // this.$store.commit("showLoad",1)
        this.$vux.loading.show({
         text: '我已经很努力了~'
        })
        axios.get('/goods/category')
        .then(res => {
            console.log(res.data)
            this.categoryList = res.data.list.category
            this.judgeFn(0)
            // if(this.common.getParameter("id")){
            //     res.data.list.category.map((v,i) => {
            //         if(v.cid = this.common.getParameter("id")){
            //             this.judgeFn(i)
            //             this.firstIndex = i
            //         }
            //     })
            // } else {
            //     this.judgeFn(0)
            // }
            // console.log(this.categoryList)
            this.$vux.loading.hide()
        })
        .catch(err => {
            console.log(err)
        })
    },
    watch : {
        currentIndex(newval){
            this.productList = [];
            if(this.categoryList[newval].child.length){ 
                this.type = "category"
                this.childClassify = this.categoryList[newval]
            } else {
                this.type = "product"
                this.getProduct(this.categoryList[newval].cid,"",1);
            }
        }
    }
}
</script>
<style lang="less" scoped>
.container{
    position: fixed;
    top: 40px;
    right: 0;
    bottom: 40px;
    left: 76px;
    overflow-y:scroll;
    padding-bottom: 20px;
}
</style>