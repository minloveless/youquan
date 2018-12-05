<template>
    <div>
        <!-- <div class="lookRecord_box">
            <div class="topBar">
                <div>浏览记录</div>
                <div><i></i>清空</div>
            </div>
            <div class="lookRecord">
                <div class="imgBox">
                    <img src="" alt="">
                </div>
                <p>手机</p>
            </div>
        </div> -->
        <div class="childrenList">
            <div class="recordBox" v-for="(item,index) in childList" :key="index">
                <div class="topBar">
                    <p>{{item.title}}</p>
                </div>
                <div class="goodsBox" @click="toProductMore(items.id)" v-for="(items,index) in item.item_list" :key="index">
                    <img src="https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png" alt="">
                    <span>{{items.title}}</span>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        data(){
            return{
                childList:[],
            }
        },
        methods:{
            toProductMore(id){
                this.$router.push({path:'/producSeachtList',query:{id:id}})
            },
            getChildList(){
                axios.get('/classify/childList')
                .then(res => {
                    console.log(res.data)
                    this.childList = res.data.child_List
                })
                .catch(err => {
                    console.log(err)
                })
            }
        },
        mounted(){
            this.getChildList()
        }

    }
</script>
<style lang="less" scoped>
.recordBox{
    margin: 19px 10px 0;
    overflow: hidden;
    .topBar{
        font-size:14px;
        color:#333;
        font-weight: 700;
    }
    .goodsBox{
        float: left;
        padding: 10px 10px 0;
        margin-top: 10px;
        img{
            width: 70px;
            height: 70x;
        }
        span{
            display: block;
            text-align: center;
            font-size: 12px;
        }
    }
}
</style>
