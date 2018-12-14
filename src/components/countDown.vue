<template>
  <div class="countDown">
    <p class="showTime" v-if="aboutData.is_presell ==1 &&!aboutData.activity_info">111</p>
    <p class="showCountDown" v-if="(aboutData.activity_code == 100)&&aboutData.is_presell != 1"><b>即将开始</b><span>距开始仅剩：{{setDate(countDown)}}</span></p>
    <p class="showCountDown" v-if="(aboutData.activity_code == 200)&&aboutData.is_presell != 1"><b>限时抢购</b><span>距结束仅剩：{{setDate(countDown)}}</span></p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        overTime:10,
        nowDate:0,
        leavePage: 0,
        countDown: '0:00:00:00',
      }
    },
    props:["aboutData"],
    methods:{
      setDate(str){
        var newTime = str.split(':')
        if (newTime[0] ==0) {
          return newTime[1] + '时' + newTime[2] + '分' + newTime[3] + '秒'
        } else {
          return newTime[0] + '天' + newTime[1] + '时' + newTime[2] + '分' + newTime[3] + '秒'
        }
      },
      addZero(num){
        return num<10 ? '0' + num : num
      },
      matchTime(betwTime){ //计算时间
        var day = Math.floor(betwTime/86400)
        var hours = this.addZero(Math.floor(betwTime%86400/3600))
        var minutes = this.addZero(Math.floor(betwTime%3600/60))
        var seconds = this.addZero(betwTime%60)
        return day + ':' + hours + ':' + minutes + ':' +seconds
      },
      countDownFn(){
        if(this.nowDate < this.overTime&&this.leavePage ==0){
          this.nowDate = this.nowDate + 1
          setTimeout(() => {
            this.countDownFn()
          },1000)
        }
      },
    },
    mounted(){
      this.overTime = this.aboutData.activity_info;
      this.overTime++
      if(this.aboutData.activity_info&&this.nowDate==0){
        this.countDownFn()
      }else{
        this.nowDate = 0;
      }
    },
    computed: {

    },
    watch: {
      nowDate (newVal) {
        var betwTime = this.overTime - newVal
        if (betwTime > 0) {
          this.countDown = this.matchTime(betwTime)
        } else {
          this.$emit("overFn")
          this.countDown = "0:00:00:00"
        }
      },
      aboutData(aboutData){
            this.overTime = this.aboutData.activity_info
            this.nowDate = 0
        }
    },
    beforeDestroy(){
        this.leavePage = 1
    },
  }
</script>
<style lang="less" scoped>
.showCountDown{
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  box-sizing: border-box;
  color: #fff;
  background-color: #ff3742;
  b{
    font-weight: normal;
    font-size: 0.4533rem;
  }
  span{
    float: right;
    line-height: 1.067rem;
    font-size: 0.4rem;
  }
}
</style>
