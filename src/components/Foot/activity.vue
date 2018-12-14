<template>
    <div>
        <scroller lock-x height="-50">
            <div>
                <div>
                <x-header :left-options="{backText:''}"
                :right-options="{showMore:true}">优惠活动</x-header>
            </div>
            <div class="search">
                <div class="search_box">
                    <i class="iconfont icon-search"></i>
                    <form action="#" @click="toSearch">
                        <input type="search" placeholder="输入您想要的商品">
                    </form>
                </div>
            </div>
            <div class="activity_bar">
                <tab :scroll-threshold = '4'>
                    <tab-item>数码</tab-item>
                    <tab-item>手机</tab-item>
                    <tab-item>服饰</tab-item>
                    <tab-item>日用</tab-item>
                    <tab-item>配饰</tab-item>
                    <tab-item>美妆</tab-item>
                    <tab-item>家用</tab-item>
                    <tab-item>生活</tab-item>
                    <tab-item>食品</tab-item>
                    <tab-item>家具</tab-item>
                </tab>
            </div>
            <div class="banner">
                <swiper auto  height="100px" dots-position=center loop>
                    <swiper-item><img src="https://m.360buyimg.com/mobilecms/jfs/t1/8003/29/6295/117672/5be0ec9eE6f1b99f8/4cf474a3aa0d3744.jpg!cr_1125x549_0_72" alt=""></swiper-item>
                    <swiper-item><img src="https://m.360buyimg.com/mobilecms/jfs/t1/9429/34/2137/147775/5bd15bf8E1d6f1c64/6541186b799d8fc6.jpg!cr_1125x549_0_72" alt=""></swiper-item>
                    <swiper-item><img src="https://m.360buyimg.com/mobilecms/s1125x690_jfs/t1/4588/15/15904/318880/5be06c95E13b7c8db/69ee7809845031ee.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt=""></swiper-item>
                    <swiper-item><img src="https://m.360buyimg.com/mobilecms/s1125x690_jfs/t1/7351/10/6081/101878/5be01241E73550889/d06ba3720b7bd654.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt=""></swiper-item>
                </swiper>
            </div>
            <div class="grid10">
                <ul>
                    <li><i class="iconfont icon-leimupinleifenleileibie"></i>9.9包邮</li>
                    <li><i class="iconfont icon-leimupinleifenleileibie"></i>1元福利</li>
                    <li><i class="iconfont icon-leimupinleifenleileibie"></i>好货清单</li>
                    <li><i class="iconfont icon-leimupinleifenleileibie"></i>自营优选</li>
                    <li><i class="iconfont icon-leimupinleifenleileibie"></i>逛超市</li>
                    <li><i class="iconfont icon-leimupinleifenleileibie"></i>名牌特卖</li>
                    <li><i class="iconfont icon-leimupinleifenleileibie"></i>工厂直销</li>
                    <li><i class="iconfont icon-leimupinleifenleileibie"></i>砍价免费领</li>
                    <li><i class="iconfont icon-leimupinleifenleileibie"></i>签到拿红包</li>
                    <li><i class="iconfont icon-leimupinleifenleileibie"></i>限时五折</li>
                </ul>
            </div>
            <div class="oneshopping">
                <div class="hotMovie" @click="goDetail">
                    <div class="top">品牌秒杀<i class="iconfont icon-jiantou-right"></i></div>
                    <div class="movie_box"><img src="https://img14.360buyimg.com/jdphoto/s750x240_jfs/t5701/93/1357646628/41007/26b3ebf6/5925858bNbab5cb1d.png!q70.webp" alt=""></div>
                </div>
            </div>
            <div class="everydayshop">
                <div class="top">
                    <span>每日好货上新</span>
                    <span>12.12超值好货推荐</span>
                </div>
                <div class="goods_box">
                    <div class="goods">
                    </div>
                </div>
                
            </div>
            </div>
        </scroller>
    </div>
</template>
<script>
import {Scroller, XHeader, Tab, TabItem, Swiper, SwiperItem} from 'vux'
export default {
    components:{
        Scroller,
        XHeader,
        Tab,
        TabItem,
        Swiper,
        SwiperItem,
    },
    methods:{
            toSearch(){
                this.$router.push({path:"/search"})
            },
            goDetail(){
                this.$router.push({path:"/limitTime"})
            }
    }
}
</script>
<style lang="less" scoped>
// .body{
//     padding-bottom: 100px;
// }
.search{
    padding: 10px;
    .search_box{
        padding: 0 30px;
        background-color: #f3f3f3;
        border-radius: 15px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        position: relative;
        .icon-search{
            position: absolute;
            left: 10px;
            font-size: 20px;
        }
        form{
            height: 100%;
            width: 100%;
            input{
                height: 100%;
                width: 100%;
                border: none;
                outline: none;
                -webkit-appearance: none;
                background-color: #f3f3f3;   
                padding-left: 10px;
                font-size: 15px;
                color:#333;
            }
        }
    }
}
.banner{
    img{
        height: 100%;
        width: 100%;
    }
}
.grid10{
    ul{
        padding-top: 15px;
        height: 130px;
        background: url("//img13.360buyimg.com/jdphoto/jfs/t30400/24/184332313/31758/84fdbca1/5beaa323N9494928d.jpg") 0% 0% / cover;
        li{
            float: left;
            width: 20%;
            text-align: center;
            padding-bottom: 15px;
            font-size: 12px;
            color: #333;
            i{
                display: block;
                text-align: center;
                font-size: 30px;
                color: #ff3742;
            }
        }
    }
}
.oneshopping{
    margin-bottom: 10px;
    .hotMovie{
        // margin: 10px 0;
        background-color: #f3f3f3;
        padding-bottom: 10px;
        .top{
            height: 30px;
            width: 100%;
            line-height: 30px;
            color: #666;
            padding-left: 5px;
            .icon-jiantou-right{
                float: right;
                font-size: 12px;
                margin-right: 10px;
            }
        }
        .movie_box{
            margin-left: 18px;
            height: 80px;
            width: 90%;
            img{
                height: 100%;
            }
            border-radius: 10px;
            overflow: hidden;
        }
    }
    img{
        width: 100%;
        height: 100%;
    }
}
.everydayshop{
    .top{
        height: 52px;
        padding: 10px 0;
        margin-top: 10px;
        text-align: center;
        background-image: url("//img30.360buyimg.com/jdphoto/jfs/t26323/365/897310419/9094/29327c7/5bbc3f85Nc27e4f69.jpg!q70.dpg"); 
        background-size: 100% 100%;
        span:nth-child(1){
            display: block;
            font-size: 16px;
            color: #333;
        }
        span:nth-child(2){
            display: block;
            font-size: 12px;
            color: #ccc;
        }
    }
    .goods_box{
        .goods{
            height: 150px;
            width: 100%;
            background-color: cyan;
        }

    }
}
</style>