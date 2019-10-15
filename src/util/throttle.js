/**
 * Created by Seven on 2019/9/9.
 * project: Autumn
 * email: fighting20xx@126.com
 */




/**
 * @public   节流阀 延时 防抖函数       -------节流阀， 防止调用太快， ----在延时时间内保证只有一个函数执行，  如果调用太快就 clear之前的。 可能会失帧，
 * @param {(Function)} fn
 * @param {number} [delay=0] Unit: ms.
 * @param {boolean} [debounce=false]         true:防抖动，保证延时间隔的情况下，每一个都要延时，     false:保证延时间隔的情况下，如果间隔够长了就立即执行，
 *        true: If call interval less than `delay`, only the last call works.
 *        false: If call interval less than `delay, call works on fixed rate.
 * @return {(Function)} throttled fn.
 */
export function throttle(fn, delay, debounce) {

    var currCall;            //本地调用   开始时间
    var lastCall = 0;        //上次调用   开始时间
    var lastExec = 0;        //最后一次执行 开始时间
    var timer = null;
    var diff;
    var scope;
    var args;
    var debounceNextCall;

    delay = delay || 0;

    function exec() {
        lastExec = (new Date()).getTime();
        timer = null;
        fn.apply(scope, args || []);            //一个函数能够执行需要（1.作用域，  2.参数）
    }

    var cb = function () {
        currCall = (new Date()).getTime();
        scope = this;
        args = arguments;
        var thisDelay = debounceNextCall || delay;
        var thisDebounce = debounceNextCall || debounce;
        debounceNextCall = null;
        diff = currCall - (thisDebounce ? lastCall : lastExec) - thisDelay;

        clearTimeout(timer);                                                //在延时时间内保证只有一个函数执行，

        // Here we should make sure that: the `exec` SHOULD NOT be called later
        // than a new call of `cb`, that is, preserving the command order. Consider
        // calculating "scale rate" when roaming as an example. When a call of `cb`
        // happens, either the `exec` is called dierectly, or the call is delayed.
        // But the delayed call should never be later than next call of `cb`. Under
        // this assurance, we can simply update view state each time `dispatchAction`
        // triggered by user roaming, but not need to add extra code to avoid the
        // state being "rolled-back".
        if (thisDebounce) {
            timer = setTimeout(exec, thisDelay);
        }
        else {
            if (diff >= 0) {
                exec();
            }
            else {
                timer = setTimeout(exec, -diff);
            }
        }

        lastCall = currCall;
    };

    /**
     * Clear throttle.
     * @public
     */
    cb.clear = function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    };

    /**
     * Enable debounce once.
     */
    cb.debounceNextCall = function (debounceDelay) {
        debounceNextCall = debounceDelay;
    };

    return cb;
}
