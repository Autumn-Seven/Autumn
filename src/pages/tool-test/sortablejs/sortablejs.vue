/**
* Created by Seven on 2019/5/23.
 * project: Autumn
 * email: fighting20xx@126.com
 */ 

<template>
   <div class="top">
       <ul  ref="items">
           <li>item 1</li>
           <li>item 2</li>
           <li>item 3</li>
       </ul>

       <ul  ref="items2">
           <li>item 1</li>
           <li>item 2</li>
           <li>item 3</li>
       </ul>
   </div>
</template>
<script>
    import Sortable  from 'sortablejs';
    import timer from '@/mixins/timer.js';

    export default {
        name: 'sortablejs',
        mixins:[timer('timer1'),timer('timer2',true)],
        data(){
            return {
                msg:'请按任意键开始',
                msg2:'',
                msg3:'',
                msg4:'',
            }
        },

        mounted(){
            this.test();
        },
        methods:{
            test() {
                let self =this;
                let showMessage = this.showMessage;


                 Sortable.create( this.$refs.items);
                 Sortable.create( this.$refs.items2);


            },
            showMessage:function(msg) {
                let self = this;
                self.msg = msg;

                this.timer1(function() {
                    self.msg = '测试中....';
                },1000);
            },
        }
    }
</script>
<style lang="less" scoped>
    .top{
       display: flex;

        ul:nth-child(1){
            color: red;
        }
        ul:nth-child(2){
            color: green;
        }
        ul:nth-child(3){
            color: #232455;
        }

        li{
            list-style: none;
            background-color: gainsboro;

            width: 200px;
            padding: 15px;
            margin: 5px;
        }


    }
</style>


