<template>
    <div ref="container">
        <div class="goodsCom" v-if="productList.length" v-for="item in productList" :key="item.id" @click="goDetail(item.id)">
            <div class="imgBox">
                <span class="presellBox" v-if="item.ispress == 1">
                    <img src="../../assets/images/yushou.png" alt="" class="pressllImg">
                </span>
                <img :src="item.img" alt="" :class="{isBig:isBig}">
            </div>
            <div class="bottomDiv">
                <h2 style="-webkit-box-orient: vertical;">{{item.title}}</h2>
                <p>
                    <b>￥{{item.price.split(".")[0]}}.<i>{{item.price.split(".")[1]}}</i></b>
                    <!-- <span>赚￥100</span> -->
                </p>
            </div>
        </div>
        <div v-if="!productList.length" class="emptyDiv"> 
            <span class="weui-loadmore__tips">无更多数据</span>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        props: ["productList"],
        methods: {
            goDetail(ids){
                this.router.push({path: '../product/productDetail',query: {id:ids}})
            },
            scrollBottom(){
                if(this.$refs.container.scrollTop + this.$refs.container.offsetHeight >= this.$refs.container.scrollHeight) {
                    this.$emit("canScroll")
                }
            }
        },
        mounted(){
            this.$refs.container.addEventListener('scroll',this.scrollBottom)
        }
    }
</script>
<style lang="less" scoped>
.container{
    position: fixed;
    left: 0;
    right: 0;
    overflow-y: scroll;
    bottom: 0;
    top: 1.137rem;
}
.goodsCom{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    padding: 0.32rem;
    border-bottom: 1px solid #f5f5f5;
    img{
        height: 2.667rem;
        width: 2.667rem;
        border-radius: 3px;
    }
    div.imgBox{
        position: relative;
        min-height: 2.667rem;
        min-width: 2.667rem;
        border-radius: 3px;
        p{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0.64rem;
            line-height: 0.64rem;
            color: #fff;
            background: #FFA11B;
            font-size: 0.29rem;
            text-align: center;
        }
    }
    div.bottomDiv{
        margin-left: 0.2667rem;
        position: relative;
        width: 100%;
        h2{
            font-size: 0.427rem;
            color: #333333;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            margin-top: 5px;
            span{
                font-size: 0.32rem;
                color: #fff;
                background-color: #FFA11B;
                display: inline-block;
                padding: 2px 5px;
                margin-right: 10px;
                border-radius: 1px;
            }
        }
        b{
            font-size: 0.427rem;
            color: #333333;
            font-weight: normal;
            line-height: 0.667rem;
            display: block;
            font-weight: bold;
            position: absolute;
            bottom: 0.7rem;
            left: 0;
        }
        span{
            position: absolute;
            left: 0;
            bottom: 0.3733rem;
            color: #999999;
            text-decoration: line-through;
        }
        p{
            color: #999999;
            font-size: 0.32rem;
        }
        button{
            position: absolute;
            bottom: 0;
            right: 0;
            color: #fff;
            background: #FF3742;
            border: none;
            width: 1.867rem;
            text-align: center;
            height: 0.693rem;
            line-height: 0.693rem;
            border-radius: 3px;
            &.bugReady{
                background-color: #FFA11B;
            }
        }
    }
}
.emptyDiv{
    position: absolute;
    border-top: 1px solid #f5f5f5;
    width: 65%;
    line-height: 1.6em;
    font-size: 0.37rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 40px;
    left: 50%;
    margin-left: -32.5%;
    span{
        position: relative;
        top: -.9em;
        padding: 0 .55em;
        color: #999;
        display: inline-block;
        vertical-align: middle;
        background: #fff;
        line-height: 1.6em;
        font-size: 0.37rem;
        text-align: center;
    }
}

//预售标识
.presellBox .presellImg{
  position: absolute;
  top: 4px;
  left: -4px;
  height:21px !important;
  width: 40px !important;
}
</style>
