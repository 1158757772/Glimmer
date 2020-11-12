<template>
<div>
    <bt-Swiper v-if="list.length" title="szhbtSiper">
        <div class="swiper-slide" v-for="(item,index) in list" :key="index" >
           有人资助了【 {{item.pname}}】<span class="right">{{item.time | gettime}}</span>
        </div>
    </bt-Swiper>
</div>
</template>

<script>
import axios from 'axios'
import btSwiper from '@/components/glimmerswiper-column'
import Vue from 'vue'
Vue.filter('gettime', function (time) {
  const newtime = Math.floor((new Date().getTime()) / 1000 - parseInt(time))
  if (newtime <= 0) {
    return '刚刚'
  } else {
    return newtime + '秒前'
  }
})
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.get('/cgi-bin/gywcom_qry_donate_dynamic').then(res => {
      this.list = res.data.data.dynamic
    })
  },
  components: {
    btSwiper
  }
}
</script>

<style lang="scss" scoped>
.szhbtSiper {
    height: 50px;
    overflow: hidden;
    margin-top: 10px;
    .swiper-slide{
        width: 100%;
        height: 100%;
        line-height: 50px;
        position: relative;
        .right{
            position: absolute;
            right: 5px;
        }
    }
}
</style>
