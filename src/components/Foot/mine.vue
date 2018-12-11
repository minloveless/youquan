<template>
    <div class="wrapper">
        <scroller lock-x height="-50">
            <div>
      <x-header :left-options="{backText:''}"
        :right-options="{showMore:true}">我的有券</x-header>
        <div class="card_box">
            <div class="mine_card" v-for="(item,index) in users" :key="index">
                <div class="avatar"><img src="../../assets/images/banner0.jpg" alt=""></div>
                <div class="card_details">
                    <div class="top">
                        <span>{{item.nickname}}<i class="iconfont icon-edit"></i></span>
                        <span><i class="iconfont icon-vip"></i>银牌</span>
                    </div>
                    <div class="mid">用户名：{{item.username}}</div>
                    <div class="bottom">
                        <a href="#">京享值1008 <i class="iconfont icon-jiantou-right"></i></a>
                        <a href="#">小白信用73.00 <i class="iconfont icon-jiantou-right"></i></a>
                    </div>
                </div>
            </div>
            <a href="#" class="more_manage"><i class="iconfont icon-shezhi"></i>账号管理</a>
        </div>
        <card>
            <div slot="content" class="order_box" v-for="(items,index) in this.dataList.section_1" :key="index">
                <div v-for="(it,index) in items.child" :key="index" @click="statusBtn(it.cid)">
                    <i class="iconfont" :class="it.font_class"></i><br>
                    <span>{{it.child_tilte}}</span>
                </div>
            </div>
        </card>
        <card>
            <div slot="content" class="order_box_property" v-for="(items,index) in this.dataList.section_2" :key="index">
                <div v-for="(it,index) in items.child" :key="index">
                    <span>{{it.num}}张</span><br>
                    <span>{{it.title}}</span>
                </div>
                <div><i class="iconfont icon-icon-"></i><br>
                    <span>全部资产</span></div> 
                </div>
        </card>
        <card>
            <div slot="content" class="order_box">
                <div>
                    <i>10</i><br>
                    <span>商品收藏</span>
                </div>
                <div><i>2</i><br>
                    <span>店铺收藏</span></div>
                <div><i>225</i><br>
                    <span>我的足迹</span></div>
            </div>
        </card>
        <card :header="{title: '必备工具' }" :footer="{title: '查看更多',link:''}">
             <div slot="content" class="order_box">
                       <div>
                           <i class="iconfont icon-dfk"></i><br>
                           <span>代付款</span>
                       </div>
                       <div><i class="iconfont icon-daishouhuo"></i><br>
                           <span>待收货</span></div>
                       <div><i class="iconfont icon-shouhou"></i><br>
                           <span>退换/售后</span></div>
                       <div><i class="iconfont icon-icon-"></i><br>
                           <span>全部订单</span></div>
               </div>
               <div slot="content" class="order_box">
                       <div>
                           <i class="iconfont icon-dfk"></i><br>
                           <span>代付款</span>
                       </div>
                       <div><i class="iconfont icon-daishouhuo"></i><br>
                           <span>待收货</span></div>
                       <div><i class="iconfont icon-shouhou"></i><br>
                           <span>退换/售后</span></div>
                       <div><i class="iconfont icon-icon-"></i><br>
                           <span>全部订单</span></div>
               </div>
        </card>
       </div>
     </scroller>
    </div>
</template>
<script>
import {XHeader, Card, Scroller} from 'vux'
import axios from 'axios'
import { error } from 'util';
export default {
    data(){
        return{
            users:[],
            dataList:"",
        }
    },
    components:{
        XHeader,
        Card,
        Scroller,
    },
    methods:{
        statusBtn(statu){
            var statuNum = '';
            if(statu == 1){
                statuNum = 1;
            } else if (statu == 2) {
                statuNum = 2;
            } else if (statu == 3) {
                statuNum = 3;
            } else if (statu == 4) {
                statuNum == 0;
                console.log(statu)
            }
            if(statuNum != 3) {
                this.$router.push({path:"orderList",query:{'status':statuNum}})
            } else {
                this.$router.push({path:"aftersale"})
            }
        }
    },
    mounted(){
        axios.get('/mine/index')
        .then(res => {
            // console.log(res.data.list)
            this.users = res.data.list.users
            this.dataList = res.data.list.section
        })
        .catch(error => {
            console.log(err)
        })
    }
}
</script>
<style lang="less" scoped>
.wrapper{
    width: 100%;
    height: auto;
    overflow: hidden;
    background: #f7f7f7;
}
.card_box{
    padding: 10px;
    position: relative;
    background-color: #fff;
    .mine_card{
            display: flex;
            height: 67px;
            width: 325px;
            padding: 25px 15px;
            background-color: #ff3742;
            border-radius: 15px;
            align-items: center;
        .avatar{
            height: 60px;
            width: 60px;
            background-color: cyan;
            overflow: hidden;
            border-radius: 50%;
            border: 1px solid #ccc;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .card_details{
            padding-left: 10px;
            color: #fff;
            .top{
                font-size: 14px;
                .icon-edit{
                    font-size: 10px;
                    padding-left: 10px;
                }
                .icon-vip{
                    color:#ccc;
                    padding-left: 10px;
                    padding-right: 3px;
                }
            }
            .mid{
                font-size: 12px;
                padding: 5px 0;
            }
            .bottom{
                font-size: 13px;
                a{
                    display: inline-block;
                    border-radius: 15px;
                    font-size: 10px;
                    height: 15px;
                    padding: 0 8px 0 7px;
                    background-color: rgba(180,50,27,.3);
                    text-align: center;
                    box-sizing: border-box;
                    color: #fff;
                    .icon-jiantou-right{
                        font-size: 10px;
                    }
                }
            }
        }
    }
    .more_manage{
        position: absolute;
        right: 25px;
        top: 20px;
        color:#fff;
        .icon-shezhi{
            font-size: 10px;
            padding-right: 5px;
        }
    }
}
.order_box{
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
    div{
        flex:1;
        text-align: center;
        i{
            font-size: 23px;
            color:#ff3742;
        }
        span{
            display: inline-block;
            padding-top: 3px;
            color:#666;
        }
    }
}
.order_box_property{
    display: flex;
    flex-wrap: wrap;
    padding-top: 15px;
    padding-bottom: 15px;
    div{
        flex:1;
        text-align: center;
        i{
            font-size: 23px;
            color:#ff3742;
        }
        span:nth-child(1){
            display: inline-block;
            font-size: 14px;
            color:#ff3742;
        }
        span:nth-child(2){
            display:block;
            padding-bottom: 10px;
            color:#666;
        }
    }
}
</style>