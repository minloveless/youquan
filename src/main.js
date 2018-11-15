// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

import { AlertPlugin,ToastPlugin} from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
/* eslint-disable no-new */



//去登陆
router.beforeEach((to, from, next) => {
  if(to.meta&&to.meta.title){
    document.title = to.meta.title
  }
  if((to.path === '/cartList'||to.path === '/mine')&&commons.GetString(commons.GetSessUserTo()) == ""){
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



const app = new Vue({
  router,
  render: h=>h( App )
}).$mount('#app');
