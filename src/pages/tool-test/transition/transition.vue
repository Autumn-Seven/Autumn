/**
* Created by Seven on 2019/6/10.
 * project: Autumn
 * email: fighting20xx@126.com
 测试复制到剪切板库
 */ 
<template>
    <div class="transition">
        <transition-group  name="fade"  enter-active-class="animated fadeInUp " leave-active-class=" animated fadeOutDown">
            <testModel v-show="show" v-for="index in 2" :key="index" class=""></testModel>
        </transition-group>
        <button @click="handleClick">toggle</button>


        <div id="box">
            <!-- 控制数据的值切换显示隐藏                      单个元素的时候  animated  内外二选一                多个元素的时候只能是内部 -->
            <button @click="show2=!show2">transition</button>
            <transition name="" mode="" enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
                <p v-show="show2" class="animated">第一种方法</p>
            </transition>
            <transition name="" mode="" enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
                <p v-show="show2" >第二种方法</p>
            </transition>


            <!-- 多元素运动 -->
            <transition-group tag="" name="" enter-active-class=" animated zoomInLeft" leave-active-class=" animated zoomOutRight">
                <p v-show="show2" class="animated" :key="1">第一个元素</p>
                <p v-show="show2" class="animated" :key="2">第二个元素</p>
            </transition-group>
        </div>

    </div>
</template>

<script>

    import testModel from './testModel.vue';
    export default {
       components:{
           testModel
       },
        props: {},
        data (){
            return {
                show: true,
                show2: true,

            }
        },
        computed: {


        },
        mounted (){

        },
        methods: {
            handleClick: function () {
                this.show = (this.show === true ? false : true)
            }


        }
    }
</script>

<style scoped lang="scss">
    @import './../../../assets/css/animate.min.css';
    .transition {
        .fade-enter, .fade-leave-to {
        }
        .fade-enter-active,.fade-leave-active {
            transition: all 1s;
        }


    }

</style>

