<template>
    <div class="head">
        <div class="header">
                <a class="logo"><img src="https://img20.360buyimg.com/da/jfs/t1/10711/29/1406/175826/5bddbc89Ee3205f5c/47702a52efff38ad.gif?t=1541497689890" alt=""></a>
                <div class="container">
                    <form action="#">
                        <input type="search" placeholder="请输入你想要的商品">
                    </form>
                </div>
                <a class="login">登录</a>
        </div>
    </div>    
</template>
<script>
    
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
            color: #fff;
    }
    .logo {
            position: absolute;
            top: 10px;
            left: 10px;
            display: block;
            background-color: green;
            height: 20px;
            width: 20px;
            img {
                height: 100%;
                width: 100%;
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
    
    }
    

}
</style>