/**
* Created by Seven on 2019/5/23.
 * project: Autumn
 * email: fighting20xx@126.com
 */ 

<template>
    <div class="msg">
        <div class="msg-item">事件：{{msg}}</div>
        <div class="msg-item">检测：{{msg2}}</div>
        <div class="msg-item">全部： {{msg3}}</div>
        <div class="msg-item">作用域： {{msg4}}</div>
    </div>
</template>
<script>
    import key from 'keymaster';
    import timer from '@/mixins/timer.js';

    export default {
        name: 'keymaster',
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
                let showMessage2 = this.showMessage2;



                //事件方式-------------------------------------------------------

                // 检测 各个键，
                let str = 'q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m,'+
                        '0,.,1,2,3,4,5,6,7,8,9,/,*,-,+,'+
                        'backspace,tab,clear,enter,esc,escape,space,left,up,right,down,del,delete,home,end,pageup,pagedown,left'+
                        '=,;,\',[,],\\,\,';
                str.split(',').forEach(function(k) {
                    key(k, function(){ showMessage(`你按了      ${k} `) });
                });

                // 功能组合键
                // returning false stops the event and prevents default browser events    return false 阻止浏览器默认行为
                key('ctrl+r', function(){ showMessage('ctrl+r'); return false });
                key('shift+r', function(){ showMessage('shift+r');  });
                key('alt+r', function(){ showMessage('alt+r');  });
                key('alt+t ,ctrl+t', function(){ showMessage('按了alt+t ,ctrl+t 其中一个'); return false });
                key('shift+up ,shift+down ,shift+left ,shift+right', function(){ showMessage('按了shift+up ,shift+down ,shift+left ,shift+right 其中一个'); return false });







                //检测方式-------------------------------------------------------
                // 可以随时去获取，键盘特殊键状态，
                this.timer2(function() {
                    if(key.shift) showMessage2('shift is pressed, OMGZ!');
                    if(key.ctrl) showMessage2('ctrl is pressed, OMGZ!');
                    if(key.alt) showMessage2('alt is pressed, OMGZ!');
                    if(key.enter) showMessage2('enter is pressed, OMGZ!');

                    if(key.isPressed("M")) showMessage2('M key is pressed, can ya believe it!?');
                    if(key.isPressed("a")) showMessage2('a key is pressed, can ya believe it!?');
                    if(key.isPressed("b")) showMessage2('b key is pressed, can ya believe it!?');
                    if(key.isPressed("c")) showMessage2('c key is pressed, can ya believe it!?');
                    if(key.isPressed(7)) showMessage2('7 key is pressed, can ya believe it!?');

                    self.msg3 = key.getPressedKeyCodes();
                },100);



                //作用域------------------------------------------------------
                // define shortcuts with a scope
                key('o, enter', 'issues', function(){ self.msg4 ='作用域：issues' });
                key('o, enter', 'files', function(){ self.msg4 ='作用域：files' });

                // set the scope (only 'all' and 'issues' shortcuts will be honored)
                key.setScope('issues'); // default scope is 'all'， （设置了之后， 只有all 和 issues生效）
                // remove all events that are set in 'issues' scope
//                key.deleteScope('issues');





                //键盘过滤------------------------------------------------------ return false;禁止event事件
                // 当焦点在 input输入框的时候，可以输入，其他不可输入
                key.filter = function(event){
//                    var tagName = (event.target || event.srcElement).tagName;
//                    key.setScope(/^(INPUT|TEXTAREA|SELECT)$/.test(tagName) ? 'input' : 'other');
                    return true;
                }





                //解绑事件------------------------------------------------------
                // unbind 'a' handler  解绑所有的a上面的事件
                key.unbind('a');

                // unbind a key only for a single scope 解绑单个作用域。
                // when no scope is specified it defaults to the current scope (key.getScope())
                key.unbind('o, enter', 'issues');
                key.unbind('o, enter', 'files');


            },
            showMessage:function(msg) {
                let self = this;
                self.msg = msg;

                this.timer1(function() {
                    self.msg = '测试中....';
                },1000);
            },
            showMessage2:function(msg) {
                let self = this;
                self.msg2 = msg;

                this.timer1(function() {
                    self.msg2 = '测试中....';
                },1000);
            },
        }
    }
</script>
<style lang="less">
    .msg-item{
        margin: 20px;
        font-size: 1rem;

        &:nth-child(1){
            color: red;
        }
        &:nth-child(2){
            color: green;
        }
        &:nth-child(3){
            color: #232455;
        }
    }
</style>


