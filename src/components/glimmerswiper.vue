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
    perview:{
      type:Number
    },
    title:{
      type:String
    },
    page:{
      type:Boolean
    }
  },
  // 每次更新都会重新执行
  mounted () {
    // console.log("mounted")
    new Swiper('.'+this.title, {
      slidesPerView: this.perview,
      spaceBetween: 10,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination'+this.title,
        clickable :true,
        dynamicBullets: true,
      }
      // direction:"vertical"
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic{
  left: 90%;
 
}
</style>