<template>
  <div>
    <vue-pickers
      :show="showArea"
      :link="link"
      :columns="columns"
      :selectData="pickData"
      @cancel="close"
      @confirm="confirmFn"></vue-pickers>
  </div>
</template>

<script>
import vuePickers from 'vue-pickers'
import {provs_data, citys_data, dists_data} from 'vue-pickers/lib/areaData'
export default {
  components: {
    vuePickers
  },
  data() {
    return {
      isCopy: '',
      res: null,
      // show: false,
      columns: 3,
      link: true,
      pickData: {
        data1: provs_data,
        data2: citys_data,
        data3: dists_data
      }
    }
  },
  props:{
    showArea:{
      default:false,
    }
  },
  methods: {
    close() {
      this.$emit("closeArea","")
    },
    confirmFn(val) {
      // this.show = false
      // console.log(val)
      // this.res = val
      // this.pickData.default = [val.select1, val.select2, val.select3]
      this.$emit("chooseArea",val)
    },
    toShow() {
      this.show = true
    }
  }
}
</script>

<style>
.btnbox{
  display: flex;
  justify-content: center;
}
.btn{
  background: #2e68fa;
  color: #fff;
  padding: 5px 10px;
  display: inline-block;
  margin: 0 10px;
  font-size: 14px;
  border-radius: 4px;
}
.result{
  text-align: center;
  padding: 10px;
}
.isCopy{
  margin: 10px;
  border: 1px dashed red;
  text-align: center
}
</style>

