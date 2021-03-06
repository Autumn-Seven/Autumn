// import draggable from './module/draggable'
import clipboard from './module/clipboard'
import formitemshow from './module/formitemshow'
import test from './module/test'
import forclass from './module/forclass.js'
import permission, { checkPermission } from './module/permission'

const directive = {
	// draggable,
	clipboard,
	formitemshow,
	permission,
    test,
    forclass,
};



const importDirective = Vue => {
	/**
	 * 拖拽指令 v-draggable="options"
	 * options = {
   *  trigger: /这里传入作为拖拽触发器的CSS选择器/,
   *  body:    /这里传入需要移动容器的CSS选择器/,
   *  recover: /拖动结束之后是否恢复到原来的位置/
   * }
	 */
	// Vue.directive('draggable', directive.draggable)
	/**
	 * clipboard指令 v-draggable="options"
	 * options = {
   *  value:    /在输入框中使用v-model绑定的值/,
   *  success:  /复制成功后的回调/,
   *  error:    /复制失败后的回调/
   * }
	 */
	Vue.directive('clipboard', directive.clipboard)
	/**
	 * clipboard指令 v-draggable="options"
	 * options = {
   *  value:    /在输入框中使用v-model绑定的值/,
   *  success:  /复制成功后的回调/,
   *  error:    /复制失败后的回调/
   * }
	 */
	Vue.directive('formitemshow', directive.formitemshow)




	Vue.directive('permission', directive.permission);
	Vue.directive('test', directive.test);
	Vue.directive('forclass', directive.forclass);

	Vue.prototype.$checkPermission = checkPermission // 挂在到全局，供动态渲染dom调用
}

export default importDirective
