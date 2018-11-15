<template>
    <div class="sideBar">
       <scroller lock-x height="-89">
         <ul>
            <li v-for="(item,index) in list" :key="index" @click="choose(index)" :class="{current:current==index}">
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
                list:[
                                        {
                        cid:0,
                        name:"热门推荐"
                    },
                    {
                        cid:1,
                        name:"手机数码"
                    },
                                        {
                        cid:2,
                        name:"家用电器"
                    },
                                        {
                        cid:3,
                        name:"电脑办公"
                    },
                                        {
                        cid:4,
                        name:"计生情趣"
                    },
                                        {
                        cid:0,
                        name:"美妆护肤"
                    },
                                        {
                        cid:5,
                        name:"个护清洁"
                    },
                                        {
                        cid:6,
                        name:"汽车用品"
                    },
                                        {
                        cid:7,
                        name:"优品超市"
                    },
                                        {
                        cid:8,
                        name:"男装"
                    },
                                        {
                        cid:9,
                        name:"男鞋"
                    },
                                        {
                        cid:10,
                        name:"女装"
                    },
                                        {
                        cid:11,
                        name:"女鞋"
                    },
                                                            {
                        cid:12,
                        name:"图书影像"
                    },
                                                            {
                        cid:13,
                        name:"户外运动"
                    },
                ]
            }
        },
        props:[
            "list1",
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
