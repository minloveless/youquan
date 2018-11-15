<template>
    <div class="container">
        <div class="search_top">
            <span class="to_last" @click="backhome"><img src="" alt="">
            <i class="iconfont icon-left"></i>
            </span>
            <form action="#">
                <input type="search" class="sousuo" placeholder="请输入你想要的产品">
            </form>
            <span class="gengduo"><i class="iconfont icon-gengduo"></i></span>
        </div>
    </div>
</template>
<script>
    export default{
        methods:{
            backhome(){
                this.$router.go(-1)
            }
        }
    }
</script>
<style lang="less" scoped>
.container{
    position: fixed;
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
            left: 6px;
            top: 10px;
            text-align: center;
            color: #5d5f6a;
            img{
                height: 100px;
                width: 100px;
            }
            i{
                font-size: 20px;
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
        .gengduo{
            display: block;
            position: absolute;
            right: 1px;
            top: 10px;
            height: 25px;
            width: 35px;
            color: #5d5f6a;
            i{
                font-size: 20px;
            }
        }
    }
}    
</style>
