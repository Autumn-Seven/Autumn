<template>
    <div id="app">
        <transition :name="transitionName" mode="out-in">
            <router-view  class="Router"></router-view>
        </transition>
    </div>
</template>

<script>


    import util from '@/util/util.js'

    export default {
        name: 'App',
        data() {
            return {
                transitionName: 'slide-right'  // 默认动态路由变化为slide-right
            }
        },
        watch: {
            '$route' (to, from) {
                let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
                if (isBack) {
                    this.transitionName = 'slide-right'
                } else {
                    this.transitionName = 'slide-left'
                }
                this.$router.isBack = false
            }
        },
        mounted:function() {
            this.recovery();
        },
        methods: {
            recovery(){
            },
        },
    }
</script>

<style lang="scss">
    @import 'assets/css/animate.min.css';

    html,body {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-align: center;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        font-size: 1rem;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }


    .Router {
        transition: all .8s ease;
    }

    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;

        transform: translate( 0,100%);
    }

    .slide-left-leave-active,
    .slide-right-enter {
        opacity: 0;
        transform: translate( 0,-100%);

    }

    /*.fade-enter-active,.fade-leave-active {*/
        /*transition: all .3s ease;*/
    /*}*/
    /*.fade-enter,.fade-leave-active {*/
        /*opacity: 0;*/
    /*}*/
</style>
