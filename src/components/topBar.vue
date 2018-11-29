<template>
  <div>
    <div class="m_header">
      <div class="header_content">
        <!-- S 引流组件 -->
        <div class="contnet">
          <div class="m_common_tip"></div>
        </div>
        <!-- E 引流组件 -->
        <!-- S 通用头 -->
        <div class="m_common_header">
          <header class="yj-header">
            <div class="yj-header-new-bar">
              <div class="yj-header-icon-back" @click="back"><i class="iconfont icon-left"></i></div>
              <div class="yj-header-new-title">
                <span id="summary_title" style="display: none;">商品评价</span>
                <span id="related_title" style="display: none;">优惠套餐</span>
                <span id="yanbao_title" style="display: none;">增值服务</span>
                <span id="gift_title" style="display: none;">赠品</span>
                <span id="landing_title" style="display: none;">送装服务</span>
                <div class="detail_anchor_wrap">
                  <nav class="detail_anchor">
                    <span v-for="(item,index) in list" :class="{current:current==index}" :key="item.id" @click="chooseType(index)">{{item.type}}</span>
                    <!-- <span>评价</span>
                    <span>详情</span>
                    <span>推荐</span> -->
                  </nav>
                </div>
              </div>
              <div class="yj-header-icon-shortcut"><i class="iconfont icon-gengduo"></i></div>
            </div>
          </header>
        </div>
        <!-- E 通用头 -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        current:0,
        list:[
          {
            id:0,
            type:'商品'
          },
                    {
            id:1,
            type:'评论'
          },
                    {
            id:2,
            type:'详情'
          },
                    {
            id:3,
            type:'推荐'
          },
        ]
      }
    },
    methods:{
      chooseType(index){
        if(index!=this.current){
          this.current = index
        }

      },
      back(){
        this.$router.go('-1');
      }
    }
  }
</script>

<style lang="less" scoped>
.m_header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 45px;
  width: 375px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  line-height: 45px;
  .header_content{
  // position: fixed;
  // top: 0;
  // left: 0;
  // z-index: 1000;
    .m_common_header{
      .yj-header{
        .yj-header-new-bar{
          .yj-header-icon-back{
            float: left;
            margin-left: 10px;
            .icon-left{
              font-size: 20px;
              color: #252525;
            }
          }
          .yj-header-new-title{
            // float: left;
            height: 44px;
            width: 235px;
            margin: 0 70px;
            // margin-left: 70px;
            text-align: center;
            .detail_anchor_wrap{
              // margin: 0 70px;
              nav{
                display: flex;
                  span{
                  flex: 1;
                  width: 44px;
                  display: inline-block;
                  text-align: center;
                  font-size: 14px;
                }
                .current{
                  color: #ff3742;
                  background: url('../assets/images/yj/下载.png') no-repeat 0 17px;
                  background-size:13%;
                }
              }
            }
          }
          .yj-header-icon-shortcut{
            position: absolute;
            right: 8px;
            top: 0;
            .icon-gengduo{
              font-size: 25px;
              color: #252525;
            }
          }
        }
      }
    }
  }
}
</style>
