<template>
  <div class="APP">
      <router-view></router-view>
      <alert v-model="showAlert" title="温馨提示">{{alertMsg}}</alert>
  </div>
</template>

<script>
import './style/flexible.css'
// import foot from "./components/foot.vue"
// import downTip from "./demo.vue"
import { Alert } from 'vux'
// import { Toast } from 'vux'
export default {
  data(){
    return {
      alertMsg: '1111',
      showAlert: false
    }
  },
  components: {
     Alert,
    //  Toast,
    //  downTip,
     
     
  },
  methods: {
    show(){
      this.showAlert = !this.showAlert
    }
  }
}
</script>

<style>
.tolo {
  margin-top: 100px;
}
  /* @import "./style/swiper.css";
  @import "./style/plick.less"; */
</style>
