<template>
  <div>
   <g-swiper :perview="1" title="show" class="showsw" :page="true">
        <div class="swiper-slide fistnav" v-for="item in list" :key="item">
          <img :src="'http:'+item" alt="">
        </div>
      </g-swiper>
  </div>
</template>
<script>
import gSwiper from '@/components/glimmerswiper'
export default {
  data () {
    return {
      list: ['//scdn.gongyi.qq.com/gongyi/gyupload/project_recommend/1605066084_7123.jpg', '//scdn.gongyi.qq.com/gongyi/gyupload/project_recommend/1604714871_7211.jpg']
    }
  },
  components: {
    gSwiper
  }
}
</script>

<style lang="scss" scoped>
.showsw{
  margin-top: 20px;
  img{
    width: 100%;
    vertical-align: bottom;
  }
}
</style>
