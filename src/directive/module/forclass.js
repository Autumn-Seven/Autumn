export default {

  /**
   * 自定义指令 v-forclass
   * 作用：为v-for 自动添加上class样式, 并且添加傻瓜鼠标悬浮class
       .flex-item{}
       .flex-item-0{}
       .flex-item-1{}
       .flex-item-active{}
       .flex-item-active-0{}

   *使用方法  v-for="item ,index in Arry" :key="index" v-forclass="{item,index,currentIndex}"
   *
   * */
  bind (el, binding, vnode) {
    let {
      item,
      index,
      currentIndex,          //初始index值
      type,                  //[hover,click]  默认是hover
      recover,              //是不是恢复到原来的 index, 只有在hover时候有效
    } = binding.value;
    console.log(type)
    if(!type) type = 'hover';


    function vForClass (el, binding, vnode) {
      let bindObj = binding.value
      let index = bindObj.index
      let currentIndex = bindObj.currentIndex

      let classList = el.classList
      classList.add('flex-item')
      classList.add('flex-item-' + index)

      if (index === currentIndex) {
        classList.add('flex-item-active')
        classList.add('flex-item-active-' + index)
      } else {
        classList.remove('flex-item-active')
        classList.remove('flex-item-active-' + index)
      }
    }

    vForClass(el, binding, vnode)
    el.__v_forClass__ = vForClass


    /**
     *
     * 给元素添加事件
     * */
    if(type === 'hover'){
      const mousemove = function () {
        vnode.context._data.currentIndex = index
      }
      el.addEventListener('mouseover', mousemove, true)
      el.__v_forClass_mousemove__ = mousemove;

      if(recover){
        const mouseout = function () {
          vnode.context._data.currentIndex = currentIndex;
        }
        el.addEventListener('mouseout', mouseout, true);
        el.__v_forClass_mouseout__ = mouseout;
      }
    }else {
      const click = function () {
        vnode.context._data.currentIndex = index
      }
      el.addEventListener('click', click, true);
      el.__v_forClass_click__ = click;
    }
  },
  update (el, binding, vnode) {
    el.__v_forClass__ && el.__v_forClass__(el, binding, vnode)
  },
  unbind (el) {
    delete el.__v_forClass__;
    delete el.__v_forClass_mousemove__;
    delete el.__v_forClass_mouseout__;
    delete el.__v_forClass_click__;
  },
}
