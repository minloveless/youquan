<template>
    <div class="search_container">
        <div class="search_top">
            <span class="to_last"><img src="" alt=""></span>
            <form action="#">
                <input type="search" placeholder="请输入你想要的产品">
            </form>
            <span>搜索</span>
        </div>
        <div class="search_show">
            <h3>热门搜索</h3>
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<script>
    
</script>
<style lang="less">
.search_container {
    position: fixed;
    width: 100%;
    height: 40px;
    background-color: #fff;
    border-buttom: 1px solid #ccc;
    top: 0;
    left: 0;
    .search_top {
        margin: 0 auto;
        padding-left: 40px;
        padding-right: 50px;
        position: relative;
        .to_last {
            position: absolute;
            left: 10px;
            top: 10px;
            height: 20px;
            width: 20px;
            background-color: red;
            img{
                height: 100px;
                width: 100px;
            }
        }
    }
}
</style>
