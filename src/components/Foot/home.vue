<template>
    <div class="banner">
        <swiper auto  height="188px" dots-position=center loop>
            <swiper-item><img src="https://m.360buyimg.com/mobilecms/jfs/t1/8003/29/6295/117672/5be0ec9eE6f1b99f8/4cf474a3aa0d3744.jpg!cr_1125x549_0_72" alt=""></swiper-item>
            <swiper-item><img src="https://m.360buyimg.com/mobilecms/jfs/t1/9429/34/2137/147775/5bd15bf8E1d6f1c64/6541186b799d8fc6.jpg!cr_1125x549_0_72" alt=""></swiper-item>
            <swiper-item><img src="https://m.360buyimg.com/mobilecms/s1125x690_jfs/t1/4588/15/15904/318880/5be06c95E13b7c8db/69ee7809845031ee.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt=""></swiper-item>
            <swiper-item><img src="https://m.360buyimg.com/mobilecms/s1125x690_jfs/t1/7351/10/6081/101878/5be01241E73550889/d06ba3720b7bd654.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt=""></swiper-item>
        </swiper>
    </div>
</template>
<script>
import {Swiper,SwiperItem} from 'vux'
export default {
    components: {
        Swiper,
        SwiperItem,
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
