<template>
    <div class="zaidibu">
      <div class="circle">{{$store.getters.getAllCount}}</div>
      <tabbar>
        <tabbar-item selected  link="/indexhome" >
          <i slot="icon" class="iconfont icon-yemian-copy-copy"></i>
          <label slot="label">首页</label>
        </tabbar-item>
        <tabbar-item link="/classify" >
          <i slot="icon" class="iconfont icon-leimupinleifenleileibie"></i>
          <label slot="label">分类</label>
        </tabbar-item>
        <tabbar-item  link="/activity">
          <i slot="icon" class="iconfont icon-huodong"></i>
          <label slot="label">活动</label>
        </tabbar-item>
        <tabbar-item  link="/shopcar">
          <i slot="icon" class="iconfont icon-gouwuche"></i>
          <label slot="label">购物车</label>
        </tabbar-item>
        <tabbar-item  link="/mine">
          <i slot="icon" class="iconfont icon-wodedangxuan"></i>
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
        list:[
          {
            id:'1',
            url:"https://hdres.huisou.cn/static/images/footer/footer_home_selected.png",
            item:"首页"
          },
          {
            id:'2',
            url:"https://hdres.huisou.cn/static/images/footer/footer_home_selected.png",
            item:"分类"
          },
          {
            id:'3',
            url:"https://hdres.huisou.cn/static/images/footer/footer_home_selected.png",
            item:"活动"
          },
          {
            id:'4',
            url:"https://hdres.huisou.cn/static/images/footer/footer_home_selected.png",
            item:"购物车"
          },
          {
            id:'5',
            url:"https://hdres.huisou.cn/static/images/footer/footer_home_selected.png",
            item:"我的"
          },
        ]
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
<style lang="less" scoped>
.zaidibu{
  // position: relative;
  .circle{
        height: 12px;
        line-height: 12px;
        // width: 13px;
        background-color: #ff3742;
        border-radius: 8px;
        color: #fff;
        padding: 1px;
        font-size: 10px;
        font-weight: 700;
        text-align: center;
        border: 1px solid #fff;
        position: absolute;
        right: 95px;
        bottom:30px;
        z-index: 1001;
  }
}
</style>

