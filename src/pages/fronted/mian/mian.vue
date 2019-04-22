<template>
    <div class="main-wrapper">
        <vhead class="main-head"></vhead>
        <div class="bg"></div>
        <div class="content-wrap">
            <div class="main-content-wrap">
                <!--<keep-alive>     -->
                <router-view class="main-content"></router-view>
                <!--</keep-alive>-->


            </div>
            <vfoot class="foot"></vfoot>
        </div>

    </div>
</template>

<script>
    import vhead from './header'
    import vfoot from './footer'

    export default {
        data(){
            return {
                items: [],
                loading2: false
            }
        },
        methods: {},
        components: {
            vhead,
            vfoot
        }
    }
</script>

<style lang="less" scoped>
    .main-wrapper{
        position: relative;
        height: 100%;
        width: 100%;

        .main-head {
            height: 5rem;
        }
        .content-wrap{
            position: absolute;
            top : 4.5rem;
            bottom: 0;
            width: 100%;
            .main-content-wrap{
                position: absolute;
                top : 4rem;
                bottom: 3rem;
                height: 100%;
                width: 100%;
                overflow-y: scroll;
                margin: auto;
            }
            .foot{
                position: absolute;
                left: 50%;
                bottom: 5px;
               transform: translate(-50%,0);
            }
        }
    }


    .bg {
        z-index: -1;
        position: absolute;
        height: 40rem;
        width: 100%;
        left: 0;
        top: 0;
        /*background-size: cover; 必须放在background-position后面用 "/" 分割*/
        background: url('../../../assets/beijing.png') no-repeat center /cover;
        /* brightness()给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，
        则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。*/
        filter: brightness(0.7);
    }



    .fade-enter-active, .fade-leave-active {
        transition: all .3s;
    }

    .fade-enter {
        transform: translateY(2rem);
        opacity: 0;
    }

    .fade-leave-active {
        transform: translateX(2rem);
        opacity: 0;
    }
</style>
