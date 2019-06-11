/**
* Created by Seven on 2019/6/10.
 * project: Autumn
 * email: fighting20xx@126.com
 测试复制到剪切板库
 */ 

<template>
    <div>
        <input id="foo"  type="textarea" rows="10" v-model="message"></input>

        <Button class="test-clip" type="primary" data-clipboard-target="#foo" data-clipboard-action="cut" >剪切</Button>
        <Button class="test-clip" type="primary" data-clipboard-target="#foo" data-clipboard-action="copy" >复制</Button>
        <Button class="test-clip" type="primary" >复制</Button>

        <br>
        <br>

        <input id="foo2"  type="textarea" rows="10" v-model="message2"></input>
        <Button class="test-clip2" type="primary" data-clipboard-target="#foo2" data-clipboard-action="cut" v-clipboard="option">剪切</Button>
        <Button class="test-clip2" type="primary" data-clipboard-target="#foo2" data-clipboard-action="copy"  v-clipboard="option">复制</Button>
        <Button class="test-clip2" type="primary" >复制</Button>


    </div>
</template>
<script>
    import ClipboardJS from 'clipboard';


    export default {
        name: '',
        data(){
            return{
                message:'阿瑟的萨芬撒飞洒发沙发斯蒂芬',
                message2:'阿瑟的萨芬撒飞洒发沙发斯蒂芬',
                option:{
                    value:this.message2,
                    success:function(message) {
                        console.log(123,message)
                    } ,
                    error:function(message) {
                        console.log(123,message)
                    }
                }
            }
        },
        mounted:function() {

            this.init();
            this.init2();
        },
        methods:{
            init(){
//                var clipboard = new ClipboardJS('.test-clip2');
            },
            init2(){
                var clipboard = new ClipboardJS('.test-clip');

                clipboard.on('success', function(e) {
                    console.info('Action:', e.action);
                    console.info('Text:', e.text);
                    console.info('Trigger:', e.trigger);

                    e.clearSelection();
                });

                clipboard.on('error', function(e) {
                    console.error('Action:', e.action);
                    console.error('Trigger:', e.trigger);
                });
            }
        }
    }

</script>
<style>


</style>

