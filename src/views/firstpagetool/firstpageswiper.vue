<template>
  <div>
   <g-swiper :perview="2" title="project" v-if="list.length" :atplay="1000">
        <div class="swiper-slide fistnav" v-for="item in list" :key="item.id" @click="godetail(item.id)">
          <dl>
            <dt><img :src="'http:'+item.img" alt=""></dt>
            <dd>
              <h3>{{item.title}}</h3>
              <h4>{{item.des}}</h4>
            </dd>
          </dl>
        </div>
      </g-swiper>
  </div>
</template>
<script>
import gSwiper from '@/components/glimmerswiper'
import axios from 'axios'
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    gSwiper
  },
  mounted () {
    axios.get('json/headnav.json').then(res => {
      this.list = res.data.data
    })
  },
  methods: {
    godetail (id) {
      this.$router.push('lovelovedetail/' + id + '/data_detail')
    }
  }
}
</script>

<style lang="scss" scoped>
.fistnav{
  border-radius: 5px;
  overflow: hidden;
  dl{
    dt{
      img{
        width: 100%;
        vertical-align: bottom;
      }
    }
    dd{
          background-color: rgb(244, 245, 250);
      h3{
        font-weight: 400;
        font-size: 14px;
        padding: 5px;
      }
      h4{
        font-weight: 400;
        font-size: 8px;
        padding: 6px;
        color: #607d8b;
      }
    }
  }

}
</style>
