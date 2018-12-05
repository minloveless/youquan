<template>
  <div class="banner">
    <search></search>
    <div class="content">
      <div class="composite">
        <div class="downSelect">综合</div>
        <div class="saleVolume">销量</div>
        <div class="havegoods">有货优先</div>
        <div class="filter">筛选</div>
      </div>
      <div class="words">
        <!-- <div class="brand">品牌</div>
        <div class="system">系统</div>
        <div class="cpu">CPU</div>
        <div class="resolution">分辨率</div> -->
        <ul>
          <li>品牌</li>
          <li>系统</li>
          <li>CPU</li>
          <li>分辨率</li>
        </ul>
      </div>
      <div class="seachList">
        <div class="searchListBox" v-for="(item,index) in searchList" :key="index" @click="toProductDetail(item.id)">
          <div class="lf">
            <img src="https://img14.360buyimg.com/mobilecms/s316x316_jfs/t17665/190/2499640910/209789/1b439bbd/5afc0ae1N4f34d0fc.jpg!q70.dpg.webp" alt="">
          </div>
          <div class="rf">
            <div class="title">{{item.title}}</div>
            <div class="fautures">
              <span v-for="(items,index) in item.fautures" :key="index">{{items}}</span>
            </div>
            <div class="price">￥{{1188.00}}</div>
            <div class="comment"><i></i> {{item.comment}}万条评价 好评率100%</div>
            <div class="more">查看同款二手<i class="iconfont icon-jiantou-right"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import search from '../search.vue'
  import axios from 'axios'
  export default {
    data(){
      return {
        id: this.$route.query.id,
        searchList:[],
      }
    },
    components:{
      search,
    },
    methods:{
      toProductDetail(arr){
        this.$router.push({path:'/productDetail',query:{arr:arr}})
      },
      getDetailsList(){
        axios.get('/details/goodsList')
        .then(res => {
          this.searchList = res.data.searchList
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    mounted(){
      this.getDetailsList()
    }
  }
</script>
<style lang="less" scoped>
.banner{
  padding-top: 40px;
  .content{
    .composite{
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      font-size: 14px;
      color: #333;
      border-bottom: 1px solid #e5e5e5;
    }
    .words{
      ul{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        height: 45px;
        box-sizing: border-box;
        border-bottom: 1px solid #e5e5e5;
        li{
          background-color: #f2f2f7;
          height: 25px;
          width: 80px;
          text-align: center;
          line-height: 25px;
          border-radius: 5px;
        }
      }
    }
    .seachList{
      .searchListBox{
        height: 129px;
        padding: 2px 0;
        .lf{
          float: left;
          img{
            width: 120px;
            height: 120px;
          }
        }
        .rf{
          padding: 0 10px 0px 10px;
          border-bottom: 1px solid #f2f2f7;
          width: 235px;
          height: 124px;
          float: right;
          position: relative;
          .title{
            color: #333;
            font-size: 14px;
            // box-sizing: border-box;
            /*! autoprefixer: off */
              -webkit-box-orient: vertical;
            /* autoprefixer: on */
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            margin-top: 5px;
          }
          .fautures{
            padding-top: 3px;
            width: 235px;
            overflow: hidden;
            span{
              color: #ccc;
              margin-right: 10px;
              background-color: #f5f5f2;
            }
          }
          .price{
            padding-top: 15px;
            font-size: 16px;
            color: #ff3742
          }
          .comment{
            color:#ccc;
            padding-top: 0px;
          }
          .more{
            position: absolute;
            right: 15px;
            bottom: 10px;
            color: #666;
            .icon-jiantou-right{
              font-size: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
