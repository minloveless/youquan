<template>
  <div class="banner">
          <x-header :left-options="{backText:''}"
        :right-options="{showMore:true}">我的订单</x-header>
        <div class="searchOrder">
          <input type="search" name="" id="" placeholder="商品名称/商品编号/订单号">
          <i class="iconfont icon-search"></i>
        </div>
        <div class="order_bar">
          <div class="left">
            <tab :line-width=2 active-color="#ff3742" default-color="#333333" v-model="index" class="orderTab">
              <tab-item @on-item-click="changeOrder(item.statuIds)" class="vux-center" :selected="defaultSelect === index" v-for="(item,index) in list" :key="index">{{item.text}}</tab-item>
              <!-- <tab-item @on-item-click="handler">待付款</tab-item>
              <tab-item @on-item-click="handler">待收货</tab-item>
              <tab-item @on-item-click="handler">已完成</tab-item> -->
            </tab>
          </div>
          <div class="more">|<i class="iconfont icon-down-trangle"></i></div>
        </div>
        <div class="goodsBox">
          <div class="Card">
            <div class="top">
              <span class="logo"><i class="iconfont icon-search"></i></span>
              <span class="shop_name">有券</span>
              <span class="status">待支付</span>
            </div>
            <div class="order_item">
              <div class="order_item_t">              
                <img src="https://img10.360buyimg.com/n2/jfs/t3175/89/2690068639/114728/22c2edee/57e4a35bn230918c0.jpg!q70.dpg" alt="">
                <div class="content">
                  <p> Apple iPhone 6s Plus (A1699) 32G 玫瑰金色 移动联通电信4G手机</p>
                </div>
              </div>
              <div class="order_item_b">
                <div>全部金额：<span class="price">￥1799.00</span></div>
                <div><span>共1件商品</span></div>
              </div>
            </div>
            <div class="bottom">
              <div class="bottom_box">
                <div class="button">
                  <span>去支付</span>
                </div>
                <div><i></i><span>支付剩余23时59分</span></div>
              </div>

            </div>
          </div>

        </div>
  </div>
</template>
<script>
  import {XHeader, Tab, TabItem, } from 'vux'
  // import $router from '../../../router/index.js'
  export default {
    data () {
      return {
        list:[
          {
            statuIds: '0',
            text:"所有订单"
          },
          {
            statuIds: '1',
            text:"待付款"
          },
          {
            statuIds: '2',
            text:"待收货"
          },
          {
            statuIds: '3',
            text:"已完成"
          },
        ],
        checkStatus:-1,
        defaultSelect:0,
        index:0,
      }
    },
    methods:{
      changeOrder(status){
        this.checkStatus = status;
        this.dataList = '';
        this.orederDefault=false
        // this.getOrderList(status,1)
      },
    },
    components:{
      XHeader,
      Tab,
      TabItem,
    },
    mounted(){
      //获取订单列表
      if (this.$route.query.status == "") {

      } else {
        // console.log(this.$route.query.status)
        // console.log($router.history.current.query[status])
        this.defaultSelect = Number(this.$route.query.status);
      }
    }
  }
</script>
<style lang="less" scoped>
// body{
//   background-color: #f7f7f7;
// }
.banner{
  background-color: #f7f7f7;
  height: 100%;
  .searchOrder{
    height: 46px;padding: 8px 10px;
    position: relative;
    box-sizing: border-box;
    input{
      height: 30px;
      width: 355px;
      border-radius: 10px;
      font-style: normal;
      outline: none;
      border: none;
      background-color: #fff;
      padding: 0 30px;
      font-size: 14px;
      color: #333;
    }
    .icon-search{
      position: absolute;
      top: 15px;
      left: 15px;
      color:#999;
    }
  }
  .order_bar{
    position: relative;
    .left{
      width: 330px;
    }
    .more{
      height: 44px;
      position: absolute;
      top: 0;
      right: 0;
      width: 45px;
      background-color: #fff;
      color: #999;
      font-size:14px;
      line-height: 44px;
      .icon-down-trangle{
        margin-left: 10px;
        font-weight: 800;
        color: #e5e5e5;
      }
    }
  }
  .goodsBox{
    .Card{
      margin: 15px;
      padding: 10px;
      background-color: #fff;
      .top{
        height: 26px;
        line-height: 26px;
        .logo{
          width: 16px;
          height: 16px;
        }
        .shop_name{
          font-size: 16px;
        }
        .status{
          float: right;
          font-size: 14px;
          color: #ff3742;
        }
      }
      .order_item{
        .order_item_t{
            margin-top: 8px;
            display: flex;
            justify-content: center;
              align-items: center;
            img{
              width: 75px;
              height: 75px;
            }
            .content{
              flex: 1;
              padding-left: 10px;
              p{
                display: block;
                color: #333;
                font-size: 14px;
              }
            }
        }
        .order_item_b{
          height: 33px;
          padding: 6px 0;
          border-bottom: 1px solid #ccc;
          box-sizing: border-box;
          div{
            float: right;
            color: #999;
            margin-left:10px ;
            font-size: 14px;
            .price{
              color: #333;
            }
          }
        }
      }
    }
  }
  .bottom{
    height: 30px;
    padding-top: 10px;
    line-height: 30px;
    .bottom_box{
      div{
        float: right;
        padding-left: 10px;
        color: #999;
        font-size: 12px;
      }
      .button{
          height: 30px;
          width: 86px;
          background-color: #ff3742;
          margin-left:6px;
          border-radius: 5px;
          padding-left: 23px;
          box-sizing: border-box;
          // text-align: center;
          line-height: 30px;
          color: #fff;
          font-size: 14px;
        }
    }
  }
}
</style>
