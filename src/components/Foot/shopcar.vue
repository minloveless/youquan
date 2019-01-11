<template>
    <div class="shopcar_box">
        <x-header :left-options="{backText:''}"
        :right-options="{showMore:true}">购物车</x-header>
        <div class="item_list">
            <div v-if='!car.length' class="empty">
                <img src="https://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png" alt="">
                <p>空空如也，快去购物吧~</p>
                <div class="line"><span>我是一根线</span></div>
            </div>
    <div v-else>
            <div class="address" v-if="car.length">
            <span><i class="iconfont icon-dizhi"></i><input @click="selectaddress()" placeholder="请选择地址" :value="provinces"></span>
            <p @click="editorAll">{{allEditor?'完成':'编辑商品'}}</p>
            </div>
            <div class="youjuan_showList">
            <div class="showList_box">
                <div class="listContent">
                    <!-- 头部 -->
                    <div class="head_wrap">
                        <div class="head" @click="chooseAll">
                            <i class="iconfont icon-xuanzhong" v-show="!allChoose" @click.stop.prevent="chooseAll"></i>
                            <i class="iconfont icon-xuanzhong1" v-show="allChoose" @click.stop.prevent="chooseAll"></i>
                            <span>有券良品</span>
                            <div>优惠券</div>
                        </div>
                    </div>
                    <!-- 内容 -->
                    <div class="listItem" v-for="(items,index) in newnewCar" :key="index" v-if="items.counts">
                        <div class="top">
                            <i class="iconfont icon-dianpu"></i>
                            <span class="top_price">购满199元，可用优惠券换购商品</span>
                            <span class="coudan">去凑单<i class="iconfont icon-jiantou-right"></i></span>
                        </div>
                        <div class="content">
                            <div class="content_l">
                                <span><i class="iconfont icon-xuanzhong xuanzhong"  v-show="!items.active" @click.stop.prevent="chooseOne({id:items.id})"></i></span>
                                <span><i class="iconfont icon-xuanzhong1 xuanzhong"  v-show="items.active" @click.stop.prevent="chooseOne({id:items.id})"></i></span>
                                <img class="showyou" src="https://img10.360buyimg.com/mobilecms/s117x117_jfs/t3871/193/501637202/67656/c6725c75/58534587N53c62548.jpg!q70.dpg.webp" alt=""  @click="goDetail(items.id)">
                            </div>
                            <div class="content_r">
                                <div class="goods_title"  @click="goDetail(items.id)">Apple AirPods 蓝牙无线耳机</div>
                                <div class="goods_classify">0.18kg/件，AirPods(蓝牙)<i class="iconfont icon-down-trangle"></i></div>
                                <div class="goods_number">
                                    <span class="price">￥{{items.price}}</span>
                                    <span class="number"><i class="iconfont icon--hao" @click.stop.prevent="reduce({id:items.id,count:items.counts})"></i>{{$store.getters.getgoodscount[items.id]}}<i class="iconfont icon-hao" @click.stop.prevent="add({id:items.id})"></i></span>
                                </div>
                                <div class="add_delect">
                                    <span>移除关注</span>
                                    |
                                    <span  @click.stop.prevent="delect({id:items.id})">删除</span>
                                </div>
                            </div>
                        </div>
                        <ul class="bottomBox">
                            <li>
                                <span class="bottom_l">促销</span>
                                <span class="bottom_c">满199元加65元可换购商品</span>
                                <span class="bottom_r">3个可选<i class="iconfont icon-down-trangle"></i></span>
                            </li>
                            <li>
                                <span class="bottom_l">服务</span>
                                <span class="bottom_c">选择增值服务(包含礼品服务)</span>
                                <span class="bottom_r"><i class="iconfont icon-jiantou-right"></i></span>
                            </li>
                        </ul>
                    </div>      
                </div>
                <div class="fixBar">
                    <div class="fixBar_box">
                        <div class="fixBar_l" @click="chooseAll">
                            <i class="iconfont icon-xuanzhong" v-show="!allChoose"></i>
                            <i class="iconfont icon-xuanzhong1" v-show="allChoose"></i>
                            <span>全选</span>
                        </div>
                        <div class="fixBar_r">
                            <div class="fixBar_rl">
                                <div class="fix_lt">
                                    <span class="fix_lt_number">总计：</span>
                                    <span class="fix_lt_price">￥{{getAllMoney}}</span>
                                </div>
                                <div class="fix_lb">
                                    <span>总额￥{{getAllMoney}}</span>
                                    <span>立减￥0.00</span>
                                </div>
                            </div>
                            <div class="fixBar_rr">
                                <span>去结算</span>
                                <span class="all_number">（{{$store.getters.getAllCount}}件）</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fixBar_allEdult" v-show="allEditor">
                    <div class="fixBar_allEdult_box">
                        <div class="fixBar_l">
                            <i class="iconfont icon-xuanzhong"></i><span>全选</span>
                        </div>
                        <div class="fixBar_r">
                            <div class="fixBar_rl">
                                <span>移至收藏</span>
                            </div>
                            <div class="fixBar_rr" @click.stop.prevent="delect({id:items.id})">
                                <span>删除</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="moreYouWant"></div>
            <div class="moregoods"></div>
        </div>
            </div>
        </div>

        <area-own :showArea="min" :areaList="areaList" @chooseArea="chooseArea" :defaultArea="defaultArea" @closeArea="closeArea"></area-own>

        <alert v-model="showAlert" :title="alertTitle">{{alertMsg}}</alert>
        <transition 
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            mode="out-in">
            <div class="ball" v-show="ballFlag" ref="ball">+1</div>
        </transition>
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
import axios from 'axios'
import {Scroller, XHeader, XAddress, ChinaAddressV4Data} from 'vux'
import areaOwn from '../shopCar/area'
import{Alert} from "vux"
export default {
    data(){
        return{
            provinces:"",
            allEditor: 0,
            min: false,
            areaList:[],
            defaultArea:[],
            province_id:0,
            city_id:0,
            area_id:0,
            // value: '请输入地址',
            CarList: this.$store.state.car,
            // carList: this.car,
            active:0,
            goodsactive:0,
            // showDelect:0,
            itemList: [],
            allChoose:0,
            comChoose:0,
            control:0,
            newnewCar: this.$store.state.car,
            alertMsg: "该商品一件起售",
            showAlert: false,
            alertTitle: "提示",
            ballFlag: false,
            oneFlag: false,
        }
    },
    components: {
        Scroller,
        XHeader,
        XAddress,
        areaOwn,
        Alert,
    },
    methods:{
        getGoodsList(){
            axios.get('/shopcar/goodsList')
            .then(res => {
                console.log(res.data)
                console.log(res.data.item_list)
                this.itemList = res.data.item_list
                console.log(this.itemList)
            })
            .catch(err => {
                console.log(err)
            })
        },
        selectaddress(){
            this.min = true;
        },
        chooseCom(choose){
            this.active=choose;
            this.goodsactive=choose;
        },
        editorAll(){
            this.allEditor=!this.allEditor
            this.allChoose = false
            this.active = 0
        },
        chooseOne(info1){
            // this.car.forEach(item => {
            //     var num = 0;
            //     if (item.active == true) {
            //         num += 1
            //         console.log(num)
            //         if(num >= this.car.length) {
            //             this.allChoose = true
            //         }
            //     }
            // });
            this.control = 1;
            this.$store.commit("updateOneGoodsSelected",info1)
        },
        goDetail(id){
            this.$router.push({path:'/productDetail',query:{id:id}})
        },
        add(obj){
            this.ballFlag = !this.ballFlag
            this.$store.commit("increment",obj)
        },
        reduce(obj){
            if(obj.count <= 1){
                this.showAlert = true;
                // this.$vux.loading.hide();
            } else{
                this.$store.commit("subtract",obj)
            }

        },
        delect(obj){
            this.$store.commit("removeFormCut",obj)
        },
        chooseArea(val){
            this.provinces = val.select1.text +" "+ val.select2.text +" "+ val.select3.text;
            this.province_id = val.select1.value;
            this.city_id = val.select2.value;
            this.area_id = val.select3.value;
            this.min = false;
        },
        showAreaFn (){
            if(!this.showArea&&this.areaList.length){
                this.showArea = true;
            }
        },
        closeArea (){
            this.min = false;
        },
        chooseAll(){
            console.log(this.newnewCar)
            var newCar = JSON.parse(JSON.stringify(this.car))
            console.log(newCar)
            newCar.map((v) => {
                v.active = !this.allChoose
            })
            this.allChoose = !this.allChoose
            this.$store.commit('updateGoodsSelected',newCar)
        },
        beforeEnter(el) {
            el.style.transform = "translate(0, 0)";
        },
        enter(el, done) {
            el.offsetWidth;
            // //获取小球的位置
            // console.log(this.$refs.ball)
            // const ballPosition = this.$refs.ball[0].getBoundingClientRect();
            //获取徽标的位置
            // const badgePosition = document
            //     .getElementById("all_number")
            //     .getBoundingClientRect();
            
            // const xDist = badgePosition.left - ballPosition.left;
            // const yDist = badgePosition.top - ballPosition.top;

            el.style.transform ="translateY(-30px)";//${xDist} ${yDist}
            el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
            done();
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag;
        }  
    },
    mounted(){
         this.getGoodsList()
        //   console.log(this.$refs)
    },
    computed:{
        ...mapState(['car']),
        ...mapGetters(['getAllMoney']),
        ...mapMutations(['updateGoodsSelected']),
    },
    watch: {
        newnewCar : {
            handler (newArr) {
            if (this.control) {
                var newList = JSON.parse(JSON.stringify(newArr))
                var n = 0
                newList.map( function(v){
                    if(v.active){
                        n++
                        console.log(n)
                    }
                })
                if (n == newList.length) {
                    this.allChoose = 1
                } else {
                    this.allChoose = 0
                }
                this.control = 0
            }
         },
         deep:true,
        }
    }
}
</script>
<style lang="less" scoped>
.empty{
    position: relative;
    text-align: center;
    padding-top: 50px;
    background-color: #f7f7f7;
    img{
        width: 100px;
        height: 100px;
    }
    p{
        color: #999;
        margin-top: 10px;
        font-size: 16px;
    }
    .line{
        margin-top: 30px;
        position: relative;
        &::after{
            content: "";
            height: 0.5px;
            position: absolute;
            top: 50%;
            left: 10px;
            right: 10px;
            background-color: #ccc;
            z-index: 1;
            margin-top: -0.5px;
        }
        span{
            z-index: 2;
            color: #999;
            background-color: #f7f7f7;
            height: 1rem;
            line-height: 1rem;
            position: relative;
            padding: 0 15px;
            &::before{
                content: "";
                position: absolute;
                left: 0px;
                top: 50%;
                margin-top: -2px;
                width: 4px;
                height: 4px;
                background-color: #ccc;
                border-radius: 50%;
            }
            &::after{
                content: "";
                position: absolute;
                right: 0px;
                top: 50%;
                margin-top: -2px;
                width: 4px;
                height: 4px;
                background-color: #ccc;
                border-radius: 50%;
            }
        }
    }
}
.shopcar_box{
    overflow-y: scroll;
    overflow: hidden;
    padding-bottom: 50px;
}
.address{
    height       : 45px;
    line-height  : 45px;
    padding      : 0 10px;
    border-bottom: 1px solid #f3f3f3;
    span{
        display  : block;
        float    : left;
        color    : #ccc;
        font-size: 14px;
        input{
            border: none;
            padding-left:5px;
            color: #666;
        }
    }
    p{
        float    : right;
        font-size: 14px;
        color    : #ff3742;
    }
}
.youjuan_showList{
    .showList_box{
        .listContent{
            .head_wrap{
                padding: 10px;
                .head{
                    .icon-xuanzhong{
                        font-size: 20px;
                    }
                    .icon-xuanzhong1{
                        font-size: 20px;
                        color: #ff3742;
                    }
                    span{
                        padding-left: 5px;
                        font-size   : 16px;
                    }
                    div{
                        float: right;
                        color: #ff3742;
                    }
                }
            }
            .listItem{
                position     : relative;
                padding      : 10px;
                height       : 195px;
                margin-bottom: 10px;
                border-top   : 1px solid #f3f3f3;
                .top{
                    .icon-search{
                        font-size: 20px;
                    }
                    .top_price{
                        padding-left: 10px;
                        color       : #ff3742;
                    }
                    .coudan{
                        float    : right;
                        font-size: 12px;
                        color    : #ccc;
                        .icon-jiantou-right{
                            font-size: 12px;
                        }
                    }
                }
                .content{
                    padding-top: 8px;
                    .content_l{
                        float: left;
                        span{
                            position: relative;
                            .xuanzhong{
                            position : absolute;
                            top      : -50px;
                            font-size: 20px;
                        }
                    .icon-xuanzhong1{
                        color: #ff3742;
                    }
                        }
                        .showyou{
                            height      : 75px;
                            width       : 75px;
                            padding-left: 30px;
                        }
                    }
                    .content_r{
                        float       : left;
                        padding-left: 15px;
                        .goods_title{
                            font-size: 14px;
                        }
                        .goods_classify{
                            margin      : 8px 0;
                            border      : 1px solid #e5e5e5;
                            height      : 21px;
                            width       : 225px;
                            font-size   : 14px;
                            padding-left: 5px;
                            line-height : 21px;
                            color       : #666;
                            .icon-down-trangle{
                                float: right;
                            }
                        }
                        .goods_number{
                            height     : 30px;
                            line-height: 30px;
                            .price{
                                float    : left;
                                color    : #ff3742;
                                font-size: 16px;
                            }
                            .number{
                                float           : right;
                                height          : 30px;
                                width           : 110px;
                                background-color: #f3f3f3;
                                text-align      : center;
                                line-height     : 30px;
                                color           : #666;
                                .icon--hao{
                                    display: inline-block;
                                    height : 30px;
                                    width  : 30px;
                                    float  : left;
                                    color  : #e5e5e5;
                                }
                                .icon-hao{
                                    display: inline-block;
                                    height : 30px;
                                    width  : 30px;
                                    float  : right;
                                    color  : #666;
                                }
                            }
                        }
                        .add_delect{
                            position: absolute;
                            right   : 10px;
                            margin  : 5px;
                            color   : #e5e5e5;
                            span{
                                padding: 5px;
                                color  : #ccc;
                            }
                        }
                    }
                }
                .bottomBox{
                    position        : absolute;
                    bottom          : 0px;
                    right           : 10px;
                    height          : 35px;
                    width           : 305px;
                    background-color: #f3f3f3;
                    padding         : 10px;
                    li{
                        height   : 20px;
                        color    : #999;
                        font-size: 12px;
                        .bottom_l{
                            float: left;
                            color: #666;
                        }
                        .bottom_c{
                            float       : left;
                            padding-left: 10px;
                            color       : #999;
                        }
                        .bottom_r{
                            float: right;
                            .icon-jiantou-right{
                                font-size: 12px;
                            }
                        }
                    }


                }
            }
        }
        .fixBar_box{
            height          : 50px;
            width           : 100%;
            background-color: #f3f3f3;
            position        : fixed;
            bottom          : 0;
            left            : 0;
            padding-left    : 10px;
            box-sizing      : border-box;
            // line-height: 50px;
            .fixBar_l{
                float     : left;
                text-align: center;
                padding-top:5px;
                z-index: 100;
                .icon-xuanzhong{
                    display  : block;
                    font-size: 20px;
                }
                .icon-xuanzhong1{
                    display  : block;
                    font-size: 20px;
                    color: #ff3742;
                }
                span{
                    color: #999;
                }
            }
            .fixBar_r{
                float: right;
                .fixBar_rl{
                    // float: left;
                    position: absolute;
                    right   : 120px;
                    padding-top: 5px;
                    width:205px;
                    .fix_lt{
                        float: right;
                        // overflow: hidden;
                        width:205px;
                        text-align: right;
                        .fix_lt_number{
                            font-weight: 700;
                            font-size  : 16px;
                            color      : #333;
                        }
                        .fix_lt_price{
                            color      : #ff3742;
                            font-size  : 16px;
                            font-weight: 700;
                        }
                    }
                    .fix_lb{
                        display: block;
                        float      : right;
                        padding-top: 5px;
                        color      : #999;
                    }

                }
                .fixBar_rr{
                    float           : right;
                    background-color: #ff3742;
                    height          : 50px;
                    width           : 110px;
                    margin-left     : 10px;
                    text-align      : center;
                    line-height     : 50px;
                    color           : #fff;
                    font-weight     : 700;
                    font-size       : 16px;
                    .all_number{
                        font-size  : 12px;
                        font-weight: 400;
                        font-family: none;
                        outline    : none;
                    }
                }
            }
        }
        .fixBar_allEdult{
            .fixBar_allEdult_box{
                height          : 50px;
                width           : 100%;
                background-color: #f3f3f3;
                position        : fixed;
                bottom          : 0;
                left            : 0;
                padding-left    : 10px;
                box-sizing      : border-box;
                .fixBar_l{
                float     : left;
                text-align: center;
                padding-top:5px;
                .icon-xuanzhong{
                    display  : block;
                    font-size: 20px;
                }
                span{
                    color: #999;
                }
                }
                .fixBar_r{
                    float: right;
                    .fixBar_rl{
                        float: left;
                        background-color: #ff9600;
                        height: 50px;
                        width: 110px;
                        text-align: center;
                        line-height: 50px;
                        color: #fff;
                        font-size: 16px;
                        font-weight: 700;

                    }
                    .fixBar_rr{
                    float           : right;
                    background-color: #ff3742;
                    height          : 50px;
                    width           : 110px;
                    text-align      : center;
                    line-height     : 50px;
                    color           : #fff;
                    font-weight     : 700;
                    font-size       : 16px;
                    }
                }
            
            }
        }
    }
}
.ball{
    // width: 15px;
    // height: 15px;
    // border-radius: 50%;
    // background-color: red;
    position: absolute;
    z-index: 1001;
    bottom: 10px;
    right: 20px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
}
// .fly-enter{
//     transform: translate(0,0);
//     opacity: 1;
// } 
// .fly-enter-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .fly-enter-to
// /* .slide-fade-leave-active for below version 2.1.8 */ {
//   transform: translateY(-20px);
//   opacity: 0;
// }
// .fly-leave{
//     transform: translate(0,0);
//     opacity: 1;
// } 
// .fly-leave-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .fly-leave-to
// /* .slide-fade-leave-active for below version 2.1.8 */ {
//   transform: translateY(-20px);
//   opacity: 0;
// }
 @import "../../style/common.less";
</style>