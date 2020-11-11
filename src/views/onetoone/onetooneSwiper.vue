<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  mounted () {
    new Swiper('.swiper-container', {
      spaceBetween: 30
    })
  }
}
</script>

<style>

</style>
