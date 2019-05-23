/**
* Created by Seven on 2019/5/23.
 * project: Autumn
 * email: fighting20xx@126.com
 */ 

<template>
    <div>{{msg}}</div>
</template>
<script>
    import key from 'keymaster';
    import timer from '@/mixins/timer.js';

    export default {
        name: 'keymaster',
        mixins:[timer('timer1')],
        data(){
            return {
                msg:'请开始'
            }
        },

        mounted(){
            this.test();
        },
        methods:{
            test() {
                let showMessage = this.showMessage;
                


                // 检测 各个键，
                let str = 'q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m,'+
                        '0,.,1,2,3,4,5,6,7,8,9,/,*,-,+,'+
                        'shift,backspace,tab,clear,enter,esc,escape,space,left,up,right,down,del,delete,home,end,pageup,pagedown,left'+
                        '=,;,\',[,],\\,\,';
                str.split(',').forEach(function(k) {
                    key(k, function(){ showMessage(`you 按了      ${k} `) });
                });



                // 功能键
                // returning false stops the event and prevents default browser events
                key('ctrl+r', function(){ showMessage('stopped reload!'); return false });

                // multiple shortcuts that do the same thing
                key('⌘+r, ctrl+r', function(){ });
                if(key.shift) alert('shift is pressed, OMGZ!');


                if(key.isPressed("M")) showMessage('M key is pressed, can ya believe it!?');
                if(key.isPressed(77)) showMessage('M key is pressed, can ya believe it!?');
            },




            showMessage:function(msg) {
                let self = this;
                self.msg = msg;

                this.timer1(function() {
                    self.msg = '测试中....';
                },1000);


            }
        }
    }
</script>


