<template>
    <div class="search_container">
        <div class="search_top">
            <span class="to_last" @click="backhome"><img src="" alt="">
            <i class="iconfont icon-left"></i>
            </span>
            <form action="#">
                <input type="search" class="sousuo" placeholder="请输入你想要的产品">
            </form>
            <button>搜索</button>
        </div>
        <div class="search_show" v-if="false">
            <span>热门搜索</span>
            <ul>
                <li>西蒙子烤箱</li>
                <li>美的烤箱</li>
                <li>格力烤箱</li>
                <li>奥克斯烤箱</li>
                <li>烤箱</li>
                <li>烤箱</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                // keyWords:'',
            }
        },
        // props:{
        //     keyWord:Number,
        // },
        methods:{
            backhome(){
                this.$router.go(-1);
            },
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
