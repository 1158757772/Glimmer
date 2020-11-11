import Vue from 'vue'

Vue.directive('top', {
  unbind () {
    // console.log("unbind")
    window.onscroll = null
  },
  inserted (el, binding) {
    // console.log(el)
    el.style.display = 'none'

    window.onscroll = () => {
      // console.log("onscroll",document.documentElement.scrollTop)

      const target = binding.value ? binding.value : 50
      if ((document.documentElement.scrollTop || document.body.scrollTop) > target) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  }
})
