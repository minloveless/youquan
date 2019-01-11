<template>
    <div class="search_container">
        <div class="search_top">
            <span class="to_last" @click="backhome"><img src="" alt="">
            <i class="iconfont icon-left"></i>
            </span>
            <form action="#" onsubmit = "return false">
                <input type="search" v-focus class="sousuo" placeholder="请输入你想要的产品" v-model="keyWords" @keyup.13 = "goList">
            </form>
            <button @click="goList">搜索</button>
        </div>
        <div v-if=""></div>
        <div class="search_show" v-show="$route.path == '/search'">
            <span>热门搜索</span>
            <ul>
                <li v-for="item in computedList">{{item.name}}</li>
                <!-- <li>美的烤箱</li>
                <li>格力烤箱</li>
                <li>奥克斯烤箱</li>
                <li>烤箱</li>
                <li>烤箱</li> -->
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                keyWords:'',
                list:[
                    {
                        id:1,
                        name:'西门子烤箱'
                    },
                    {
                        id:2,
                        name:'美的烤箱'
                    },
                    {
                        id:3,
                        name:'格力空调'
                    },
                    {
                        id:4,
                        name:'奥克斯风扇'
                    },
                    {
                        id:5,
                        name:'小米平衡车'
                    },
                    {
                        id:6,
                        name:'美菱冰箱'
                    },
                    {
                        id:7,
                        name:'华为热水器'
                    },
                ]
            }
        },
        props:['val'],
        methods:{
            backhome(){
                this.$router.go(-1);
            },
            goList(){
                this.$emit('searchVal',encodeURI(this.keyWords))
                console.log('---------------')
            }
        },
        directives: {
            focus: {
                inserted: function (el) {
                    el.focus()
                }
            }
        },
        watch: {
            val(newVal){
                this.keyWords = newVal
            }
        },
        computed:{
            computedList: function() {
                var that = this;
                return this.list.filter(function(item){
                    return item.name.indexOf(that.keyWords) != -1
                })
            }
        }
    }
</script>
<style lang="less">
.search_container {
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 40px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    top: 0;
    left: 0;
    .search_top {
        margin: 0 auto;
        padding-left: 40px;
        padding-right: 50px;
        position: relative;
        .to_last {
            position: absolute;
            left: 10px;
            top: 10px;
            height: 20px;
            width: 20px;
            line-height: 20px;
            text-align: center;
            color: #ccc;
            img{
                height: 100px;
                width: 100px;
            }
        }
        form{
            display: block;
            height: 40px;
            background-color: #fff;
            .sousuo{
                display: inline-block;
                width: 100%;
                height: 30px;
                border-radius: 15px;
                border: none;
                outline: none;
                -webkit-appearance: none;
                background-color: #f7f7f7;
                margin-top: 5px;
                padding-left:10px;
                // text-align: center;
            }
        }
        button{
            position: absolute;
            right: 8px;
            top: 8px;
            background-color: #ccc;
            border: none;
            outline: none;
            -webkit-appearance: none;
            display: inline-block;
            height: 25px;
            width: 35px;
            color: #fff;
            border-radius: 5px;
        }
    }
    .search_show{
        padding-left: 10px;
        padding-right: 10px;
        span{
            display: block;
            padding-top: 15px;
            padding-left: 5px;
            font-size: 16px;
        }
        ul{
            display: -webkit-flex;
            display: flex;
            flex-wrap: wrap;
            li{
                background-color: rgba(0, 0, 0, 0.1);
                margin: 10px 5px 0 5px;
                padding: 5px 8px;
                border-radius: 5px;
                &:nth-child(-n+3){
                    color: cyan;
                };
            }

        }
    }
}
</style>
