

export default {

	/**
	 * 自定义指令 v-clickoutside
	 * */
	bind(el, binding, vnode) {
	    console.log(el.classList);
	    console.log(binding);
	    console.log(binding.value);




		function vForClass(el, binding, vnode) {
            let bindObj = binding.value;
            let index = bindObj.index;
            let currentIndex = bindObj.currentIndex;
            let item = bindObj.item;

            let classList = el.classList;
            classList.add('flex-item')
            classList.add('flex-item-'+index)

            if(index === currentIndex){
                classList.add('flex-item-active')
                classList.add('flex-item-active-'+index)
            }else {
                classList.remove('flex-item-active')
                classList.remove('flex-item-active-'+index)
            }


		}
        vForClass(el, binding, vnode);
		// 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
		el.__v_forClass__ = vForClass;
	},
	update(el, binding, vnode) {
	    console.log(el);
        el.__v_forClass__ && el.__v_forClass__(el, binding, vnode);
    },
	unbind(el, binding) {
		// 解除事件监听
		document.removeEventListener('click', el.__vueClickOutside__);
		delete el.__vueClickOutside__;
	},
}
