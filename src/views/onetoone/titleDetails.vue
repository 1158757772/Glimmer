<template>
  <div id="titleDetails" v-if="titleList.length">
      <van-nav-bar
        title="为您展示符合条件的受助者"
        left-text="返回"
        right-text="按钮"
        left-arrow
        fixed
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <van-icon name="bars" size="18px"/>
        </template>
      </van-nav-bar>
      <div class="box" v-for="item in titleList" :key="item.plan_id">
        <dl class="person">
          <dt>
            <img v-if="item.head != ''" :src="item.head">
            <img v-else src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3950359295,879559074&fm=11&gp=0.jpg">
          </dt>
          <dd>
            <h4>{{item.name}}</h4>
            <p>
              我来自{{item.addr1}},
              <span v-if="item.interest">兴趣是{{item.interest}},</span>
              <span v-if="item.wish">心愿是{{item.wish}}</span>
              <span v-else>心愿是{{item.aid_intro}}</span>
            </p>
          </dd>
        </dl>
        <div class="info">{{item.intro}}</div>
        <dl class="texture">
          <dt>
            <img :src="item.fundImg">
          </dt>
          <dd>
            <p>{{item.eOrgName}}</p>
            <p>【{{item.projname}}】支持TA{{item.aid_intro}}￥{{item.aid_amount / 100}}</p>
          </dd>
        </dl>
        <button v-if="item.wish">和{{item.name}}结对</button>
        <div class="btn" v-else>
          <button class="left">发一起捐</button>
          <button>和TA结对</button>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { NavBar } from 'vant'

Vue.use(NavBar)

export default {
  data () {
    return {
      titleList: []
    }
  },
  mounted () {
    this.$store.commit('closeFootBar')
    axios({
      url: '/cgi-bin/gywcom_1V1HelpFilterCondition.fcgi?tag=',
      headers: {
        'content-type': 'application/json'
      },
      method: 'post',
      data: [
        { birthday: '11,8,11,14', province: '', constellation: '', sex: '', age: '', search_way: '', projid: '' }
      ]
    })
      .then(res => {
        this.titleList = res.data.data.list[0]
        // console.log(res.data.data.list[0])
      })
  },
  methods: {
    onClickLeft () {
      // console.log('left')

      this.$router.back()
    },
    onClickRight () {
      // console.log('right')

      this.$router.push('/fitrate')
    },
    runClick (id) {
      this.$router.push(`/allDetails/${id}`)
    }
  },
  destroyed () {
    this.$store.commit('openFootBar')
  }
}
</script>

<style scoped>
  #titleDetails{
    background: #eee;
  }
  .box{
    background: #fff;
    margin: 46px 20px;
    padding: 10px;
  }
  .person,.texture{
    display: flex;
    justify-content: space-between;
  }
  .person dt{
    margin-right: 10px;
  }
  .person dt img{
    width: 80px;
    height: 100px;
  }
  .person dd h4{
    line-height: 26px;
  }
  .person dd p{
    line-height: 20px;
    font-size: 12px;
    overflow:hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
  .info{
    text-align: justify;
    line-height: 26px;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
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
  .box button{
    width: 100%;
    height: 50px;
    background: orangered;
    color: white;
    border-radius: 25px;
    border: 0;
    outline: none;
    text-align: center;
    margin: 10px 0;
  }
  .btn{
    display: flex;
    justify-content: space-between;
  }
  .btn .left{
    background: white;
    color: orangered;
    border: 1px solid orangered;
    margin-right: 20px;
  }
</style>
