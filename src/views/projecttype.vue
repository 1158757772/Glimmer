<template>
  <div>
       <van-search
        v-model="value"
        shape="round"
        background="fff"
        placeholder="查询公益项目"
        @focus="focusfns"
        ref="h"
        >

      </van-search>
      <!--<div class="navbar">
      <ul >
        <router-link to="/projecttype/jb" tag="li" active-class="C_active">
          <i class="iconfont">&#xe61e;</i>
          <span>疾病救助</span>
        </router-link>
        <router-link to="/projecttype/fp" tag="li" active-class="C_active">
          <i class="iconfont">&#xe628;</i>
          <span>扶贫救灾</span>
        </router-link>
        <router-link to="/projecttype/jy" tag="li" active-class="C_active">
          <i class="iconfont">&#xe6b5;</i>
          <span>教育助学</span>
        </router-link>
        <router-link to="/projecttype/zr" tag="li" active-class="C_active">
          <i class="iconfont">&#xeec3;</i>
          <span>自然保护</span>
        </router-link>
        <router-link to="/projecttype/qt" tag="li" active-class="C_active">
          <i class="iconfont icon-comments">&#xe6ae;</i>
          <span>其他</span>
        </router-link>
    </ul>
    </div> -->
      <router-view></router-view>
  </div>
</template>

<script>

import Vue from 'vue'
import { Search, Tab, Tabs } from 'vant'

Vue.use(Search).use(Tabs).use(Tab)
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {

    focusfns () {
      this.$router.push('/C_search')
    }
  },
  mounted () {
    console.log(this.$refs.h.clientHeight)
  }
}
</script>

<style lang="scss" scoped>
  // @import url();
  .C_active{
    color:#c60;
    border-bottom: #c60 2px solid;
  }

</style>
