<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        box-sizing: border-box;
        font-size: 1rem;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all .2s ease;
    }
    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }
</style>
