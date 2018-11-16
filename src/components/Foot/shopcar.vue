<template>
    <div>
        <x-header :left-options="{backText:''}"
        :right-options="{showMore:true}">购物车</x-header>
        <div class="address">
            <span @click="selectaddress()"><i class="iconfont icon-dizhi"></i>{{value}}</span>
            <p>编辑商品</p>
        </div>




        <x-address style="display:none;" title="title" v-model="value" :list="addressData" placeholder="请选择地址" :show.sync="showAddress"></x-address>
    </div>
</template>
<script>
import {Scroller, XHeader, XAddress, ChinaAddressV4Data} from 'vux'
export default {
    data(){
        return{
            showAddress: false,
            addressData: ChinaAddressV4Data,
            value      : '请输入地址',
        }
    },
    components: {
        Scroller,
        XHeader,
        XAddress,
    },
    methods:{
        selectaddress(){
            this.showAddress = true;
        }
    }
}
</script>
<style lang="less" scoped>
.address{
    height       : 45px;
    line-height  : 45px;
    padding      : 0 10px;
    border-bottom: 1px solid #ccc;
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
</style>