<template>
    <div class="shopcar_box">
        <x-header :left-options="{backText:''}"
        :right-options="{showMore:true}">购物车</x-header>
        <div class="address" v-if="carList.length">
            <span @click="selectaddress()"><i class="iconfont icon-dizhi"></i>请选择地址</span>
            <p @click="editorAll">{{allEditor?'完成':'编辑商品'}}</p>
        </div>
        <div class="youjuan_showList">
            <div class="showList_box">
                <div class="listContent" v-for="(item,index) in itemList" :key="index">
                    <!-- 头部 -->
                    <div class="head_wrap">
                        <div class="head">
                            <i class="iconfont icon-xuanzhong" v-show="!active" @click.stop.prevent="chooseCom(1)"></i>
                            <i class="iconfont icon-xuanzhong1" v-show="active" @click.stop.prevent="chooseCom(0)"></i>
                            <span>{{item.title}}</span>
                            <div>优惠券</div>
                        </div>
                    </div>
                    <!-- 内容 -->
                    <div class="listItem" v-for="(items,index) in item.goods_list" :key="index">
                        <div class="top">
                            <i class="iconfont icon-dianpu"></i>
                            <span class="top_price">购满199元，可用优惠券换购商品</span>
                            <span class="coudan">去凑单<i class="iconfont icon-jiantou-right"></i></span>
                        </div>
                        <div class="content" @click="goDetail(1)">
                            <div class="content_l">
                                <span><i class="iconfont icon-xuanzhong xuanzhong"  v-show="!goodsactive" @click.stop.prevent="chooseOne(1,0)"></i></span>
                                <span><i class="iconfont icon-xuanzhong1 xuanzhong"  v-show="goodsactive" @click.stop.prevent="chooseOne(0,0)"></i></span>
                                <img class="showyou" src="https://img10.360buyimg.com/mobilecms/s117x117_jfs/t3871/193/501637202/67656/c6725c75/58534587N53c62548.jpg!q70.dpg.webp" alt="">
                            </div>
                            <div class="content_r">
                                <div class="goods_title">Apple AirPods 蓝牙无线耳机</div>
                                <div class="goods_classify">0.18kg/件，AirPods(蓝牙)<i class="iconfont icon-down-trangle"></i></div>
                                <div class="goods_number">
                                    <span class="price">￥{{items.price}}</span>
                                    <span class="number"><i class="iconfont icon--hao" @click.stop.prevent="reduce"></i>{{$store.getters.getgoodscount[item.id]}}<i class="iconfont icon-hao" @click.stop.prevent="add"></i></span>
                                </div>
                                <div class="add_delect">
                                    <span>移除关注</span>
                                    |
                                    <span>删除</span>
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
                        <div class="fixBar_l">
                            <i class="iconfont icon-xuanzhong"></i><span>全选</span>
                        </div>
                        <div class="fixBar_r">
                            <div class="fixBar_rl">
                                <div class="fix_lt">
                                    <span class="fix_lt_number">总计：</span>
                                    <span class="fix_lt_price">￥1155.00</span>
                                </div>
                                <div class="fix_lb">
                                    <span>总额￥1155.00</span>
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
                            <div class="fixBar_rr">
                                <span>删除</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="moreYouWant"></div>
            <div class="moregoods"></div>
        </div>

        <area-own :showArea="showArea" :areaList="areaList" @chooseArea="chooseArea" :defaultArea="defaultArea" @closeArea="closeArea"></area-own>


       
    </div>
</template>
<script>
import {Scroller, XHeader, XAddress, ChinaAddressV4Data} from 'vux'
import areaOwn from '../shopCar/area'
export default {
    data(){
        return{

            allEditor: 0,
            showArea: true,
            areaList:[],
            defaultArea:[],
            province_id:0,
            city_id:0,
            area_id:0,
            // value: '请输入地址',
            carList:[1],
            active:0,
            goodsactive:0,
            // showDelect:0,
            itemList: [
                  {
                    id:1,
                    title:'有券良品',
                    goods_list:[
                        {
                          id:1,
                          price:1199.00,
                        },
                        {
                          id:2,
                          price:888.00,
                        },
                        {
                          id:3,
                          price:666.00,
                        },
                    ]
                  },
                  {
                    id:2,
                    title:'我的小店',
                    goods_list:[
                        {
                          id:1,
                          price:111.00,
                        },
                        {
                          id:2,
                          price:222.00,
                        },
                        {
                          id:3,
                          price:333.00,
                        },
                    ]
                  },
                ],
        }
    },
    components: {
        Scroller,
        XHeader,
        XAddress,
        areaOwn
    },
    methods:{
        selectaddress(){
            this.showAddress = true;
        },
        chooseCom(choose){
            this.active=choose;
            this.goodsactive=choose;
        },
        editorAll(){
            this.allEditor=!this.allEditor
        },
        chooseOne(choose,goods){
            this.goodsactive= choose
        },
        // getCartList(url,str){
        //      return new Promise((resolve, reject) => {
        //      let strArrParam = JSON.parse(str)
        //      axios.get(url,{ params : {
        //        params: strArrParam
        //      }})
        //        .then(response => {
        //          resolve(response);
        //        })
        //        .catch((error) => {
        //          reject(error)
        //        })
        //     })
        // },
        goDetail(id){
            this.$router.push({path:'/productDetail',query:{id:id}})
        },
        add(){
            this.$store.commit("increment")
        },
        reduce(){
            this.$store.commit("subtract")
        },
        chooseArea(val){
            this.provinces = val.select1.text +" "+ val.select2.text +" "+ val.select3.text;
            this.province_id = val.select1.value;
            this.city_id = val.select2.value;
            this.area_id = val.select3.value;
            this.showArea = false;
        },
        showAreaFn (){
            if(!this.showArea&&this.areaList.length){
                this.showArea = true;
            }
        },
        closeArea (){
            this.showArea = false;
        },
    },
    // mounted:{
    //     // getCartList()
    // }
}
</script>
<style lang="less" scoped>
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
                    // float: left;
                    position: absolute;
                    right   : 120px;
                    padding-top: 5px;
                    .fix_lt{
                        float: right;
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
                        float      : right;
                        padding-top: 2px;
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
 @import "../../style/common.less";
</style>