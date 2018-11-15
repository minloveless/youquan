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
import productlist from '../classify/productList'
export default {
    components:{
        classifysearch,
        classifylist,
        childlist,
        productlist,
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
    overflow-y:scroll;
}
</style>