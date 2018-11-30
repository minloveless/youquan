<template>
  <div class="bannerOne">
    <topBar></topBar>
    <goods @goodsNews="goodsNews"></goods>
    <comment></comment>
    <tuwen></tuwen>
    <recommend></recommend>
    <div class="shopping">
      <div class="contact"><i class="iconfont icon-kefu"></i><span>联系客服</span></div>
      <div class="shop"><i class="iconfont icon-dianpu"></i><span>进店</span></div>
      <div class="shopcar" @click="goShopCar"><div class="circle">{{$store.getters.getAllCount}}</div><i class="iconfont icon-gouwuche"></i><span>购物车</span></div>
      <div class="addShopcar" @click="addToShopCar">加入购物车</div>
      <div class="buyNow">立即购买</div>
    </div>
  </div>
</template>
<script>
import topBar from '../../topBar'
import goods from './goods'
import comment from './comment'
import tuwen from './/tuwen'
import recommend from './recommend'
  export default{
    data(){
      return{
        goodsPrice:'',
        id:'',
        counts:'',
      }
    },
    components:{
      topBar,
      goods,
      comment,
      tuwen,
      recommend
    },
    methods:{
      addToShopCar(){
        //添加到购物车
        var goodsinfo = {
          id: this.id,
          price: this.goodsPrice,
          counts: this.counts
        }
        this.$store.commit("addToCar",goodsinfo);
      },
      goodsNews(data){
        this.goodsPrice = data.price
        console.log(this.goodsPrice)
        this.id = data.id
        console.log(this.id)
        this.counts = data.counts
        console.log(this.counts)
      },
      goShopCar(){
        this.$router.push({path:'/shopcar'})
      }
    }
  }
</script>
<style lang="less" scoped>
.bannerOne{
  padding-top: 45px;
  overflow-y:scroll;
  .shopping{
    display: flex;
    height: 50px;
    width: 100%;
    // background-color: pink;
    background-color: #f5f5f5;
    position: fixed;
    bottom: 0;
    left: 0;
    .contact{
              padding-top: 10px;
      float: left;
      width: 52.5px;
      height: 50px;
      text-align: center;
      color: #666;
            span{
        display: block;
        font-size: 12px;

      }
    }
    .shop{
      padding-top: 10px;
      float: left;
      width: 52.5px;
      height: 50px;
      // line-height: 52.5px;
      text-align: center;
      color: #666;
      span{
        display: block;
        font-size: 12px;
      }
    }
    .shopcar{
      padding-top: 10px;
      float: left;
      position: relative;
      width: 52.5px;
      height: 50px;
      text-align: center;
      color: #666;
      span{
        display: block;
        font-size: 12px;
      }
      .circle{
        height: 12px;
        line-height: 12px;
        width: 12px;
        background-color: #ff3742;
        border-radius: 8px;
        color: #fff;
        font-size: 7px;
        font-weight: 700;
        text-align: center;
        border: 1px solid #fff;
        position: absolute;
        right: 12px;
        top: 5px;
      }
    }
    .addShopcar{
      flex: 1;
      background-color: #ff9600;
      text-align: center;
      color: #fff;
      font-size: 14px;
      // font-weight: 700;
      line-height: 50px;
    }
    .buyNow{
      flex: 1;
      background-color: #ff3742;
            text-align: center;
      color: #fff;
      font-size: 14px;
      // font-weight: 700;
      line-height: 50px;
    }
  }
}
</style>
