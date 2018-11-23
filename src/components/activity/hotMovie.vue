<template>
  <div class="wallpaper">
    <div class="toplunbotu">
        <swiper auto  height="188px" dots-position=center loop>
            <swiper-item><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1753023329,3486898382&fm=26&gp=0.jpg" alt=""></swiper-item>
            <swiper-item><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3719542947,827216358&fm=26&gp=0.jpg" alt=""></swiper-item>
            <swiper-item><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3388422173,525607631&fm=26&gp=0.jpg" alt=""></swiper-item>
            <swiper-item><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3132545603,892382659&fm=26&gp=0.jpg" alt=""></swiper-item>
        </swiper>
    </div>
    <div class="top_title">热映电影</div>
    <div class="hotMovie_contain">
      <div class="hotMovie_box">

        <ul>
          <li v-for="(item,index) in movieList" :key="item.id" @click="goDetail(item.id)">
            <div class="imgBox"><img v-lazy="item.images.large" alt=""></div>
            <span class="title">影名：{{item.title}}</span>
            <span class="year">上映时间：{{item.year}}</span>
            <span>主演：<i v-for="items in item.casts">{{items.name}} </i></span>
            <span class="genres">类型：<a v-for="genres in item.genres">{{genres}} </a></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {Swiper, SwiperItem} from 'vux'
  import axios from 'axios'
  export default {
    data(){
      return{
        movieList:[],
      }
    },
    components:{
      Swiper,
      SwiperItem,
    },
    methods:{
      getMovie(){
        axios.get('/movie/in_theaters')
          .then(res => {
            this.movieList = res.data.subjects
            console.log(res.data)
          })
          .catch(error => {
            console.log(error)
          })
      },
      goDetail(id){
        this.$router.push({path:"/movieDetail",query:{id:id}})
      }
    },
    created(){
      this.getMovie();
    }
  }
</script>
<style lang="less" scoped>
.wallpaper{
        background-color: #f3f3f3;
}
.toplunbotu{
  img{
    height: 100%;
    width: 100%;
  }
}
.top_title{
  text-align: center;
  height: 30px;
  margin-top:5px;
  padding-top: 5px;
  font-size: 20px;
  font-weight: 700;
  border-bottom: 2px solid #fff;
}
.hotMovie_contain{
  .hotMovie_box{
    border-radius: 10px;
    border: 2px solid #ccc;
    margin: 10px;
    overflow: hidden;
    ul{
      display: flex;
      flex-wrap: wrap;
      padding-left:2px;
      background-color: #f3f3f3;
      li{
        background-color: #fff;
        height: 220px;
        width: 44%;
        margin: 5px;
        padding: 5px;
        border-radius: 10px;
        .imgBox{
          height: 100px;
          width: 100%;
          background-color: #ccc;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 5px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        span{
          display: block;
          margin: 5px;
          color: #666;
        }
        // .title{
        //   display: block;
        // }
        // .year{
        //   display: block;
        // }
        // .gerres{
        //   display: block;
        // }
      }
    }
  }
}
</style>
