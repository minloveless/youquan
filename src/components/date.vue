<template>
  <div>
    <div class="button1" @click="change">选择日期</div>
    <div class="mytime">{{mytime}}</div>
    <div class="dataBox" v-if="show">
          <div class="mask"></div>
          <div class="bullet">
            <div class="head">
              <span>选择时间段</span>
            </div>
            <div class="body">
              <div class="startTime">
                <input type="text" v-model="startTime">
                <div class="timeOne" @click="showDate">
                  <img src="../assets/images/time.png" alt="">
                </div>
              </div>
              <span>至</span>
              <div class="endTime">
                <input type="text" v-model="endTime">
                <div class="timeTwo" @click="showDate">
                  <img src="../assets/images/time.png" alt="">
                </div>
              </div> 
            </div>
            <div class="empty" v-show="empty">{{tip}}</div>
            <div class="button">
              <div class="cancel" @click="onCancel"><span>取消</span></div>
              <div class="confirm" @click="onConfirm"><span>确定</span></div>
            </div>
          </div>
    </div>
    <div class="selectDate" v-show="selectDate">
      <div class="dateHead">
        <span>取消</span>
        <span class="spc">选择时间</span>
        <span>确定</span>
      </div>
      <div class="dateBody">
        <div class="deleted"></div>
        
        <div class="year">
          <div class="mask"></div>
          <scroller lock-x height="-485px" class="dong">
            <ul>
              <li v-for="item in 10">{{item}}</li>
            </ul>
          </scroller>  
        </div>
        <div class="month"> 
          <div class="mask"></div>         
          <scroller lock-x height="-485px" class="dong">
            <ul>
              <li v-for="item in 10">{{item}}</li>             
            </ul>
          </scroller></div>
        <div class="day">   
          <div class="mask"></div>       
          <scroller lock-x height="-485px" class="dong">
            <ul>
              <li v-for="item in 10">{{item}}</li>
            </ul>
          </scroller></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Confirm } from 'vux'
import { Datetime, Group, DatetimeView, Scroller} from 'vux'
export default { 
  data(){
    return{
      delect: '选择时间段',
      show: false,
      news: '选择日期',
      empty: false,
      startTime: "",
      endTime: "",
      tip:"",
      selectDate: false,
      connect: '',
    }
  },
  methods: {
    change(){
      this.show = !this.show;
    },
    onCancel(){
      this.show = false;
    },
    onConfirm(){
      if(this.startTime == "" || this.endTime == "") {
        this.tip = "请选择时间";
        this.empty = true;
        
      } else {
        if (this.startTime > this.endTime) {
          this.tip = "开始时间需小于结束时间"
          this.empty = true;     
        }else{
          this.empty = false;
          this.show = false;
          this.connect = '至';
        }
        
      }
      
    },
    showDate(){
      this.selectDate = !this.selectDate;
    }

  },
  computed: {
    mytime : function(){
       return this.startTime + this.connect + this.endTime
    }
  },
  // watch: {
  //   mytime()
  // },
  components: {
    Confirm,
    Datetime,
    Group,
    DatetimeView,
    Scroller,
  }
}
</script>
<style lang="less" scoped>
.button1{
  height: 30px;
  width: 100px;
  background-color: lightgreen;
  text-align: center;
  line-height: 30px;
  margin:0 auto;
  z-index: 1000000;
}
.mytime{
  margin: 0 auto;
  height: 30px;
  width: 100%;
  color: #3D71FF;
  margin-top: 10px;
  text-align: center;
}
.dataBox{
  .mask{
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .bullet{
    position: fixed;
    display: table;
    z-index: 5000;
    height: 152px;
    width: 270px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: #fff;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;
    .head{
      margin-top: 20px;
      color: #333;
      font-size: 15px;
    }
    .body{
      margin-top: 15px;
      display: flex;
      display: -webkit-flex;
      justify-content: center;
      align-items: center;
      .startTime{
        width: 100px;
        height: 30px;
        position: relative;
        .timeOne{
          position: absolute;
          right: 6px;
          top: 8px;
          width: 18px;
          height: 16px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      span{
          margin: 0 8px;
          color: #999;
      }
      .endTime{
        width: 100px;
        height: 30px;
        position: relative;
        .timeTwo{
          position: absolute;
          right: 6px;
          top: 8px;
          width: 18px;
          height: 16px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      input{
        width: 100px;
        height: 30px;
        line-height: 30px;
        // padding-top: 2px;
        border: 1px solid #CCCCCC;
        border-radius: 4px;
        padding-right: 26px;
        box-sizing: border-box;
        text-align: center;
        z-index: 10011;
        outline: none;
        background-color: #fff;
      }
    }
    .empty{
        margin-top: 3px;
        color: #FF6363;
        font-size: 11px;
    } 
    .button{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      display: -webkit-flex;
      border-top: 1px solid #E5E5E5;
      height: 44px;
      width: 270px;
      line-height: 44px;
      .cancel{
        flex: 1;
        border-right: 1px solid #E5E5E5;
        span{
          color: #999;
          font-size: 16px;
        }
      }
      .confirm{
        flex: 1;
        span{
          color: #3D71FF;
          font-size: 16px;
        }
      }
    }
  }
}
.selectDate{
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 10000;
    background-color: #fff;
    height: 375px;
    height: 226px;
    .dateHead{
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      padding: 0 12px;
      height: 44px;
      align-items: center;
      background-color: #f5f5f5;
      color: #3D71FF;
      font-size: 14px;
      .spc{
        color: #333;
      }
    }
    .dateBody{
      display: flex;
      display: -webkit-flex;
      height: 182px;
      width: 375px;
      position: relative;
      .deleted{
        width: 100%;
        height: 42px;
        position: absolute;
        left: 0;
        top: 28px;
        z-index: 5;
        background-image:
          linear-gradient(to bottom, #d0d0d0, #d0d0d0, transparent, transparent),
          linear-gradient(to top, #d0d0d0, #d0d0d0, transparent, transparent);
        background-position: top, bottom;
        background-size: 100% 2px;
        background-repeat: no-repeat;
      }
      .year,
      .month,
      .day{
        flex: 1;
        height: 100%;
        width: 100%;
        position: relative;
        z-index: 5;
        ul{
          li{
            height: 40px;
            width: 100%;
            text-align: center;
            line-height: 40px;
            font-size: 17px;
            color: #333;
          }
        }
        .dong{
          z-index: 10;
        }
        .mask{
          position: absolute;
          left: 0;
          top: 0px;
          height: 100%;
          width: 100%;
          margin: 0 auto;
          width: 100%;
          z-index: 3;
          background-image:
            linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.6)),
            linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0.6));
          background-position: top, bottom;
          background-size: 100% 10px;
          background-repeat: no-repeat;
        }
      }
      // .month{
      //   flex: 1;
      // }
      // .day{
      //   flex: 1;
      // }
    }
}
</style>
