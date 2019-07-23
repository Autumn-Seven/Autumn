/**
* Created by Seven on 2019/6/10.
 * project: Autumn
 * email: fighting20xx@126.com
 测试复制到剪切板库
 */ 

<template>
        <swiper>

            <swiperItem slot="item1" :key="1">111111111111</swiperItem>
            <swiperItem slot="item2" :key="2">2222222222222</swiperItem>
            <swiperItem slot="item3" :key="3">3333333333333</swiperItem>
            <swiperItem slot="item4" :key="4">4444444444444</swiperItem>
        </swiper>
</template>
<script>
   import swiper from '@/components/common/swiper.vue'
   import swiperItem from '@/components/common/swiperItem.vue'



    export default {
        name: '',
        components:{
            swiper,
            swiperItem,
        },
        data(){
            return{
                message:'阿瑟的萨芬撒飞洒发沙发斯蒂芬',
                message2:'阿瑟的萨芬撒飞洒发沙发斯蒂芬',

            }
        },
        mounted:function() {


        },
        methods:{
            init(){
//                var clipboard = new ClipboardJS('.test-clip2');
            },
            init2(){

            }
        }
    }

</script>
<style>
    @import 'animate.css/animate.min.css';

</style>

