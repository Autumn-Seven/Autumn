/**
* Created by Seven on 2019/8/2.
 * project: Autumn
 * email: fighting20xx@126.com
 */



<template>
    <div></div>
</template>
<script>
    /**
     * 两种事件传播的方式
     *      provide inject  南北向
     *      eventBus       东西向（也可南北）
     *
     *
     * */
    import Vue from 'vue';

    export default {
        name: '',
        data(){
            return {
                reloadTemp:{a:0},
            }
        },
        provide() {
            return {
                eventBus: null,
                reAcquireAPIData:this.reloadTemp,        //provide原本不是响应式的，  这里传入一个响应对象，制造一个响应
            }
        },
        created () {
            var self = this;
            this.initAPITimer();

            /** Vue 可以绑定事件，那就用一个Vue对象当作事件总线
             * */
            self._provided.eventBus =  new Vue();
            self.eventBus = self._provided.eventBus;
            self.eventBus.$on('dragEvent', self.Handler);
        },
        beforeDestroy: function(){
            this.eventBus.$off('dragEvent', this.Handler);
        },
        methods:{

            Handler:function() {},

            /**
             * 设计定时器10分钟一次， 通过provide inject通知子元素
             * */
            initAPITimer:function () {
                let self =this;
                this.APITimer = setInterval(function () {
                    self.reloadTemp.a = new Date();
                },10 * 60 * 1000)  //10分钟重新加载接口数据；
            }
        }
    }

</script>
<style>


</style>

