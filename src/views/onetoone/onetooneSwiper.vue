<template>
    <div class="swiper-container" :class="myname">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper-bundle'

export default {
  props: ['myname'],
  mounted () {
    new Swiper('.' + this.myname)
  }
}
</script>

<style>

</style>
