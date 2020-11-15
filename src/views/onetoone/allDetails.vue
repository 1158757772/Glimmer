<template>
  <div id="allDetails">
      <div class="allInstitutionZyk" v-if="allInfo">
          <img :src="allInfo.base.listImg | listImgFilter">
          <div>
              <h2>{{allInfo.base.title}}</h2>
              <p>{{allInfo.base.summary}}</p>
              <p>
                  <van-icon class="icon" name="friends" color='blue' size='20px' />
                  已结对{{allInfo.p_1v1.donate}}名，待结对{{allInfo.p_1v1.usable}}名
              </p>
          </div>
      </div>
      <div class="studentZyk" v-if="allList.length">
          <h3>等待最久的学生</h3>
          <onetooneSwiper myname="all">
              <div class="swiper-slide allswiper" v-for="item in allList" :key="item.plan_id" @click="handleClick(item.projid)">
                <dl>
                  <dt>
                    <img :src="item.head">
                  </dt>
                  <dd>
                    <h4>{{item.name}}</h4>
                    <p>我来自{{item.addr1}}</p>
                  </dd>
                </dl>
              </div>
          </onetooneSwiper>
      </div>
      <div class="planZyk" v-if="allInfo">
          <h3>项目介绍</h3>
          <div class="whyZyk" :class="isHidde ? '' : 'hiddeZyk'" v-html="allInfo.detail.desc"></div>
          <p v-if="isHidde" class="showZyk" @click="isHidde = false">
              <van-icon name="arrow-up" />
              收起部分内容
          </p>
          <p v-else class="showZyk" @click="isHidde = true">
              <van-icon name="arrow-down" />
              展开全文
          </p>
      </div>
      <div class="jigouInfo" v-if="allInfo">
          <h3>机构信息</h3>
          <div>
              <img :src="allInfo.detail.pUserFace.syn_url | listImgFilter">
              <span>慈善机构：</span>
              <p>{{allInfo.base.fundName}}</p>
          </div>
          <div>
              <img :src="allInfo.detail.pUserFace.syn_url | listImgFilter">
              <span>善款接收机构：</span>
              <p>{{allInfo.base.fundShortName}}</p>
          </div>
      </div>
      <div class="successZyk" v-if="allInfo">
          <h3>成功案例</h3>
          <div v-for="(info , index) in allInfo.detail.ext_1v1.desc" :key="index">
              <img :src="info.img">
              <p>{{info.aided_nm}}</p>
              <section v-html="info.intro"></section>
          </div>
      </div>
      <div class="loveZyk">
          <h3>爱心流水</h3>
          <div v-for="(love, index) in loveList" :key="index">
              <img v-if="love.h != ''" :src="love.h">
              <img v-else src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3950359295,879559074&fm=11&gp=0.jpg">
              <p>{{love.n}} 捐出
                  <strong>{{love.m / 100}}</strong> 元
                  <i>{{love.t | timeago}}</i>
              </p>
          </div>
          <span @click="lovemoreClick">
              <van-icon name="arrow-down" style="float:none" />
              展开更多爱心流水
          </span>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Icon, List, Cell } from 'vant'

import onetooneSwiper from './onetooneSwiper'

Vue.use(Icon).use(List).use(Cell)

Vue.filter('listImgFilter', (img) => {
  return img + '/100'
})

Vue.filter('timeago', function (time) {
  if (time >= 60 && time < 3600) {
    return Math.floor(time / 60) + '分钟前'
  } else if (time >= 3600) {
    return Math.floor(time / 3600) + '小时前'
  } else {
    return time + '秒前'
  }
})

export default {
  components: {
    onetooneSwiper
  },
  data () {
    return {
      allInfo: null,
      allList: [],
      isHidde: false,
      loveList: [],
      loveMorelist: [],
      loveIndex: 0
    }
  },
  methods: {
    lovemoreClick () {
      // console.log(this.loveMorelist.length);
      if (!this.loveMorelist.length) {
        axios.get(`/cgi-bin/gywcom_proj_trans_query_ch?pid=${this.$route.params.id}&type=detail`)
          .then(res => {
            this.loveMorelist = res.data.data.trans
            this.loveList = [...this.loveList, this.loveMorelist[this.loveIndex], this.loveMorelist[this.loveIndex + 1], this.loveMorelist[this.loveIndex + 2]]
          })
      } else {
        this.loveIndex = this.loveIndex + 3
        this.loveList = [...this.loveList, this.loveMorelist[this.loveIndex], this.loveMorelist[this.loveIndex + 1], this.loveMorelist[this.loveIndex + 2]]
      }
    },
    handleClick (id) {
      // console.log(id);

      this.$router.push(`/onetooneDetails/${id}`)
    }
  },
  mounted () {
    this.$store.commit('closeFootBar')
    this.$store.commit('openGiveFootBar')
    // console.log(this.$route.params.id)
    axios.get(`/cgi-bin/ProjInfoQuery.fcgi?type=proj&id=${this.$route.params.id}`)
      .then(res => {
        console.log(this.$route.params.id)
        console.log(res.data.msg)

        this.allInfo = res.data.msg
      })
    axios({
      url: '/cgi-bin/gywcom_1V1HelpFilterCondition.fcgi?tag=',
      method: 'post',
      headers: {
        'content-type': 'text/json-p'
      },
      data: [
        { search_way: '1', projid: this.$route.params.id }
      ]
    })
      .then(res => {
        // console.log(res.data.data.list);

        this.allList = res.data.data.list[0]
      })
    axios.get(`/cgi-bin/gywcom_proj_trans_query_ch?pid=${this.$route.params.id}&type=home`)
      .then(res => {
        //   console.log(res.data.data.trans)

        this.loveList = res.data.data.trans
      })
  },
  destroyed () {
    this.$store.commit('openFootBar')
    this.$store.commit('closeGiveFootBar')
  }
}
</script>

<style>
    #allDetails{
        background: #eee;
    }
    .allInstitutionZyk{
        background: #fff;
        margin-bottom: 20px;
    }
    .allInstitutionZyk img{
        width: 100%;
    }
    .allInstitutionZyk div{
        padding: 10px;
    }
    .allInstitutionZyk p{
        line-height: 26px;
        margin-top: 10px;
    }
    .allInstitutionZyk .icon{
        vertical-align: middle;
    }
    .studentZyk{
        padding: 20px 0;
        background: #fff;
        margin-bottom: 20px;
    }
    .studentZyk h3{
        border-left: 6px solid orangered;
        padding: 0 10px;
        margin-bottom: 20px;
    }
    .allswiper{
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
    }
    .allswiper dl{
        height: 100px;
        background: #eee;
        border-radius: 20px;
        padding: 10px;
        display: flex;

    }
    .allswiper dt{
        width: 100px;
        margin-right: 20px;
    }
    .allswiper dt img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: block;
    }
    .allswiper dd{
        line-height: 30px;
        margin: auto 0;
    }
    .planZyk{
        background: #fff;
        padding: 20px 0;
        margin-bottom: 20px;
    }
    .planZyk h3{
        border-left: 6px solid orangered;
        padding: 0 10px;
        margin-bottom: 20px;
    }
    .whyZyk{
        padding: 0 10px;
    }
    .whyZyk h3{
        border: 0;
        padding: 0;
        margin: 0;
        font-size: 16px;
        color: orangered;
    }
    .whyZyk p{
        line-height: 26px;
        text-align: justify;
        padding: 10px 0;
    }
    .whyZyk img{
        width: 100%;
    }
    .hiddeZyk{
        height: 1000px;
        overflow: hidden;
    }
    .showZyk{
        text-align: center;
        color: #00f;
    }
    .jigouInfo{
        padding: 20px 0;
        background: #fff;
        margin-bottom: 20px;
    }
    .jigouInfo h3{
        border-left: 6px solid orangered;
        padding: 0 10px;
    }
    .jigouInfo div{
        padding: 0 10px;
        line-height: 28px;
        margin-top: 20px;
    }
    .jigouInfo img{
        height: 50px;
        margin-right: 30px;
        float: left;
        display: block;
    }
    .successZyk{
        padding: 20px 0;
        background: #fff;
        margin-bottom: 20px;
    }
    .successZyk h3{
        border-left: 6px solid orangered;
        padding: 0 10px;
        margin-bottom: 20px;
    }
    .successZyk div{
        padding: 0 10px;
        clear: both;
    }
    .successZyk img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 20px;
        float: left;
    }
    .successZyk p{
      line-height: 26px;
    }
    .successZyk section{
      margin-bottom: 20px;
    }
    .successZyk section h3,.successZyk section img,.successZyk section p{
        display: none;
    }
    .successZyk section p:nth-of-type(2){
      font-size: 12px;
      display: block;
      overflow:hidden;
      text-overflow:ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
    .loveZyk{
        padding: 20px 0;
        background: #fff;
        margin-bottom: 100px;
    }
    .loveZyk h3{
        border-left: 6px solid orangered;
        padding: 0 10px;
    }
    .loveZyk div{
        height: 26px;
        line-height: 26px;
        padding: 0 10px;
        margin: 20px 0;
    }
    .loveZyk img{
        height: 100%;
        border-radius: 50%;
        margin-right: 20px;
        float: left;
        display: block;
    }
    .loveZyk strong{
        color: orangered;
    }
    .loveZyk p{
      font-size: 12px;
    }
    .loveZyk span{
        text-align: center;
        display: block;
    }
    .loveZyk i{
        float: right;
        margin-right: 10px;
    }
</style>
