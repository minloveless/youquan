<template>
  <div>
    <button @click="toshow">1111111111111111</button>
    <vue-pickers
      :show = "showArea"
      :link = "link"
      :columns = "columns"
      :defaultData = "defaultArea"
      :selectData = "selectData"
      @cancle = "close"
      @confirm = "confirmFn"></vue-pickers>
  </div>
</template>
<script>
  import vuePickers from 'vue-pickers'
  export default {
    data(){
      return {
        showArea:true,
        columns: 3,
        link: true,
        selectData: {
          pData1:[
            {
               text: 1999,
               value: 1999
            },
             {
               text: 2001,
               value: 2001
             },
             {
               text: 2002,
               value: 2002
             },
             {
               text: 2003,
               value: 2003
             },
             {
               text: 2004,
               value: 2004
             },
             {
               text: 2005,
               value: 2005
             },
          ],
          pData2:[
            {
               text: 1999,
               value: 1999
            },
             {
               text: 2001,
               value: 2001
             },
             {
               text: 2002,
               value: 2002
             },
             {
               text: 2003,
               value: 2003
             },
             {
               text: 2004,
               value: 2004
             },
             {
               text: 2005,
               value: 2005
             },
          ],
          pData3:[
            {
               text: 1999,
               value: 1999
            },
             {
               text: 2001,
               value: 2001
             },
             {
               text: 2002,
               value: 2002
             },
             {
               text: 2003,
               value: 2003
             },
             {
               text: 2004,
               value: 2004
             },
             {
               text: 2005,
               value: 2005
             },
          ],
        },
        res: "",
        defaultArea: [
          {
            text:'省',
            value:'江西省'
          },
          {
            text:'市',
            value:'南昌市'
          },{
            text:'区',
            value:'南昌县'
          },
        ],
      }
    },
    // props: {
    //   showArea: {
    //     default:true
    //   },
    //   areaList:{},
    //   defaultArea:{},
    // },
    components: {
      vuePickers,
    },
    methods:{
      toshow(){
        this.showArea= !this.showArea
      },
      close(){
        this.$emit("closeArea","")
      },
      confirmFn(){
        this.$emit("chooseArea",val)
      }
    }
  }
</script>
<style lang="less" scoped>
.btnbox{
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}
.btn{
  color: #fff;
  padding: 5px 10px;
  display: inline-block;
  margin: 0 10px;
  font-size: 0.37rem;
  border-radius: 4px;
}
#h-picker .area_ctrl{
    background: #FFFFFF;
}
#h-picker .area_btn.larea_cancel{
  color: #333333 !important;
  font-size: .4rem
}
#h-picker .area_btn.larea_finish{
  color: #FF3742 !important;
  font-size: .4rem;
}
#h-picker .area_roll{
    background: #FFFFFF; 
}
#h-picker .area_btn_box{
    background: #FFFFFF; 
}
#h-picker .area_roll_mask{
    background: #FFFFFF; 
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
.area_btn_box{
    display: flex;
    display: -webkit-flex;
}
.area_roll{
    display: flex;
    display: -webkit-flex;
}
#h-picker .area_roll>div{
    flex:1;
    -webkit-flex: 1;
    background: #FFFFFF;
}
.tooth{
     display: flex;
    display: -webkit-flex;
}
</style>
