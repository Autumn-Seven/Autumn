/**
 * Created by Seven on 2019/5/23.
 * project: Autumn
 * email: fighting20xx@126.com
 */


import  util from '@/util/util.js'

/**
 * timer mixin
 *  定时器，或者是循环器，
 *
 * 用法   1. 传入名称：如timer1
 *        2. 可以多个   mixins:[timer('timer1'),timer('timer2'),]
 *        3. 使用   this.timer1(function() {
 *                      console.log(123)
 *                  }， 默认1000);
 *        4.可以传入第二个参数，  boolean, 一次，还是循环 mixins:[timer('timer1'，true)]  循环
 *
 *  好处， 防止内存泄漏
 */
const timerMixin =(timerName, flag = false) => {


    /**
     * 保证每一个timer的名称不一样，
     * */
    let name = 'timer' + util.gid();


    return {
        data(){
            return {
                [timerName] : null,
                [name] : null,
            }
        },
        mounted:function() {
            let self =this;

            self[timerName] = function(cb, time = 1000) {
                if(flag){
                    self[name] && clearInterval( self[name]);
                    self[name] = setInterval(cb, time)
                }else {
                    self[name] && clearTimeout( self[name]);
                    self[name] = setTimeout(cb, time)
                }

            };
        },
        beforeDestroy:function() {
            if( this[name]){
                if(flag){
                   clearInterval( self[name]);

                }else {
                    clearTimeout( self[name]);
                }
            }

        }
    };
};

export default timerMixin