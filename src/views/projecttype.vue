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
      <van-tabs
      v-model="active"
      swipeable
      sticky
      animated
      @click="onClick"
      >
        <van-tab
        v-for="(item) in title"
        :key="item.id"
        :to="'/projecttype/detail/'+item.dress"
        >

        <template #title>
          <van-icon
            class="icon"
            :name="item.img"
            size=25

            />
            {{item.name}}
            </template>
             <router-view></router-view>
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search, Tab, Tabs, Icon } from 'vant'
// import LoginVue from '../../../1105/上午/test2005/src/views/Login.vue'
Vue.use(Search).use(Tabs).use(Tab).use(Icon)
export default {
  data () {
    return {
      active: 0,
      swipeable: true,
      value: '',
      title: [
        {
          name: '疾病救助',
          id: 1,
          dress: 'jb',
          img: 'gold-coin-o'

        },
        {
          name: '扶贫救灾',
          id: 2,
          dress: 'fp',
          img: 'flag-o'
        },
        {
          name: '教育助学',
          id: 3,
          dress: 'jy',
          img: 'description'
        },
        {
          name: '自然保护',
          id: 4,
          dress: 'zr',
          img: 'flower-o'

        },
        {
          name: '其他',
          id: 5,
          dress: 'qt',
          img: 'setting-o'
        }

      ]
    }
  },
  methods: {
    focusfns () {
      this.$router.push('/C_search')
    },

    onClick (name, title) {
      this.$store.commit('cleanlist')
      this.$store.dispatch('getmyjson', this.$route.params.myid)
    }
  },
  mounted () {
    var arr = ['jb', 'fp', 'jy', 'zr', 'qt']
    console.log(this.$route.params.myid)
    this.active = indexOf(arr, this.$route.params.myid)
    function indexOf (arr, item) {
      return arr.indexOf(item)
    }
  }
}
</script>

<style lang="scss" scoped>
  // @import url();
  .C_active{
    color:#c60;
    border-bottom: #c60 2px solid;

  }
  .icon{
    display: flex;
    flex-direction :column;
    text-align: center;

  }

</style>
