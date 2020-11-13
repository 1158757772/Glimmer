<template>
    <div>
        <van-grid
        :border="false"
        :column-num="4"
        :class=" ishidden?'hidden':''"
        >

            <van-grid-item
            v-for="(item,index) in list"
            :key="item.id"
            :class="current===index?'C_active':'' " @click="handleClick(item,index)"
            >
            {{item.name}}
            </van-grid-item>

        </van-grid>
        <div style="text-align:center;">
            <van-icon :name=" ishidden?'arrow-down':'arrow-up'" @click="ishidden=!ishidden" />

        </div>
          <div v-if="datalist.length">
        <van-list  @load="C_Load"
            v-model="loading"
        :finished="finished"
        :immediate-check="false"
        finished-text="我是有底线的"
        >
            <van-cell v-for="data in datalist" :key="data.fundId" @click="hc">
              <img :src="data.listImg | imgsrc" alt="">

            </van-cell>
        </van-list>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import { Grid, GridItem, Icon, List, Cell } from 'vant'
Vue.use(GridItem).use(Grid).use(Icon).use(List).use(Cell)
Vue.filter('imgsrc', (img) => {
  return img + '/100'
})
export default {
  data () {
    return {
      list: [],
      current: 0,
      ishidden: true,
      myid: 'jb',
      C_id: 71,
      id: [],
      datalist: [],
      loading: false,
      finished: false,

      total: 0
    }
  },
  methods: {

    hc () {
      console.log(this.C_id)
    },
    C_Load () {
      if (this.datalist.length === 0) {
        this.loading = false
        return
      }
      if (this.datalist.length === 0) {
        this.loading = false
        return
      }

      this.current++
      console.log(this.current, this.C_id, 'szh')
      axios.get(
        `/cgi-bin/gywcom_gy_filter?page=${this.current}&pcnt=6&ranktype=time&pstatus=active&ptype=${this.C_id}`
      ).then(res => {
        console.log(res.data, 444444444)
        this.datalist = [...this.datalist, ...res.data.data.projs]
        // loading改会false
        this.loading = false
      })
    },
    handleClick (item) {
      this.C_id = item.id
      this.current = 0
      console.log(this.C_id, this.current)

      axios.get(
        `/cgi-bin/gywcom_gy_filter?page=${this.current}&pcnt=6&ranktype=time&pstatus=active&catetag=${this.C_id}`
      ).then(res => {
        console.log(res.data)
        //   if (res.data.data.projs) {
        //   this.finished = true// 请求结束，禁用懒加载
        //   return
        // }
        // loading改会false

        // this.datalist = [...this.datalist, ...res.data.data.projs]
      })
    }
  },

  mounted () {
    axios('/json/C_json.json').then(res => {
      var myid = this.$route.params.myid
      if (this.$route.params.myid === myid) {}

      this.list = res.data[myid]
      this.id = this.list.map(item => item.id)
    })
    axios.get(
      '/cgi-bin/gywcom_gy_filter?page=0&pcnt=6&ranktype=time&pstatus=active&ptype=71'

    ).then(res => {
      console.log(res.data.data.projs, 33333333333333333)
      // setTimeout(()=>{

      // },100)

      this.datalist = [...this.datalist, ...res.data.data.projs]
      // loading改会false
      this.loading = false
    })
  }
}
</script>
<style>
    van-grid{
        margin-top: 5px;
    }
    .C_active{
        background-color: #c60;
       z-index: 100;
       color: #c60;
    }
    .hidden{
    height: 55px;
    overflow: hidden;
  }
</style>
