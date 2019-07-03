/**
* Created by Seven on 2019/6/10.
 * project: Autumn
 * email: fighting20xx@126.com
 测试复制到剪切板库
 */ 
<template>
    <div class="transition">
        <transition  name="fade"  enter-active-class="animated swing fade-enter-active"
                     leave-active-class="animated shake fade-leave-active"
                     appear-active-class="animated swing">
            <testModel v-if="show"></testModel>
        </transition>
        <button @click="handleClick">toggle</button>
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
                show: true

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
            opacity: 0;
        }
        .fade-enter-active,.fade-leave-active {
            transition: opacity 5s;
        }


    }

</style>

