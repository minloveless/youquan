<template>
  <div>
    <div class="banner"> 
      <x-header :left-options="{backText:''}"
                :right-options="{showMore:true}">限时秒杀</x-header>
      <div class="nav">
        <ul>
          <li v-for="(item,index) in time" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="timeBox">京东秒杀<span>距离开始还有：{{countDown}}</span></div>
    </div>  
  </div>
</template>
<script>
  import {XHeader} from 'vux'
import { setTimeout } from 'timers';
  export default {
    data () {
      return {
        time:['00:00','03:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00',],
        countDown:'0:00:00:00',
        nowTime:0,
        overTime:0,
      }
    },
    components: {
      XHeader,
    },
    methods: {
      getnowtime(){
        var date = new Date();
        this.nowTime = date.getTime()
        this.overTime = Date.parse("2018-12-15 00:00:00")
        // var endtime = new Date("2018-12-15")
        // var end = endtime.getTime()
        console.log(this.nowTime);
        console.log(this.overTime);
        // console.log(end)
        var countTime = this.overTime - this.nowTime
        if(countTime>0){
          var day = Math.floor(countTime/1000/24/60/60);
          var hours = Math.floor(countTime/1000/60/60%24);
          var minutes = Math.floor(countTime/1000/60%60)
          var seconds = Math.floor(countTime/1000%60);
          console.log(day,hours,minutes,seconds)
        }
        this.countDown =  day + "天" + hours + "时" + minutes + "分" + seconds + "秒" 
        return this.countDown
        setTimeout(() => {
          this.getnowtime()
        },1000)
      }
    },
    mounted(){
      this.getnowtime()
    },
    watch:{
      countDown(newValue){
        this.countDown = newValue;
      }
    }
  }
</script>
<style lang="less" scoped>
.banner{
  .nav{
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    z-index: 101;
    max-width: 540px;
    margin: 0 auto;
    font-size: 0;
    ul{
      background: #333;
      white-space: nowrap;
      font-size: 0;
      font-family: arial;
      overflow-x: scroll;
      li{
        vertical-align: top;
        display: inline-block;
        width: 20%;
        height: 30px;
        padding: 10px 0;
        overflow: hidden;
        line-height: 16px;
        text-align: center;
        color: #999;
        font-size: 14px;
        line-height: 30px;
      }
    }
  }
  .timeBox{
    height: 50px;
    width: 100%;
    background-color: #ff3742;
    color: #fff;
    padding: 0 10px;
    box-sizing: border-box;
    line-height: 50px;
    font-size: 18px;
    font-weight: bold;
    span{
      display: block;
      float: right;
      font-size: 16px;
      font-weight: normal;
    }
  }
}
</style>
