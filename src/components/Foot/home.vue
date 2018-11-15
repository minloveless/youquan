<template>
    <div>
        <router-view></router-view>
        <foot></foot>
    </div>
</template>
<script>
import foot from "../foot"
export default {
    components: {
        foot,
    }
}
</script>
<style lang="less" scoped>
.banner {
    height: 188px;
    width: 100%;
    img{
    width: 100%;
    height: 100%;
    }
}

</style>
