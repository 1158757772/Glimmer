<template>
<div>
  <head-h>
      <div slot="left" class="text">大家最爱捐 | 发出你的光</div>
      <router-link slot="right" class="run"  to="/sport">全部<van-icon name="arrow" /></router-link>
  </head-h>
  <dl-list>
      <router-link to="/sport" tag="li" class="whole-li" v-for="item in list" :key="item.pid">
      <dl class="whole-dl">
          <dt class="img_dt"><img :src="'http:'+item.listimg+'/200'" alt=""></dt>
          <dd class="text_dd">
              <h3>{{item.title}}</h3>
              <h4><van-icon name="star" color="yellow" />上周接龙总长{{item.score|tokilo}}公里</h4>
              <p>{{item.org}}</p>
          </dd>
      </dl>
      </router-link>
  </dl-list>
  </div>
</template>

<script>
import headH from './head'
import dlList from './dlList'
import Vue from 'vue'
import { Icon } from 'vant'

import axios from 'axios'

Vue.use(Icon)
Vue.filter('tokilo', function (num) {
  return parseInt(String(num).substring(0, String(num).length - 6))
})
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    headH,
    dlList
  },
  mounted () {
    for (var i = 71; i <= 74; i++) {
      axios.get(`/cgi-bin/gywhd_gcd_qry_proj_rank?type=2&pg=4&pg_size=1&cateid=${i}&hk=48928${i + 459}&year=2020&week=44`).then(res => {
        this.list.push(res.data.data.info[0])
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.whole{
    .whole-li{
        height: 100px;
        .whole-dl{
            width: 100%;
            height: 100%;
            overflow: hidden;
            .img_dt{
                width: 40%;
                height: 100%;
                float: left;
                img{
                    width: 80%;
                    height: 80%;
                    margin-top: 10%;
                    margin-left: 10%;
                    border-radius: 5px;
                }
            }
            .text_dd{
                width: 60%;
                height: 100%;
                float: right;
                h3,h4{
                    font-weight: 400;
                    padding-bottom: 5px;
                }
                h3{
                    margin-top: 10%;
                    font-size: 16px;
                }
                h4{
                    font-size: 14px;
                }
                p{
                    font-size: 8px;
                    color: grey;
                }
            }
        }

    }
}
</style>
