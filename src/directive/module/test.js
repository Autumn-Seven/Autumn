export default {

  /**
   * 自定义指令 v-clickoutside
   * */
  bind (el, binding, vnode) {
    let index = binding.value.index

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

    const mousemove = function () {
      vnode.context._data.currentIndex = index
    }
    el.addEventListener('mouseover', mousemove, true)

  },
  update (el, binding, vnode) {
    el.__v_forClass__ && el.__v_forClass__(el, binding, vnode)
  },
  unbind (el, binding) {
    delete el.__v_forClass__
  },
}
