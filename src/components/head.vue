<template>
    <div class="head">
        <div class="header">
                <a class="logo"><i class="iconfont icon-liebiao"></i></a>
                <div class="container">
                    <form action="#">
                        <input type="search" placeholder="请输入你想要的商品" @click="toSearch">
                    </form>
                </div>
                <a class="login">登录</a>
        </div>
    </div>    
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            toSearch(){
                this.$router.push({path:"/search"})
            },
        }
    }
</script>
<style lang="less" scoped>
.head {
    z-index: 1000;
    height: 40px;
    width: 100%;
    background-color: rgba(0, 0, 0, .0);
    position: fixed;
    top: 0;
    left: 0;
    .header {
        position: relative;
        .login {
            position: absolute;
            top: 10px;
            right: 10px;
            height: 20px;
            width: 30px;
            line-height: 20px;
            text-align: center;
            font-size: 14px;
            // color: #fff;
    }
    .logo {
            position: absolute;
            top: 10px;
            left: 10px;
            display: block;
            text-align: center;
            line-height: 20px;
            color:#ccc;
            height: 20px;
            width: 20px;
            img {
                height: 100%;
                width: 100%;
            }
            i{
                font-size: 20px;
            }
        }
    .container {
        box-sizing: border-box;
        height: 40px;
        width: 100%;
        padding-left: 40px;
        padding-right: 50px;
        border-radius: 15px;
        input {
            margin-top: 5px;
            height: 30px;
            width: 100%;
            border-radius: 15px;
            border: 1px solid #ccc;
            text-align: center;
            background-color: #fff;
        }
    }
    .login{
        color:#fff;
    }
    
    }
    

}
</style>