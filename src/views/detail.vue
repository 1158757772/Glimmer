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
      loading: false,
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
    axios.get('/json/C_json.json').then(res => {
      var myid = this.$route.params.myid
      if (this.$route.params.myid === myid) {
        this.list = res.data[myid]
        console.log(this.$route.params.myid, res.data)
      }
    })
    axios.get(
      `/cgi-bin/gywcom_gy_filter?page=0&pcnt=6&ranktype=time&pstatus=active&ptype=${this.C_id}`

    ).then(res => {
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
    .cs0{
      display: flex;
      justify-content: center;
    }
    /* .cs1{

    }
    .cs2{

    } */
</style>
