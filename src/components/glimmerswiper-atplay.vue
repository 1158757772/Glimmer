<template>
  <div class="swiper-container" :class="title">
          <div class="swiper-wrapper">
              <slot></slot>
          </div>
          <div  :class="'swiper-pagination'+title" class="swiper-pagination" v-if="page"></div>
  </div>
</template>
<script>
import Swiper from 'swiper/bundle'// swipe6 之前， 所有的功能都集成再swiper核心包
// swiper6之后， 功能分离了。
import 'swiper/swiper-bundle.css'
// css在哪？？？
export default {
  props: {
    title: {
      type: String
    },
    page: {
      type: Boolean
    }
  },
  // 每次更新都会重新执行
  mounted () {
    new Swiper('.' + this.title, {
      loop: false,
      autoplay: {
        delay: 2000,
        disableOnInteraction: true
      },
      pagination: {
        el: '.swiper-pagination' + this.title,
        clickable: true,
        dynamicBullets: true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
