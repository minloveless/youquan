<template>
    <div>
      <tabbar>
        <tabbar-item selected  link="/home" >
          <img slot="icon" src="https://hdres.huisou.cn/static/images/footer/footer_home_selected.png" alt="">
          <label slot="label">首页</label>
        </tabbar-item>
        <tabbar-item link="/classify" >
          <img slot="icon" src="https://hdres.huisou.cn/static/images/footer/footer_home_selected.png" alt="">
          <label slot="label">分类</label>
        </tabbar-item>
        <tabbar-item  link="/activity">
          <img slot="icon" src="https://hdres.huisou.cn/static/images/footer/footer_home_selected.png" alt="">
          <label slot="label">活动</label>
        </tabbar-item>
        <tabbar-item  link="/shopcar">
          <img slot="icon" src="https://hdres.huisou.cn/static/images/footer/footer_home_selected.png" alt="">
          <label slot="label">购物车</label>
        </tabbar-item>
        <tabbar-item  link="/mine">
          <img slot="icon" src="https://hdres.huisou.cn/static/images/footer/footer_home_selected.png" alt="">
          <label slot="label">我的</label>
        </tabbar-item>
      </tabbar>
    </div>
</template>
<script>
    import { Tabbar, TabbarItem } from 'vux'
    export default {
  data(){
    return {
    //   alertMsg: '1111',
    //   showAlert: false
    }
  },
  components: {
     Tabbar,
     TabbarItem,
  },
  methods: {
            // check (id) {
            //     //tab切换
            //     var self = this;
            //     //self.classNums = index;
            //     //self.$router.push({path: url})
                
            //     if(id == '1'){  //首页
            //         self.$router.push({path: "/"})
            //     }else if(id == '2'){    //我的
            //         self.$router.push({path: "/classify"})  }                  
            //     // }else if(url == 'circle_list'){  //行业圈
            //     //     self.$router.push({path: "/industryCircle/industryCircleList"})                                        
            //     // }else if(url == 'company'){  //企业
            //     //     self.$router.push({path: "/enterprise/enterpriseList"})   
            //     // }else if(url == 'news_list'){   //资讯
            //     //     self.$router.push({path: "/information/informationList"})   
            //     // }else if(url == 'product_list'){     //产品
            //     //     self.$router.push({path: "/product/productList"}) 
            //     // }else if(url == 'cart'){    //购物车
            //     //     self.$router.push({path: "/cartList"})                     
            //     // }else if(url == 'category_list'){   //分类
            //     //     self.$router.push({path: "/productClassify"}) 
            //     // }else if(url == 'store'){     //会店
            //     //     self.$router.push({path: "/shopList"})                     
            //     // }
            activty(){
                this.$router.push({path: "/activity"})
            }
        },
}
</script>
<style>

</style>
