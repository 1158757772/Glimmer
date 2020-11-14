<template>
    <div>
        <van-grid
        :border="false"
        :column-num="4"
        :class=" ishidden?'hidden':''"
        v-if="list.length"
        >

            <van-grid-item
            v-for="(item,index) in $store.state.list"
            :key="item.id"
            :class="op===index?'C_active':'' "
            @click="handleClick(item,index)"
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
                  <van-cell v-for="data in datalist" :key="data.fundId" @click="hc(data)" class="cs0">
                    <div class="cs1">
                      <img :src="data.listImg | imgsrc" alt="" >
                    </div>
                    <div class="cs2">
                    <p>{{data.title}}</p>
                    <p>

                      <span>{{data.objTagName}}</span>
                      <span>{{data.cateTagName}}</span>
                      <span>{{data.cateName}}</span>
                    </p>
                    <p>{{data.summary}}</p>
                    </div>
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
      op: 0,
      list: [],
      current: 0,
      ishidden: true,
      myid: 'jb',
      C_id: 71,
      id: [],
      datalist: [],
      loading: this.$store.state.loading,
      finished: false,
      handleC: []
    }
  },
  methods: {

    hc (data) {
      this.$router.push('/lovelovedetail/' + data.id + '/data_detail')
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
      let ptype = 'ptype'

      if (this.current !== 0) {
        ptype = 'ptype'
      } else {
        ptype = 'catetag'
      }

      this.current++

      axios.get(
        `/cgi-bin/gywcom_gy_filter?page=${this.current}&pcnt=6&ranktype=time&pstatus=active&${ptype}=${this.C_id}`
      ).then(res => {
        if (res.data.data.projs == null) {
          console.log(1111111)
          this.finished = true
          return
        }
        this.datalist = [...this.datalist, ...res.data.data.projs]
        // loading改会false
        this.loading = false
      })
    },
    handleClick (item, index) {
      console.log(item, 1111)
      this.current = 0
      this.C_id = item.id
      console.log(this.C_id)
      this.op = index
      console.log(index)
      let ptype = 'ptype'
      if (index === 0) {
        ptype = 'ptype'
      } else {
        ptype = 'catetag'
      }
      console.log(this.C_id)
      axios.get(
        `/cgi-bin/gywcom_gy_filter?page=${this.current}&pcnt=6&ranktype=time&pstatus=active&${ptype}=${this.C_id}`
      ).then(res => {
        this.datalist = [this.datalist, ...res.data.data.projs]

        // loading改会false
        this.loading = false
        // this.datalist = [...this.datalist, ...res.data.data.projs]
      })
    }
  },

  mounted () {
    if (this.$store.state.list.length === 0) {
      console.log('require axios')
      this.$store.dispatch('getmyjson', this.$route.params.myid).then(() => {
        console.log(this.$store.state.list)
        this.list = this.$store.state.list
      })
    } else {
      console.log('run cache')
    }
    if (this.$store.state.detaillist.length === 0) {
      this.$store.dispatch('getdetaillist', this.C_id).then(() => {
        this.datalist = this.$store.state.detaillist
        console.log(this.list)
      })
    } else {
      console.log('run cache2')
    }
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
    .cs0{
      display: flex;
      justify-content: center;
    }
    /* .cs1{

    }
    .cs2{

    } */
</style>
