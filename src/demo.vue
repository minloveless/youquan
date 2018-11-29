<template>
    <div class="downTip">
        <div class="downDia" v-if="showDown">
            <span class="imgCancel" @click="downCancel"><img src="./assets/images/homeCancel.png" /></span>
            <span class="downLogo"> <img src="./assets/images/logo2.png" alt=""></span>
            <span class="downCode">邀请码：8450</span>
            <button class="downBtn" @click="downAppBtn">立即下载</button>
        </div>
    </div>
</template>

<script>
    // var fly =require("flyio")
    // fly.get('http://api.douban.com/v2/movie/in_theaters')
    //     .then(function(res){
    //         console.log(res)
    //     })
    //     .catch(function(error){
    //         console.log(error)
    //     })
    export default {
        data(){
            return {
                showDown:true,
            }
        },
        methods: {
            downAppBtn(){
                this.$router.push({path:"/appDownPage"})
            },
            downCancel(){
                this.showDown = "false"
            }
        }
    }
</script>
<style lang="less" scoped>
body {
    margin: 0;
    padding: 0;
    background: #F5F5F5;
}
.downTip {
    background-color: rgba(0, 0, 0, .6);
    position: fixed;
    width: 100%;
    z-index: 5;
}
.downDia {
    padding: 7px 15px 5px 12px;
    .imgCancel {
       display: block;
       height: .5rem;
       width: .5rem;
       float: left;
       margin-top: .148rem;
       img {
           height: 100%;
           width: 100%;
       }
    }
    .downLogo {
        display: block;
        height: .8rem;
        width: .8rem;
        float: left;
        margin: 0 .2rem;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .downCode {
        color: #ff3742;
        font-size: .374rem;
        line-height: .85rem;
    }
    .downBtn {
        float: right;
        width: 1.87rem;
        height: .8rem;
        line-height: .8rem;
        background: #ff3742;
        border: none;
        color: #fff;
        text-align: center;
        border-radius: 4px;
        font-size: .374rem;
    }
}
// @import "./style/index.less";
</style>