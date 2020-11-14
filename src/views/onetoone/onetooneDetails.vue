<template>
  <div>
        <van-nav-bar
          class="navZyk"
          title="个人信息页"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
        />
        <div class="personZyk">
            <dl>
                <dt>
                  <img v-if="message.head = ''" :src="message.head">
                  <img v-else src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3950359295,879559074&fm=11&gp=0.jpg">
                </dt>
                <dd>
                  <h3>{{message.name}}</h3>
                  <p>
                    我来自{{message.addr1}},
                    <span v-if="message.interest">兴趣是{{message.interest}},</span>
                    <span v-if="message.wish">心愿是{{message.wish}}</span>
                  </p>
                </dd>
              </dl>
              <div v-if="message.intro">{{message.intro}}</div>
              <div v-if="message.teache_evaluation">教师评语：{{message.teache_evaluation}}</div>
        </div>
        <div class="titleZyk" v-if="info">
            <h3>【{{info.base.title}}】</h3>
            <p>{{info.base.summary}}</p>
            <p>
                <van-icon class="icon" name="friends" color='blue' size='20px' />
                已结对{{info.p_1v1.donate}}名，待结对{{info.p_1v1.usable}}名
            </p>
            <div class="detailZyk" v-show="isShow" v-html="info.detail.desc"></div>
            <span v-if="isShow"  @click="isShow = false">
                收起详情
                <van-icon name="arrow-up" />
            </span>
            <span v-else @click="isShow = true">
                展开项目详情
                <van-icon name="arrow-down" />
            </span>
        </div>
        <div class="institutionZyk" v-if="info">
            <h3>执行机构信息</h3>
            <p>备案号：{{info.base.record_num}}</p>
            <p>收款机构：{{info.base.pName}}</p>
            <p>执行机构：{{info.base.pName}}</p>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Icon, NavBar } from 'vant'

Vue.use(Icon).use(NavBar)

export default {
  data () {
    return {
      info: null,
      isShow: false,
      message: {}
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  },
  mounted () {
    this.$store.commit('closeFootBar')
    this.$store.commit('openGiveFootBar')
    axios.get(`/cgi-bin/ProjInfoQuery.fcgi?id=${this.$route.params.id}&type=proj`)
      .then(res => {
        // console.log(res.data.msg);

        this.info = res.data.msg
      })
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

        // res.data.data.list.forEach(item => {
        //     // item.forEach(info => {

        //     // })
        // });
        for (var i = 0; i < res.data.data.list.length; i++) {
          for (var n = 0; n < res.data.data.list[i].length; n++) {
            // console.log(res.data.data.list[i][n].projid);
            if (res.data.data.list[i][n].projid === this.$route.params.id) {
              this.message = res.data.data.list[i][n]
            }
          }
        }
        console.log(this.message)
      })
  },
  destroyed () {
    this.$store.commit('openFootBar')
    this.$store.commit('closeGiveFootBar')
  }
}
</script>

<style>
    .navZyk{
        background: #eee;
        position: sticky;
        top: 0; left: 0;
    }
    .personZyk{
        padding: 10px;
        box-sizing: border-box;
    }
    .personZyk dl{
      display: flex;
      justify-content: space-around;
    }
    .personZyk dt{
        width: 30%;
    }
    .personZyk dt img{
        width: 100%;
        display: block;
    }
    .personZyk dd{
        width: 60%;
    }
    .personZyk dd h3{
        margin-bottom: 10px;
    }
    .personZyk dd p{
        line-height: 26px;
        overflow:hidden;
        text-overflow:ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
    .personZyk div{
        margin: 20px 0;
        line-height: 30px;
        text-align: justify;
        color: #666;
        background: skyblue;
        padding: 10px;
        border-radius: 20px;
    }
    .titleZyk,.institutionZyk{
        padding: 10px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }
    .titleZyk h3,.institutionZyk h3{
        line-height: 36px;
    }
    .titleZyk p,.institutionZyk p{
        line-height: 26px;
    }
    .titleZyk span{
        line-height: 50px;
        font-size: 13px;
        color: #aaa;
    }
    .icon{
        vertical-align: middle;
    }
    .detailZyk{
        width: 100%;
    }
    .detailZyk p{
        line-height: 26px;
        text-align: justify;
        margin: 10px 0;
    }
    .detailZyk img{
        width: 100%;
    }
</style>
