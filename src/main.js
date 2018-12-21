// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/iconfont/iconfont.css'
// import commons from '../src/js/common'
// Vue.prototype.common=commons;
import axios from 'axios';
import vueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import store from './vuex/store'




Vue.use(vueAxios,axios)
Vue.use(VueLazyload);
//自定义使用
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',
//   attempt: 1
// })



axios.defaults.baseURL='/api';
Vue.config.productionTip = false

import { AlertPlugin,ToastPlugin, LoadingPlugin} from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin);
/* eslint-disable no-new */

//去登陆
router.beforeEach((to, from, next) => {
  if(to.meta&&to.meta.title){
    document.title = to.meta.title
  }
  if((to.path === '/cartList'||to.path === '/mine1')&&commons.GetString(commons.GetSessUserTo()) == ""){
      next('/login')
  }else{
      next()
  }
})
/* eslint-disable no-new */
//路由后滚动条居顶
router.afterEach(route => {
  window.scrollTo(0, 0);
});



// // 例子，自行對應到你項目的代碼
// const router = new VueRouter({
//   routes,
//   mode: 'history',
//   scrollBehavior (to, from, savedPosition) {
//       // 如果你的連結是帶 # 這種
//       // to.hash 就會有值(值就是連結)
//       // 例如 #3
//       if (to.hash) {
//         return {
//           // 這個是透過 to.hash 的值來找到對應的元素
//           // 照你的 html 來看是不用多加處理這樣就可以了
//           // 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
//           selector: to.hash
//         }
//       }
//     }
// })



const app = new Vue({
  router,
  store,
  render: h=>h( App )
}).$mount('#app');
console.log(app)
