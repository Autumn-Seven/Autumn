<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import util from '@/util/util.js'

    export default {
        name: 'App',
        mounted:function() {
            this.recovery();
        },
        methods: {
            recovery(){
//                let user = util.get('user');
//                let role = this.$store.state.user.role;
//
//                console.log(role);
//
//                if(role !== ''){
//                    return;
//                }else if(user){
//                    this.$store.commit('setUser', user );
//                }else {
//                    this.$router.push('/login');
//                }

            },
        },
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
        box-sizing: border-box;
        font-size: 1rem;
        margin: 0;
        padding: 0;
        overflow: hidden;
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
