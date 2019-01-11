import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path    : '/', meta: {title:'有券'}, component: function (resolve) {require(['../components/Foot/home.vue'], resolve)},
      children: [
        {
          path: '/', meta: {title:'首页'}, component: function (resolve) {require(['../indexHome.vue'], resolve)}
        },
        {
          path: '/indexhome', meta: {title:'首页'}, component: function (resolve) {require(['../indexHome.vue'], resolve)}
        },
        {
          path: '/classify', meta: {title:'分类列表'}, component: function (resolve) {require(['../components/Foot/classify.vue'], resolve)},
        },
        {
          path: '/activity', meta: {title:'有券活动'}, component: function (resolve) {require(['../components/Foot/activity.vue'], resolve)},
        },
        {
          path: '/mine', meta: {title:'我的有券'}, component: function (resolve) {require(['../components/Foot/mine.vue'], resolve)},
        },
      ]
    },
    {
      path: '/shopcar', meta: {title:'购物车'}, component: function (resolve) {require(['../components/Foot/shopcar.vue'], resolve)},
    },
    {
      path: '/search', meta: {title:'搜索'}, component: function (resolve) {require(['../components/search.vue'], resolve)},
    },
    {
      path: '/hotMovie', meta: {title:'热门电影'}, component: function (resolve) {require(['../components/activity/hotMovie.vue'], resolve)},
    },
    {
      path: '/movieDetail', meta: {title:'电影详情'}, component: function (resolve) {require(['../components/activity/movieDetail.vue'], resolve)},
    },
    {
      path: '/productDetail', meta: {title:'商品详情'}, component: function (resolve) {require(['../components/product/productDetail/productDetail.vue'], resolve)},
    },
    {
      path: '/producSeachtList', meta: {title:'商品列表'}, component: function (resolve) {require(['../components/product/producSeachtList.vue'], resolve)},
    },
    {
      path: '/orderList', meta: {title:'订单列表'}, component: function (resolve) {require(['../components/mine/order/orderList.vue'], resolve)},
    },
    {
      path: '/aftersale', meta: {title:'售后列表'}, component: function (resolve) {require(['../components/mine/order/afterSale.vue'], resolve)},
    },
    {
      path: '/limitTime', meta: {title:'限时秒杀'}, component: function (resolve) {require(['../components/activity/limitTime.vue'], resolve)},
    },
    {
      path: '/date', meta: {title:'限时秒杀'}, component: function (resolve) {require(['../components/date.vue'], resolve)},
    },
  ]
})
