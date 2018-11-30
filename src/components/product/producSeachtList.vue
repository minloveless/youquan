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
            <img :src="item.url" alt="">
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
  export default {
    data(){
      return {
        id: this.$route.query.id,
        searchList:[
          {
            id:1,
            url:'https://img14.360buyimg.com/mobilecms/s316x316_jfs/t17665/190/2499640910/209789/1b439bbd/5afc0ae1N4f34d0fc.jpg!q70.dpg.webp',
            title:'荣耀 畅玩7 2GB+16GB 金色 全网通4G手机 双卡双待',
            fautures:['4GB','64GB','5.84英寸'],
            price:1188.00,
            comment:'101',
          },
          {
            id:2,
            url:'https://img13.360buyimg.com/mobilecms/s316x316_jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg!q70.dpg.webp',
            title:'荣耀 畅玩7 2GB+16GB 金色 全网通4G手机 双卡双待',
            fautures:['4GB','64GB','5.84英寸'],
            price:1188.00,
            comment:'101',
          },
          {
            id:3,
            url:'https://img13.360buyimg.com/mobilecms/s316x316_jfs/t22519/185/2357218296/213888/ff5e9aa3/5b7bd314N6db24355.jpg!q70.dpg.webp',
            title:'荣耀 畅玩7 2GB+16GB 金色 全网通4G手机 双卡双待',
            fautures:['4GB','64GB','5.84英寸'],
            price:1188.00,
            comment:'101',
          },
          {
            id:4,
            url:'https://img13.360buyimg.com/mobilecms/s316x316_jfs/t4894/345/2426573341/236389/f4e04f62/59000294Ncfd9f9ee.jpg!q70.dpg.webp',
            title:'荣耀 畅玩7 2GB+16GB 金色 全网通4G手机 双卡双待',
            fautures:['4GB','64GB','5.84英寸'],
            price:1188.00,
            comment:'101',
          },
          {
            id:5,
            url:'https://img13.360buyimg.com/mobilecms/s316x316_jfs/t1/3/15/4536/138660/5b997bf8Ed72ebce7/819dcf182d743897.jpg!q70.dpg.webp',
            title:'荣耀 畅玩7 2GB+16GB 金色 全网通4G手机 双卡双待',
            fautures:['4GB','64GB','5.84英寸'],
            price:1188.00,
            comment:'101',
          },
        ],
      }
    },
    components:{
      search,
    },
    methods:{
      toProductDetail(arr){
        this.$router.push({path:'/productDetail',query:{arr:arr}})
      }
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
