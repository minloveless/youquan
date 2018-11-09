<template>
  <div class="APP">
   <!-- <foot></foot>-->
    <router-view></router-view>
    <Login v-if="noLogin"/>
    <Loading v-if="showLoad"/>
  </div>
</template>
<script>
  import '../style/flexible.css'
  import foot from "./foot.vue"
  import Login from "./components/login.vue"
  import Loading from './components/loading.vue'
  import { mapState } from 'vuex'
  export default {
    components:{
      foot,
      Login,
      Loading,
    },
    computed:{
      ...mapState({
        noLogin: state => state.noLogin,
        showLoad : state => state.showLoad,
      })
    }
  }
</script>
<style scoped>
  @import "../style/swiper.css";
  @import "../style/plick.less";
</style>
