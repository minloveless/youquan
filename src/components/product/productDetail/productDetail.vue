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
      <div class="shopcar" @click="goShopCar"><div class="circle" v-show="$store.getters.getAllCount">{{$store.getters.getAllCount}}</div><i class="iconfont icon-gouwuche"></i><span>购物车</span></div>
      <div class="addShopcar" @click="addToShopCar">加入购物车</div>
      <div class="buyNow">立即购买</div>
    </div>

    <!-- 弹窗 -->

    <!-- 规格弹窗 START-->
    <div class="specDiaMask" v-show="isSpecDia" @click="closeSpecDia"></div>
    <transition name="popUps">
      <div class="specDialog" v-show="isSpecDia">
        <div class="specBox">
          <div class="header">
            <div class="imgBox">
              <img src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t27343/230/651450975/187948/9b39b70e/5bb49270N38f6f9b4.png!q80.dpg.webp" alt="">
            </div>
            <div class="contentBox">
              <p class="top">￥<span>1380</span>.00</p>
              <p class="bottom">
                  <span class="content">{{spec_id ? "已选":"请选择"}}</span>
                  <span v-show="!spec_id" class="details"><span v-show="oneSpecTab==null||oneSpecTab==-1">{{specTitle1}}</span><span v-show="twoSpecTab==null||oneSpecTab==-1">{{specTitle2}}</span><span v-show="threeSpecTab==null||oneSpecTab==-1">{{specTitle3}}</span></span>
                  <span v-show="spec_id" class="details"><span v-show="firstChoose">{{firstChoose}}</span><span v-show="secondChoose">{{secondChoose}}</span><span v-show="threeChoose">{{threeChoose}}</span></span>
              </p>
            </div>
            <div class="delectBox" @click="closeSpecDia">
              <i class="iconfont icon-shanchu1"></i>
            </div>
          </div>
          <div class="body">
            <div class="specSelect">
              <div class="spec">
                <div class="title">{{this.list[0].title}}</div>
                <div class="select">
                  <span v-for="(item,index) in this.list[0].color" :key="index" :class="{selected:oneSpecTab == index}" @click="toggleOne(index,item)">{{item}}</span>
                </div>
              </div>
              <div class="spec">
                  <div class="title">{{this.list[1].title}}</div>
                  <div class="select">
                    <span v-for="(item,index) in this.list[1].version" :key="index" :class="{selected:twoSpecTab == index}" @click="toggleTwo(index,item)">{{item}}</span>
                  </div>
              </div>
              <!-- <div class="spec3"></div> -->
            </div>
            <div class="select_num">
              <p class="title">数量</p>
              <div class="countBox">
                <span class="sub"><i class="row"></i></span>
                <div class="num"><input type="text" value="1"></div>
                <span class="plus"><i class="row"></i><i class="col"></i></span>
              </div>
            </div>
          </div>
          <div class="btns" @click="confirmAddToShopCar">
            <div class="btns_confirm"><span>确认</span></div>
          </div>
        </div>
      </div>
    </transition>
    <!-- 规格弹窗 END -->
  

  </div>
</template>
<script>
import topBar from '../../topBar'
import goods from './goods'
import comment from './comment'
import tuwen from './/tuwen'
import recommend from './recommend'
import {mapActions} from 'vuex'
  export default{
    data(){
      return{
        goodsPrice:'',
        id: '',
        counts:'',
        active:false,
        isSpecDia: false,
        spec: true,
        spec_id: false,
        firstChoose:"",     //选择规格第一种
        secondChoose:"",    //选择规格第二种
        threeChoose:"",    //选择规格第二种
        oneSpecData:[],    //第一种规格分类
        oneSpecTab:-1,        //默认第一种规格分类
        twoSpecData:[],//第二种规格分类
        twoSpecTab:-1,         //默认第二种规格分类
        threeSpecTab:-1,        //默认第三种规格分类
        threeSpecData:[],//第三种规格分类
        specTitle1:'颜色',      //弹框标题1
        specTitle2:'版本',      //弹框标题2
        specTitle3:'',
        chooseList:[],
        list:[
          {
            title:'颜色',
            color:['梦幻紫','碧玉青','美好蓝','幻夜黑','泫雅白','宝石红'],
          },
          {
            title:'版本',
            version:['全网通 4G+64GB','全网通 4G+128GB']
          }
        ]
      }
    },
    components:{
      topBar,
      goods,
      comment,
      tuwen,
      recommend,
    },
    methods:{
      addToShopCar(){
        if (this.spec) {
          this.isSpecDia = true;
        } else {
        //添加到购物车
        var goodsinfo = {
          id: this.id,
          price: this.goodsPrice,
          counts: this.counts,
          active: this.active,
        }
        this.$store.commit("addToCar",goodsinfo);
        }
      },
      confirmAddToShopCar(){
        var goodsinfo = {
          id: this.id,
          price: this.goodsPrice,
          counts: this.counts,
          active: this.active,
        }
        this.$store.commit("addToCar",goodsinfo);
        this.isSpecDia = false;
      },
      goodsNews(data){
        this.goodsPrice = data.price
        console.log(this.goodsPrice)
        this.id = data.id
        console.log(this.id)
        this.counts = data.counts
        console.log(this.counts)
        this.active = data.active
        console.log(this.active)
      },
      goShopCar(){
        this.$router.push({path:'/shopcar'})
      },
      ...mapActions(["addToCar"]),
      closeSpecDia(){
        this.isSpecDia = false;
      },
      toggleOne(index,val){
        // var newList = [...this.chooseList]
           var newList = this.chooseList
        if (this.oneSpecTab == index) {
          this.oneSpecTab = null;
          this.firstChoose = "";
          // this.oneChoose = "";
          newList[0] ="",
          this.spec_id = false;
        } else {
          this.oneSpecTab = index;
          this.spec_id = true;
          // this.oneSpecData = this.list[0].color
          // console.log(oneSpecData)
          this.firstChoose = this.oneSpecData[index];
          newList[0] = val
        }
        this.chooseList = newList
        this.choosePro(this);//查看数据
      },
      toggleTwo(index,val){
        var newList = [...this.chooseList]
        if (this.twoSpecTab == index) {
          this.twoSpecTab = null;
          this.secondChoose = "";
          // this.oneChoose = "";
           newList[1] ="",
          this.spec_id = false;
        } else {
          this.twoSpecTab = index;
          this.spec_id = true;
          this.secondChoose = this.twoSpecData[index];
          newList[1] = val
        }
        this.chooseList = newList
        this.choosePro(this);//查看数据
      },
      toggleThree(index,val){
        if (this.threeSpecTab == index) {
          var newList = [...this.chooseList]
          this.threeSpecTab = null;
          this.threeChoose = "";
          // this.oneChoose = "";
          newList[2] ="",
          this.spec_id = false;
        } else {
          this.oneSpecTab = index;
          // this.spec_id = true;
          this.threeChoose = this.threeSpecData[index];
          newList[2] = val
          this.chooseList = newList
          this.choosePro(this);//查看数据
        }
      },
      choosePro(that){
        console.log(that.chooseList)
      }
    },
    mounted(){
        this.oneSpecData = this.list[0].color
        console.log(this.oneSpecData)
        this.twoSpecData = this.list[1].version
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
        min-width: 12px;
        line-height: 12px;
        background-color: #ff3742;
        border-radius: 8px;
        color: #fff;
        font-size: 10px;
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
  /**规格弹窗样式  S */
  .specDiaMask{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1002;
  }
  .specDialog{
    width: 100%;
    min-height: 375px;
    max-height: 475px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    z-index: 1004;
    border-radius: 12px 12px 0 0;
    .specBox{
      padding: 12px;
      .header{
        position: relative;
        height: 70px;
        width: 100%;
        .imgBox{
          position: absolute;
          top: -30px;
          height: 90px;
          width: 90px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .contentBox{
          padding-left: 110px;
          .top{
            color: #ff3742;
            font-size: 10px;
            span{
              font-size: 16px;
            }
          }
          .bottom{
            margin-top: 5px;
            .content{
              color: #ccc;
              padding-right: 5px;
            }
            .details{
              span{
                margin-left: 10px;
              }
            }
          }
        }
        .delectBox{
          position: absolute;
          right: -10px;
          top: -10px;
          width: 30px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          .icon-shanchu1{
            color: #666;
            font-size: 16px;
          }
        }

      }
      .body{
        .specSelect{
          .spec{
            .title{
              height: 40px;
              color: #666;
              line-height: 40px;
            }
            .select{
              overflow: hidden;
              span{
                background-color: #f7f7f7;
                padding: 0 10px;
                color: #333;
                display: inline-block;
                min-width: 20px;
                max-width: 270px;
                height: 30px;
                overflow: hidden;
                line-height: 30px;
                float: left;
                text-align: center;
                margin-left: 10px;
                border-radius: 4px;
                font-size: 14px;
              }
              .selected{
                color: #fff;
                background-color: #ff3742;
              }
            }
          }
        }
        .select_num{
          overflow: hidden;
          margin-top: 10px;
          .title{
            color: #666;
            float: left;
            height: 30px;
            line-height: 30px;
          }
          .countBox{
            width:110px;
            position: relative;
            float: right;
            vertical-align: middle;
            background-color: #f5f5f5;
            display: flex;
            .sub{
              // float: right;
              position: relative;
              display: block;
              max-width: 30px;
              min-width: 30px;
              height: 30px;
              line-height: 30px;
              background: #f7f7f7;
              text-align: center;
              .row{
                position: absolute;
                display: inline-block;
                height: 2px;
                width: 14px;
                background-color: #999;
                border-radius: 20px;
                left: 50%;
                top: 50%;
                margin-left: -7px;
                margin-top: -1px;
              }
            }
            .num{
              // float: right;
              width: 45px;
              // position: relative;
              flex: 1;
              input{
                display: block;
                outline: none;
                border: none;
                width: 100%;
                height: 30px;
                text-align: center;
                background-color: #f5f5f5;
                color: #333;
                font-size: 12px;
              }
            }
            .plus{
              // float: right;
              position: relative;
              display: block;
              max-width: 30px;
              min-width: 30px;
              height: 30px;
              line-height: 30px;
              background: #f7f7f7;
              text-align: center;
              .row{
                 position: absolute;
                display: inline-block;
                height: 2px;
                width: 14px;
                background-color: #999;
                border-radius: 20px;
                left: 50%;
                top: 50%;
                margin-left: -7px;
                margin-top: -1px;
              }
              .col{
                position: absolute;
                width: 2px;
                height: 14px;
                background-color: #999;
                top: 50%;
                left: 50%;
                margin-left: -1px;
                margin-top: -7px;
              }
            }
          }
        }
      }
      .btns{
        position: fixed;
        bottom: 0;
        left: 0;
        .btns_confirm{
          background: #ff3742;
          height: 50px;
          width: 375px;
          text-align: center;
          line-height: 50px;
          span{
            color: #fff;
            font-size: 16px;
          }
        }
      }
    }
  }
  /**规格弹窗样式  E */
  /**弹窗动画 S*/
  .popUps-enter-active{
    transition: .3s all linear;
  }
  .popUps-enter{
    transform: translate3d(0,110%,0);
  }
  .popUps-leave{
    transform: translate3d(0,0,0);
  }
  /**弹窗动画 E*/
}
</style>
