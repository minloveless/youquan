import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', meta:{title:'首页'},component: function (resolve) {require(['../components/Foot/home.vue'], resolve)},
    },
    {
      path: '/classify', meta:{title:'分类'},component: function (resolve) {require(['../components/Foot/classify.vue'], resolve)},
    },
    {
      path: '/activity', meta:{title:'活动'},component: function (resolve) {require(['../components/Foot/activity.vue'], resolve)},
    },
    {
      path: '/shopcar', meta:{title:'购物车'},component: function (resolve) {require(['../components/Foot/shopcar.vue'], resolve)},
    },
    {
      path: '/mine', meta:{title:'我的'},component: function (resolve) {require(['../components/Foot/mine.vue'], resolve)},
    },
  ]
})
