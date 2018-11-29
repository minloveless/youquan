<template>
  <div class="bannerOne">
    <topBar></topBar>
    <goods></goods>
    <comment></comment>
    <tuwen></tuwen>
    <recommend></recommend>
  </div>
</template>
<script>
import topBar from '../../topBar'
import goods from './goods'
import comment from './comment'
import tuwen from './/tuwen'
import recommend from './recommend'
  export default{
    components:{
      topBar,
      goods,
      comment,
     tuwen,
      recommend
    },
    methods:{
      // goAnchor(selector, index) {
      //   this.activeBtn = index;
      //   this.$el.querySelector(selector).scrollIntoView()
      // }
    }
  }
</script>
<style lang="less" scoped>
.bannerOne{
  padding-top: 45px;
}
</style>
