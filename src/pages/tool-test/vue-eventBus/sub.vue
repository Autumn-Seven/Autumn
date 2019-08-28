/**
* Created by Seven on 2019/8/2.
 * project: Autumn
 * email: fighting20xx@126.com
 */



<template>
    <div></div>
</template>
<script>
    export default {
        inject: ["eventBus",'reAcquireAPIData'],


        watch:{
            "reAcquireAPIData.a":function () {         //检测变化，  造成一个响应的  provide inject  //南北向  主要用来南北向通知，
                console.log('接收到通知了')
            },
            deep:true,
        },
        methods:{
            doSomething:function() {
                this.eventBus.$emit('事件名称','参数');     //在事件总线上进行触发。                 //南北向，东西向都可以通知到，      南北向有provide了， 这个主要就用来东西向。
            }
        }
    }

</script>
<style>


</style>

