<template>
    <div class="sideBar">
       <scroller lock-x height="-89">
         <ul>
            <li v-for="(item,index) in categoryList" :key="index" @click="choose(index)" :class="{current:current==index}">
                {{item.name}}
            </li>
         </ul>
       </scroller>

    </div>
</template>
<script>
    import {Scroller} from 'vux'
    export default{
        data(){
            return{
                current:0,
            }
        },
        props:[
            "categoryList",
            "firstIndex"
        ],
        components:{
            Scroller,
        },
        methods:{
            choose(index){
                if(index!=this.current){
                    this.current= index
                    this.$emit("currentIndex",index)

                }
            }
        },
        watch:{
            firstIndex(newval){
                this.current = newval
            }
        }
    }
</script>
<style lang="less" scoped>
.sideBar{
    background-color: #f7f7f7;
    padding-top: 41px;
    width: 76px;
    ul{
        width: 76px;
        li{
            width: 100%;
            height: 46px;
            line-height: 46px;
            text-align: center;
            font-size: 14px;
            color:#333;
            &.current{
                background-color: #fff;
                color:#ff3742;
            }
        }
    }
}
</style>
