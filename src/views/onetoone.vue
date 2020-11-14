<template>
  <div id="onetoone">
      <header>
        <p>一对一定向结对</p>
        <p>做彼此的<span>专属天使</span></p>
        <p>已有139.967受助者得到结对支持</p>
      </header>
      <main>
        <div class="longevity">
          <h3 @click="titleClick">
            本周寿星
            <van-icon class="icon" name="arrow" />
          </h3>
          <onetooneSwiper  myname='young' v-if="longevityList">
            <div class="swiper-slide" v-for="item in longevityList" :key="item.plan_id" @click="handleClick(item.projid)">
              <dl class="person">
                <dt>
                  <img v-if="item.head != ''" :src="item.head | headFilter">
                  <img v-else src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3950359295,879559074&fm=11&gp=0.jpg">
                </dt>
                <dd>
                  <h4>{{item.name}}</h4>
                  <p>
                    我来自{{item.addr1}},
                    兴趣是{{item.interest}},
                    心愿是{{item.wish}}
                  </p>
                </dd>
              </dl>
              <dl class="texture">
                <dt>
                  <img :src="item.fundImg">
                </dt>
                <dd>
                  <p>{{item.eOrgName}}</p>
                  <p>【{{item.projname}}】支持TA{{item.aid_intro}}￥{{item.aid_amount / 100}}</p>
                </dd>
              </dl>
            </div>
          </onetooneSwiper>
        </div>
        <div class="longevity">
          <h3 @click="titleClick">
            寻找老乡
            <van-icon class="icon" name="arrow" />
          </h3>
          <onetooneSwiper  myname='old' v-if = "oldList">
            <div class="swiper-slide"  v-for="item in oldList" :key="item.plan_id" @click="handleClick(item.projid)">
              <dl class="person">
                <dt>
                  <img v-if="item.head != ''" :src="item.head">
                  <img v-else src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3950359295,879559074&fm=11&gp=0.jpg">
                </dt>
                <dd>
                  <h4>{{item.name}}</h4>
                  <p>我来自{{item.addr1}},兴趣是{{item.interest}},心愿是{{item.wish}}</p>
                </dd>
              </dl>
              <dl class="texture">
                <dt>
                  <img :src="item.fundImg">
                </dt>
                <dd>
                  <p>{{item.eOrgName}}</p>
                  <p>【{{item.projname}}】支持TA{{item.aid_intro}}￥{{item.aid_amount / 100}}</p>
                </dd>
              </dl>
            </div>
          </onetooneSwiper>
        </div>
        <van-list
          class="all"
          v-model="loading"
          :finished="finished"
          :immediate-check="true"
          finished-text="已加载所有项目"
          @load="onLoad"
        >
          <h3>全部项目</h3>
          <van-cell v-for="data in datalist" :key="data.id" @click="allClick(data.id)">
            <img :src="data.listImg | imgFilter">
            <div>
              <strong>{{data.title}}</strong>
              <p>{{data.summary}}</p>
            </div>
          </van-cell>
        </van-list>
      </main>
  </div>
</template>

<script>
import onetooneSwiper from './onetoone/onetooneSwiper'

import axios from 'axios'
import Vue from 'vue'

import { List, Cell, Icon } from 'vant'

Vue.use(List).use(Cell).use(Icon)

Vue.filter('imgFilter', (img) => {
  return img + '/100'
})

Vue.filter('headFilter', (head) => {
  return 'https:' + head
})

export default {
  components: {
    onetooneSwiper
  },
  computed: {
    longevityList () {
      // console.log(this.list);
      return this.list[0]
    },
    oldList () {
      return this.list[4]
    }
  },
  data () {
    return {
      list: [],
      datalist: [],
      num: 1,
      finished: false,
      loading: false,
      totnum: 0
    }
  },
  methods: {
    onLoad () {
      if (this.datalist.length === 0) {
        this.loading = false
        return
      }

      if (this.datalist.length >= this.totnum) {
        this.finished = true

        return
      }
      // console.log(this.datalist.length,this.totnum);
      this.num++

      axios.get(`/cgi-bin/Search1v1.fcgi?pt=1&p=${this.num}&limit=5`)
        .then(res => {
        // console.log(res.data.plist);
          this.datalist = [...this.datalist, ...res.data.plist]

          this.loading = false
        })
    },
    handleClick (id) {
      // console.log(id)

      this.$router.push(`/onetooneDetails/${id}`)
    },
    titleClick () {
      this.$router.push('/titleDetails')
    },
    allClick (allId) {
      // console.log(allId)

      this.$router.push(`/allDetails/${allId}`)
    }
  },
  mounted () {
    axios({
      url: '/cgi-bin/gywcom_1V1HelpFilterCondition.fcgi?tag=1',
      headers: {
        'content-type': 'application/json'
      },
      method: 'post',
      data: [
        { type: '1', birthday: '11,8,11,14' },
        { type: '1', birthday: '11,1,11,30' },
        { type: '1', search_way: '1' },
        { type: '1', search_way: '1', birthday: '10,24,11,22' },
        { type: '1', search_way: '0' }
      ]
    })
      .then(res => {
        // console.log(res.data.data.list)
        this.list = res.data.data.list
      })
    axios.get('/cgi-bin/Search1v1.fcgi?pt=1&p=1&limit=5')
      .then(res => {
      // console.log(res.data.plist);
        this.datalist = res.data.plist

        this.totnum = res.data.totnum
      // console.log(this.totnum);
      })
  }
}
</script>

<style scoped>
  #onetoone{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  header{
    height: 20%;
    background-image: url(https://mat1.gtimg.com/gongyi/1v1/index/index-bannerbg.png);
    background-size: cover;
    padding: 3%;
    position: sticky;
    left: 0; top: 0;
    z-index: 100;
  }
  header p:nth-child(1),header p:nth-child(2){
    font-size: 20px;
    line-height: 36px;
  }
  header p:nth-child(3){
    font-size: 15px;
    line-height: 36px;
  }
  header span{
    color: #f00;
  }
  main{
    flex: 1;
  }
  .icon{
    vertical-align: middle;
  }
  .longevity{
    padding: 3%;
  }
  .longevity h3{
    line-height: 50px;
  }
  .swiper-slide{
    background: #eee;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .person,.texture{
    display: flex;
    justify-content: space-around;
  }
  .person dt{
    margin-right: 10px;
  }
  .person dt img{
    width: 80px;
    height: 100px;
  }
  .person dd h4{
    line-height: 30px;
  }
  .person dd p{
    line-height: 20px;
    font-size: 12px;
  }
  .texture{
    margin-top: 10px;
  }
  .texture img{
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .texture p{
    line-height: 20px;
    font-size: 12px;
  }
  .all h3{
    line-height: 30px;
    margin-left: 10px;
  }
  .all img{
    height: 100px;
    margin-right: 10px;
    float: left;
  }
  .all p{
    line-height: 20px;
    font-size: 13px;
    margin-top: 10px;
  }
</style>
