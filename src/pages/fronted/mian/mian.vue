<template>
    <div class="main-wrapper">
        <vhead class="main-head"></vhead>
        <div class="bg"></div>
        <!--<keep-alive>     -->
        <router-view class="main-content"></router-view>
        <!--</keep-alive>-->
        <vfoot class="foot"></vfoot>
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
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        -webkit-flex-direction: column;
        height: 100%;

        /*overflow: scroll;*/

        .head, .foot {
            flex: 0 0 auto;
        }
        .main-content {
            width: 80%;
            padding-bottom: 0;
            max-width: 900px;
            flex: 1 ;
            background: #fff;
            margin: auto;
        }
    }


    .bg {
        z-index: -1;
        position: absolute;
        height: 30rem;
        width: 100%;
        left: 0;
        top: 0;
        /*background-size: cover; 必须放在background-position后面用 "/" 分割*/
        background: url('../../../assets/bg.jpg') no-repeat center /cover;
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
