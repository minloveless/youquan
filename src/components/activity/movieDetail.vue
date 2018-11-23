<template>
  <div class="wallpaper">
    <!-- <div class="toplunbotu">
        <swiper auto  height="188px" dots-position=center loop>
            <swiper-item><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1753023329,3486898382&fm=26&gp=0.jpg" alt=""></swiper-item>
            <swiper-item><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3719542947,827216358&fm=26&gp=0.jpg" alt=""></swiper-item>
            <swiper-item><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3388422173,525607631&fm=26&gp=0.jpg" alt=""></swiper-item>
            <swiper-item><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3132545603,892382659&fm=26&gp=0.jpg" alt=""></swiper-item>
        </swiper>
    </div> -->
     <div class="card">
      <div class="poster">
        <img v-lazy="imgs.large" alt="">
      </div>
      <div class="contain">
        <h1>{{details.title}}</h1>
        <div class="hezi">
          <!-- <p>主演：</p> -->
          <div v-for="items in details.casts"  class="avatarBox">
            <div class="avatar"><img v-lazy="items.avatars.small" alt=""></div>
            <span>{{items.name}}</span>
          </div>
        </div>
          <P>剧情简介：</P>
          <p>{{details.summary}}</p>
      </div>

    </div>
    <div class="foot">
      <div class="button_l">想看：{{details.wish_count}}</div>
      <div class="button_r">看过：{{details.collect_count}}</div>
    </div>


  </div>
</template>
<script>
  // import {Swiper, SwiperItem} from 'vux'
  import axios from 'axios'
  export default {
    components:{
      // Swiper,
      // SwiperItem,
    },
    data(){
      return{
        details:'',
        imgs:'',
        // large:
      }
    },
    methods:{
      // getDetail(id){
      //   axios.get('/movie/in_theaters',{params:{
      //     id:id
      //   }})
      //     .then(res => {
      //       this.movieList = res.data.subjects
      //       console.log(res.data)
      //     })
      //     .catch(error => {
      //       console.log(error)
      //     })
      // }
    },
    mounted(){
      let id = this.$route.query.id
      let that = this
      axios.get('/movie/subject/'+id)
          .then(res => {
            that.details = res.data
            that.imgs = res.data.images
            console.log(that.details)
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
</script>
<style lang="less" scoped>
.wallpaper{
  height: 100%;
  // background-color: #f3f3f3;
  // margin: 0 auto;
  margin: 10px;
  
}
.card{
  height: 600px;
  width: 350px;
  border: 2px solid #666;
  overflow: hidden;
  border-radius:10px;
  margin: 0 auto;
}
.poster{
  text-align: center;
  padding-top: 10px;
  // img{
  //   height: 100%;
  //   width: 100%;
  // }
}
.contain{
  margin-left: 30px;
  h1{
    font-size: 20px;
    text-align: center;
    margin-top: 5px;
  }
  p{
    font-size: 16px;
  }
   .hezi{
    height: 75px;
  }
  .avatarBox{
    height: 60px;
  float: left;
  margin: 5px 12px;
 
  .avatar{
  height: 50px;
  width: 50px;
  overflow:hidden;
  border-radius: 50%;
  background-color: #ccc;
  img{
    height: 100%;
    width: 100%;
  }
}
  span{
    display: block;
    width: 50px;
    font-size: 12px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color: #666;
  }
}
p{
  color: #666;
  font-size: 12px;
  padding: 0 5px;
  /*! autoprefixer: off */
      -webkit-box-orient: vertical;
    /* autoprefixer: on */
    -webkit-line-clamp: 5;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
}

}
.foot{
  display: flex;
  height: 60px;
  div{
    border: 1px solid #ff4732;
    background-color: #fff;
    border-radius: 10px;
    height: 40px;
    flex: 1;
    margin: 5px 20px;
    color: #ff4732;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
  }
}

</style>
