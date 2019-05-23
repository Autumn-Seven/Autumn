/**
 * Created by Seven on 2019/5/23.
 * project: Autumn
 * email: fighting20xx@126.com
 */


import  util from 'tool/util.js'
let name = 'timer' + util.gid();


/**
 * timer mixin
 * 用法   1. 传入名称：如timer1，
 *        2. 可以多个   mixins:[timer('timer1'),timer('timer2'),]
 *        3. 使用   this.timer1(function() {
 *                      console.log(123)
 *                  }， 默认1000);
 *
 *  好处， 防止内存泄漏
 */
const timerMixin =(timerName) => {
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
                self[name] && clearTimeout( self[name]);
                self[name] = setTimeout(cb, time)
            };
        },
        beforeDestroy:function() {
            this[name] && clearTimeout( this[name]);
        }
    };
};

export default timerMixin