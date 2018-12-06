<template>
  <div class="banner">
    <div class="one">
        <swiper :aspect-ratio="375/375" height="375px" dots-position=center loop>
            <swiper-item><img src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t3871/193/501637202/67656/c6725c75/58534587N53c62548.jpg!q80.dpg.webp" alt=""></swiper-item>
            <swiper-item><img src="https://m.360buyimg.com/mobilecms/s843x843_jfs/t4069/54/534410510/84996/2d3b6e96/5853458bN0ba95462.jpg!q70.dpg.webp" alt=""></swiper-item>
            <swiper-item><img src="https://m.360buyimg.com/mobilecms/s843x843_jfs/t20734/276/732178365/32361/9944d6fe/5b16369dN616d723d.jpg!q70.dpg.webp" alt=""></swiper-item>
            <swiper-item><img src="https://m.360buyimg.com/mobilecms/s843x843_jfs/t21076/204/732166452/21647/9eb33fc/5b16369dN94b6ebe5.jpg!q70.dpg.webp" alt=""></swiper-item>
        </swiper>
    </div>
    <div class="buy_area">
      <div class="goods_detail">
        <h1><div class="left"><i class="iconfont icon-dianpu"></i>Apple AirPods 蓝牙无线耳机</div>
        <div class="right"><i class="iconfont icon-xin"></i><span>关注</span></div>
        </h1>
        <div class="summary">超24小时续航，Apple品牌配件，智慧生活，妙不可言！<span>更多Apple配件请点击！</span></div>
      </div>
      <div class="goods_price"><span>￥1199.00</span><button>降价提醒</button></div>
      <div class="promotion">
        <div class="cuxiao">
          <span class="title">促销</span>
          <div class="content">
            <div class="contentOne"><span>满送</span>满199元另加65元即赠热销商品，赠完即止，请在购物车点击领取</div>
            <div class="contentOne"><span>满送</span>满199元另加65元即赠热销商品，赠完即止，请在购物车点击领取</div>
            <div class="contentOne"><span>满送</span>满199元另加65元即赠热销商品，赠完即止，请在购物车点击领取</div>
          </div>
          <span class="more"><i class="iconfont icon-gengduo"></i></span>
        </div>
      </div>
    </div>
    <div class="format">
      <p>已选</p>
      <div class="guige">AirPods(蓝牙),1个</div>
      <span><i class="iconfont icon-gengduo"></i></span>
    </div>
    <div class="address">
      <div class="address_t">
        <h3>送至</h3>
        <div class="address_box"><p>浙江杭州市下沙区中国计量大学-学源街258号</p></div>
        <span><i class="iconfont icon-gengduo"></i></span>
      </div>
      <div class="havegoods">
        <span>有货</span>
        <p>下单后2-6天发货</p>
      </div>
      <div class="detail_serve">
        <ul>
          <li>京东发货|售后</li>
          <li>不可使用京券东券</li>
          <li>不可使用京券东券</li>
        </ul>
        <span><i class="iconfont icon-gengduo"></i></span>
      </div>
    </div>
    <div class="server">
      <span><i></i></span>
      <div class="server_box">
        <h2>增值服务</h2>
        <p>本商品支持保障服务、礼品购，点击可选服务</p>
      </div>
      <span><i class="iconfont icon-jiantou-right"></i></span>
    </div>
  </div>
</template>
<script>
  import { Swiper, SwiperItem} from 'vux'
  import axios from 'axios'
  export default {
    data(){
      return {
        obj:{
          id:this.$route.query.arr,
          price:666,
          counts:1,
          active:true,
        }
      }
    },
    components:{
      Swiper,
      SwiperItem,
    },
    methods:{
      sendToDetail(){
        this.$emit('goodsNews',this.obj)
      }
    },
    created(){
      this.sendToDetail();
    },
  }
</script>
<style lang="less" scoped>
.banner{
  background-color: #e8e8ed;
  .one{
    border-bottom: 1px solid #ccc;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .buy_area{
    background-color: #fff;
    .goods_detail{
      height: 93px;
      width: 100%;
      // background-color: red;
      padding: 12px 10px;
      box-sizing: border-box;
      h1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
          font-size: 16px;
          text-align: center;
          color: #333;
          .icon-dianpu{
            padding-right: 5px;
          }
        }
        .right{
          text-align: center;
          .icon-xin{
            font-size: 20px;
            font-weight: 700;
          }
          span{
            display: block;
            font-size: 12px;
            position: relative;
            &::before{
              content:'';
              position: absolute;
              top: -23px;
              left: -10px;
              background-color: #ccc;
              height: 40px;
              width: 1px;
            }
          }
        }
      }
      .summary{
        padding-top: 5px;
        color: #ff4732;
        span{
          color: #ff4732;
          text-decoration: underline;
        }
      }
    }
    .goods_price{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 5px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
        height: 25px;
        width: 100%;
        padding: 12px 10px;
        box-sizing: border-box;
        span{
          color: #ff4732;
          font-size: 16px;
          font-weight: 700;
        }
        button{
          font-size: 12px;
          // background-color: #f3f3f3;
          width: 60px;
          height: 20px;
        }
    }
    .promotion{
      padding: 0 35px;
      position: relative;
      .title{
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 12px;
        color: #999;
      }
      .content{
        padding: 10px;
        .contentOne{
        overflow: hidden;
        margin-bottom: 3px;
        padding: 1px;
        text-overflow:ellipsis;//文本溢出显示省略号
        white-space:nowrap;
          span{
            border: 1px solid #ff4732;
            color: #ff4732;
            border-radius: 1px;
            margin-right: 3px;
          }
        }
      }
      .more{
        position: absolute;
        top:10px;
        font-weight: 700px;
        right: 10px;
      }
    }

  }
  .format{
      margin-top:10px;
      margin-bottom: 15px;
      height: 46px;
      display: flex;
      align-items: center;
      padding: 0 44px 0 33px;
      box-sizing: border-box;
      background-color: #fff;
      text-align: center;
      position: relative;
      p{
        position: absolute;
        top: 15px;
        left: 10px;
        color: #999;
      }
      .guige{
        padding-left: 10px;
        font-size: 14px;
        color: #333;
      }
      span{
        position: absolute;
        top: 15px;
        right: 10px;
      }

  }
  .address{
    padding: 13px 0 12px;

    background-color: #fff;
    .address_t{
      padding: 0 44px 0 33px;
      position: relative;
      h3{
      position: absolute;
      top: 0px;
      left: 10px;
      color: #999;
      }
      .address_box{
        padding-left: 10px; 
      }
      span{
        position: absolute;
        right: 10px;
        top: 0px;
      }
    }
    .havegoods{
      padding: 5px 44px 10px 43px;
      border-bottom: 1px solid #ccc;
      span{
        color: #ff4732;
      }
      p{
        display: inline-block;
        color: #999
      }
    }
    .detail_serve{
      padding: 10px 40px 10px 10px;
      position: relative;
      ul{
        li{
          float: left;
          padding-right: 10px;
          padding-bottom: 5px;
          color: #999;
        }
      }
      span{
        position: absolute;
        right: 10px;
      }
    }
  }
  .server{
    margin: 10px 0;
    background-color: #fff;
    padding: 5px 25px;
    position: relative;
    .server_box{
      h2{
        font-size: 14px;
        color: #333
      }
      p{
        color: #999;
      }
    }
    span{
      .icon-jiantou-right{
        position: absolute;
        right: 10px;
        top: 20px;
      }
    }

  }
}
</style>
