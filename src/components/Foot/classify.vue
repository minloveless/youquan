<template>
    <div>
        <classifysearch></classifysearch>
        <classifylist></classifylist>
        <div class="container">
            <childlist></childlist>
            <productlist></productlist>
        </div>
    </div>
</template>
<script>
import classifysearch from '../classify/classifySearch'
import classifylist from '../classify/classifyList'
import childlist from '../classify/childList'
import productList from '../classify/productList'
export default {
    components:{
        classifysearch,
        classifylist,
        childlist,
        productList,
    }
}
</script>
<style lang="less" scoped>
.container{
    position: fixed;
    top: 40px;
    right: 0;
    bottom: 40px;
    left: 76px;
    height: 1000px;
    width: 1000px;
    overflow-y:scroll;
}
</style>