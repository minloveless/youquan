// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import { AlertPlugin,ToastPlugin} from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
/* eslint-disable no-new */
const app = new Vue({
  router,
  render: h=>h( App )
}).$mount('#app');
