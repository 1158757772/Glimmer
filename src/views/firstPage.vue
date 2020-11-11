<template>
  <div>
    <van-search
      background="#000"
      placeholder="送出你的微光"
      @click="ToSearch"
    />
    <div class="round"></div>
    <head-card>

    </head-card>
    <head-nav>
    </head-nav>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search } from 'vant'
import headCard from './firstpagetool/headCard'
import headNav from './firstpagetool/headNav'
Vue.use(Search)
export default {

  methods: {
    ToSearch () {
      this.$router.push('/search')
    }
  },
  components: {
    headCard,
    headNav
  }
}

</script>

<style lang="scss" scoped>
.round{
  width: 100%;
  height: 150px;
  background: black;
  border-radius: 0 0 50% 50% ;
  position: absolute;
  top: 50px;
  z-index: -99;
}
</style>>
