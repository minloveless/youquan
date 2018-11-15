<template>
<div class="indexhome">
<head-huihao></head-huihao>
<scroller lock-x height="-55">
<div>
    <div class="banner">
        <swiper auto  height="188px" dots-position=center loop>
            <swiper-item><img src="https://m.360buyimg.com/mobilecms/jfs/t1/8003/29/6295/117672/5be0ec9eE6f1b99f8/4cf474a3aa0d3744.jpg!cr_1125x549_0_72" alt=""></swiper-item>
            <swiper-item><img src="https://m.360buyimg.com/mobilecms/jfs/t1/9429/34/2137/147775/5bd15bf8E1d6f1c64/6541186b799d8fc6.jpg!cr_1125x549_0_72" alt=""></swiper-item>
            <swiper-item><img src="https://m.360buyimg.com/mobilecms/s1125x690_jfs/t1/4588/15/15904/318880/5be06c95E13b7c8db/69ee7809845031ee.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt=""></swiper-item>
            <swiper-item><img src="https://m.360buyimg.com/mobilecms/s1125x690_jfs/t1/7351/10/6081/101878/5be01241E73550889/d06ba3720b7bd654.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt=""></swiper-item>
        </swiper>
    </div>
    <div class="activity">
        <div class="container">
            <img src="https://m.360buyimg.com/mobilecms/jfs/t24802/38/2146820114/273055/ca7d66d9/5beaef5aN31e6b52b.gif" alt="">
        </div>
    </div>
    <div class="grid8">
        <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">
            <grid-item>
                <img slot="icon" src="https://m.360buyimg.com/babel/jfs/t20584/102/549181811/13382/55c7d693/5b11020fN9a23f657.png" alt="">
                <span slot="label">酒水</span>
            </grid-item>
            <grid-item>                
                <img slot="icon" src="https://m.360buyimg.com/babel/jfs/t20584/102/549181811/13382/55c7d693/5b11020fN9a23f657.png" alt="">
                <span slot="label">酒水</span>
            </grid-item>
            <grid-item>                
                <img slot="icon" src="https://m.360buyimg.com/babel/jfs/t20584/102/549181811/13382/55c7d693/5b11020fN9a23f657.png" alt="">
                <span slot="label">酒水</span>
            </grid-item>
            <grid-item>                
                <img slot="icon" src="https://m.360buyimg.com/babel/jfs/t20584/102/549181811/13382/55c7d693/5b11020fN9a23f657.png" alt="">
                <span slot="label">酒水</span>
            </grid-item>
            <grid-item>                
                <img slot="icon" src="https://m.360buyimg.com/babel/jfs/t20584/102/549181811/13382/55c7d693/5b11020fN9a23f657.png" alt="">
                <span slot="label">酒水</span>
            </grid-item>
            <grid-item>                
                <img slot="icon" src="https://m.360buyimg.com/babel/jfs/t20584/102/549181811/13382/55c7d693/5b11020fN9a23f657.png" alt="">
                <span slot="label">酒水</span>
            </grid-item>
            <grid-item>                
                <img slot="icon" src="https://m.360buyimg.com/babel/jfs/t20584/102/549181811/13382/55c7d693/5b11020fN9a23f657.png" alt="">
                <span slot="label">酒水</span>
            </grid-item>
            <grid-item>                
                <img slot="icon" src="https://m.360buyimg.com/babel/jfs/t20584/102/549181811/13382/55c7d693/5b11020fN9a23f657.png" alt="">
                <span slot="label">酒水</span>
            </grid-item>
        </grid>
    </div>
    <div class="news">
        <a href="#" class="title">一言早报</a>
        <div class="shownews">看一言早报，新闻早知道</div>
        <a href="#" class="more">|
            <span>更多</span>
        </a>
    </div>
    <div class="goods">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="mk">
        <a href="#" class="title">秒杀时间</a>
        <div class="shownews">10点场 00:45</div>
        <a href="#" class="more">|
            <span>更多秒杀</span>
        </a>
    </div>
    <div class="goods">
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
</scroller>
</div>

</template>
<script>
import {Swiper, SwiperItem, Grid, GridItem, Scroller} from 'vux'
import headHuihao from "./components/head"
export default {
    components: {
        Swiper,
        SwiperItem,
        headHuihao,
        Grid,
        GridItem,
        Scroller,
    }
}
</script>
<style lang="less" scoped>
.indexhome{
    .banner {
    height: 188px;
    width: 100%;
    img{
    width: 100%;
    height: 100%;
    }
    }
    .activity{
        border-radius: 15px;
        position: relative;
        height: 107px;
        width: 100%;
        // border-bottom: 1px solid #ccc;
        .container{
            position: absolute;
            left: 0;
            top:-8px;
            img{
                width: 100%;
                height: 100%;
            }
        } 
    }
    .grid8{
        padding-top: 10px;
    }
    .news{
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        .title{
            display: block;
            float: left;
            color: cyan;
            font-size: 16px;
        }
        .shownews{
            float: left;
            padding-left: 10px;
        }
        .more{
            display: block;
            float: right;
            color:#ccc;
            span{
                color:cyan;
            }
            
        }
    }
    .goods{
        display: -webkit-flex;
        display: flex;
        div:nth-child(1){
            height: 85px;
            width: 195px;
            background-color: cyan;
            margin-left: 10px;
            border-radius: 10px;
        }
        div:nth-child(2){
            height: 85px;
            width: 70px;
            background-color: pink;
            margin-left: 10px;
             border-radius: 10px;
        }
        div:nth-child(3){
            height: 85px;
            width: 70px;
            background-color: red;
            margin-left: 10px;
             border-radius: 10px;
        }
    }
    .mk{
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        .title{
            display: block;
            float: left;
            color: cyan;
            font-size: 16px;
        }
        .shownews{
            float: left;
            padding-left: 10px;
        }
        .more{
            display: block;
            float: right;
            color:#ccc;
            span{
                color:cyan;
            }
            
        }
    }
}

</style>
