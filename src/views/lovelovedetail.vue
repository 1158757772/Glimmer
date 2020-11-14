<template>
<div>
  <van-tabs v-model="active" scrollspy sticky color="#000">
    <van-tab title="项目" >

    <g-swiper :perview="1" title="lovelovedetail_szh" v-if="imgList.length" :page="true">
        <div class="swiper-slide fistnav" v-for="item in imgList" :key="item">
          <img :src="item+'/500'" alt="">
        </div>
      </g-swiper>
      <section class="container">
      <h2>{{contenttitle}}</h2>
      <p>{{m_summary}}</p>
      <div class="po">
      <div v-html="desc" class="content_szh"  :class="open?'show':'hide'"></div>
      <div class="mask" v-if="!open"></div>
      <h4  class="switch_of_open" @click="open=!open">{{open?"收起 ↑":"查看更多 ↓"}}</h4>
      </div>
      </section>

      </van-tab>

      <van-tab title="进展" v-if="prolist">
        <section class="container">
          <h2>最新进展</h2>

          <div v-if="pubpro" class="pubpro">
              <h3 class="pubprotitle">{{pubprotitle}}<van-button  type="info" class="tb" size="mini" color="#dda43b" plain>机构发布</van-button></h3>
              <p class="pubprocontent">{{pubpro}}</p>
          </div>
          <div v-for="item in prolist" :key="item.id" class="proitem">

              <div class="proitem_head">
                  <h4>{{item.content_title |codetoString}}<van-button  type="info" class="tb" size="mini" color="#dda43b" plain v-if="item.content_title">深度进展</van-button> <span class="zan" @click="zan(item.id)"><van-icon :name="swid.includes(item.id)?'good-job':'good-job-o'"/>{{swid.includes(item.id)?item.likes+1:item.likes}}</span></h4>
                  <p>{{item.create_time*1000|tomonment}}</p>
              </div>

              <p class="proitem_content">
              {{item.desc | codetoString}}
              </p>

              <ul class="imgshow">
                <li v-for="(data,index) in item.attach" :key="index">
                  <img :src="data.syn_url | imgtoright" alt="">
                </li>
              </ul>

          </div>
          <div class="more" @click="more()">展开更多<van-icon name="arrow-down" /></div>
        </section>
      </van-tab>

      <van-tab title="机构" v-if="prolist" class="container jg">
         <h2>执行情况</h2>
         <dl>
           <dt>立项时间:</dt>
           <dd>{{jgcreatetime}}</dd>
         </dl>
         <dl>
           <dt>募捐编号:</dt>
           <dd>{{record_num}}<van-icon name="info-o" @click="show1=true"/></dd>
           <van-popup v-model="show1">请访问“慈善中国”网站，查询备案编号</van-popup>
         </dl>
         <dl>
           <dt>收款机构:</dt>
           <dd>{{fundName}}<van-icon name="info-o" @click="show2=true"/></dd>
           <van-popup v-model="show2"><h2>为什么善款接收 <br>必须是公募基金会？</h2><p>《慈善法》规定“不具有公开募捐资格的组织或者个人，不能公开募捐”，但基于慈善目的，可以与具有公开募捐资格的慈善组织合作，由该慈善组织开展公开募捐，接受和监管募得的款物。</p><p><span>温馨提示</span>微光公益在此只提供平台服务，用户捐赠的善款将直接存入接受善款的公募组织账户，不会进入微光公益。关于管理费，在法律法规确定的允许的范围内，发起方可以和公募组织共同协商管理费，微光公益不收取任何费用。</p></van-popup>
         </dl>
         <dl>
           <dt>执行机构:</dt>
           <dd>{{pName}}</dd>
         </dl>
         <dl style="height:100px">
           <dt>执行人：</dt>
           <dd>
             <h3>{{funder_name}} <span>{{funder_corp}}</span></h3>
             <p>{{funder_intro}}</p>
           </dd>
         </dl>
         <dl v-if="pl">
           <dt>财务批露:</dt>
           <dd>{{'三个月共进行'+pl+'次财务披露'}}</dd>
         </dl>
         <dl v-if="implement_res">
           <dt>执行效果:</dt>
           <dd>{{implement_res}}</dd>
         </dl>
         <div class="moreprocontent" v-if="moreprocontent_sw">
          <h3 v-if="proj_budget">项目预算</h3>
          <p v-html="proj_budget"></p>
          <h3 v-if="proj_exe_plan">执行计划</h3>
          <p v-html="proj_exe_plan"></p>
          <h3 v-if="proj_implement_res">执行效果</h3>
          <p v-html="proj_implement_res"></p>
          <h3 v-if="proj_exe_content">执行能力说明</h3>
          <p v-html="proj_exe_content"></p>
          <h3 v-if="proj_team_info">关于我们</h3>
          <p v-html="proj_team_info"></p>
          <h3 v-if="proj_donate_feedback">捐赠回馈</h3>
          <p v-html="proj_donate_feedback"></p>
          <h3 v-if="proj_invoice">发票说明</h3>
          <p v-html="proj_invoice"></p>
         </div>
         <div @click="moreprocontent_sw=!moreprocontent_sw" class="moreprocontent_sw">{{moreprocontent_sw?'收回↑':'更多↓'}}</div>
      </van-tab>

      <van-tab title="筹款" class="container gtmoney">
        <h2>项目筹款情况</h2>
        <div v-if="arhavemoney" class="com">已筹集公款:￥{{arhavemoney}}</div>
        <div v-else  class="nocom">
          <dl>
            <dt>
              <van-circle
                v-model="currentRate"
                :rate="rate"
                :clockwise="false"
                :text="rate+'%'"
                :color="gradientColor"
                :stroke-width="80"
                size="80px"
              />
            </dt>
            <dd>
              <dl>
                <dt>公众筹款目标:</dt>
                <dd>{{needMoney/100}}</dd>
              </dl>
              <dl>
                <dt>已收到捐款:</dt>
                <dd>{{algetmoney/100}}</dd>
              </dl>
              <dl>
                <dt>尚缺:</dt>
                <dd>{{nogetmoeny}}</dd>
              </dl>
            </dd>
          </dl>

        </div>
        <h3>{{moneytime}}次公众捐款记录</h3>
        <van-notice-bar scrollable text="本项目的捐款记录已被区块链永久保护" />
        <div class="together">
          <h4>{{peolemount}}人参与了一起捐</h4>
          <ul>
            <li v-for='item in asmuserdata' :key="item.did">
              <img :src="item.imgurl" alt="">
              <p>{{item.nick}}</p>
              <p>携手{{item.trec}}人</p>
            </li>
          </ul>
        </div>
        <ul class="moreusergive">
          <li v-for="(item,index) in moreusergive" :key="index">
            <span class="name">{{item.n}}</span>
            <span class="howmuch">捐出了{{(item.m/100)}}元</span>
            <span class="when">{{item.t | timeago}}</span>
          </li>
          <div @click="moreusergivegive">查看更多↓</div>
        </ul>
      </van-tab>

      </van-tabs>

</div>
</template>

<script>
import axios from 'axios'
import http from '@/util/http'
import gSwiper from '@/components/glimmerswiper-atplay'
import Vue from 'vue'
import moment from 'moment'
import { Icon, Button, Tab, Tabs, Popup, Circle, NoticeBar } from 'vant'

Vue.use(NoticeBar)
Vue.use(Circle)
Vue.use(Popup)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Icon)
Vue.filter('codetoString', function (code) {
  return decodeURI(code)
})
Vue.filter('imgtoright', function (path) {
  return 'http:' + path.replaceAll('%2F', '/') + '180'
})
Vue.filter('tomonment', function (time) {
  return moment(time).format('YYYY年MM月DD日由项目工作人员发布')
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
  data () {
    return {
      detailId: this.$route.params.Id,
      detailType: this.$route.params.Type,
      imgList: [],
      contenttitle: '',
      m_summary: '',
      desc: '',
      open: false,
      curr: 1,
      prolist: [],
      pubpro: '',
      pubprotitle: '',
      swid: [],
      currentRate: 0,
      sw: true,
      active: 0,
      jgcreatetime: '',
      show1: false,
      show2: false,
      fundName: '',
      pName: '',
      funder_face: '',
      funder_name: '',
      funder_corp: '',
      funder_intro: '',
      pl: '',
      implement_res: '',
      record_num: '',
      proj_budget: '',
      proj_exe_plan: '',
      proj_implement_res: '',
      proj_exe_content: '',
      proj_team_info: '',
      proj_donate_feedback: '',
      proj_invoice: '',
      moreprocontent_sw: false,
      needMoney: '',
      algetmoney: '',
      nogetmoeny: '',
      arhavemoney: '',
      rate: 30,
      gradientColor: {
        '0%': '#dda43b',
        '100%': '#000'
      },
      moneytime: '',
      peolemount: '',
      asmuserdata: [],
      moreusergive: [],
      moremoregive: [],
      giveindex: 0,
      startTime: '',
      proinfo: '',
      protime: '',
      profinance: '',
      giveinfo: '',
      giveimg: ''
    }
  },
  components: {
    gSwiper
  },
  mounted () {
    this.$store.commit('closeFootBar')
    this.$store.commit('openGiveFootBar')

    let doId
    if (parseInt(this.detailId.toString().substring(this.detailId.toString().length - 2, this.detailId.toString().length - 1)) !== 0) {
      doId = this.detailId.toString().substring(this.detailId.toString().length - 2, this.detailId.toString().length)
    } else {
      doId = this.detailId.toString().substring(this.detailId.toString().length - 1, this.detailId.toString().length)
    }
    http({ url: `/${this.detailType}/${doId}/detail.${this.detailId}.json` }).then(res => {
      if (this.detailType === 'data_detail') {
        if (res.data.base.img_mob_list) {
          this.imgList = res.data.base.img_mob_list
        } else {
          this.imgList = res.data.base.img_list
        }
        this.contenttitle = res.data.base.title
        this.m_summary = res.data.base.m_summary
        this.desc = res.data.detail.desc
        this.startTime = res.data.base.startTime
        this.jgcreatetime = res.data.base.launch_time
        this.record_num = res.data.base.record_num
        this.fundName = res.data.base.fundName
        this.pName = res.data.base.pName
        this.funder_face = res.data.detail.desc_module.funder_face
        this.funder_name = res.data.detail.desc_module.funder_name
        this.funder_corp = res.data.detail.desc_module.funder_corp
        this.funder_intro = res.data.detail.desc_module.funder_intro
        this.giveinfo = res.data.base.ext_donate.nm
        this.giveimg = res.data.base.listImg + '/200'
        if (res.data.base.implement_res && res.data.base.count) {
          this.proinfo = res.data.base.implement_res
          this.protime = '3个月内共进展' + res.data.base.count.process + '次'
          this.profinance = '2019年至今共进行' + res.data.base.count.finance + '次财务披露'
        } else {
          this.proinfo = '已提交善款执行预算'
          this.protime = '已提交项目执行计划'
          this.profinance = '未进入执行披露期'
        }

        if (res.data.base.count) {
          this.pl = res.data.base.count.process
        }
        this.implement_res = res.data.base.implement_res
        this.proj_budget = res.data.detail.desc_module.proj_budget
        this.proj_exe_plan = res.data.detail.desc_module.proj_exe_plan
        this.proj_implement_res = res.data.detail.desc_module.proj_implement_res
        this.proj_exe_content = res.data.detail.desc_module.proj_exe_content
        this.proj_team_info = res.data.detail.desc_module.proj_team_info
        this.proj_donate_feedback = res.data.detail.desc_module.proj_donate_feedback
        this.proj_invoice = res.data.detail.desc_module.proj_invoice
        this.needMoney = res.data.base.needMoney
        // console.log(this.needMoney)
        if (parseInt(res.data.base.needMoney) === 0) {
          axios.get(`/cgi-bin/ProjInfoQuery.fcgi?id=${this.detailId}&type=proj_mini_stat&is_parent=1`).then(res => {
            this.arhavemoney = (res.data.msg.stat.children_money + res.data.msg.stat.recvedMoney) / 100
            this.moneytime = res.data.msg.stat.children_times + res.data.msg.stat.self_times
            this.peolemount = res.data.msg.stat.YqjJoinPeople + res.data.msg.stat.YqjSponsorPeople
          })
        } else {
          axios.get(`/cgi-bin/ProjInfoQuery.fcgi?id=${this.detailId}&type=proj_mini_stat&is_parent=1`).then(res => {
            this.algetmoney = res.data.msg.stat.recvedMoney
            this.nogetmoeny = (this.needMoney - this.algetmoney) / 100
            this.rate = ((this.algetmoney / this.needMoney) * 100).toFixed(2)
            this.moneytime = res.data.msg.stat.children_times + res.data.msg.stat.self_times
            this.peolemount = res.data.msg.stat.YqjJoinPeople + res.data.msg.stat.YqjSponsorPeople
          })
        }

        if (res.data.detail.endReport) {
          this.pubpro = res.data.detail.endReport.summary
          this.pubprotitle = res.data.detail.endReport.title
        }
      } else if (this.detailType === 'sub_data_detail') {
        if (res.data.msg.base.img_mob_list) {
          this.imgList = res.data.msg.base.img_mob_list
        } else {
          this.imgList = res.data.msg.base.img_list
        }
        this.contenttitle = res.data.msg.base.title
        this.m_summary = res.data.msg.base.summary
      }
      this.$store.commit('createOpenCard', {
        popuptitle: this.contenttitle,
        popupaccept: this.fundName,
        popupdo: this.pName,
        startTime: this.startTime,
        proinfo: this.proinfo,
        protime: this.protime,
        profinance: this.profinance,
        giveinfo: this.giveinfo,
        giveimg: this.giveimg

      })
    })
    axios.get(`/cgi-bin/WXUnprocessV2?pid=${this.detailId}&row=2&curr=${this.curr}&soid=0`).then(res => {
      this.prolist = res.data.info.list
    })
    axios.get(`/cgi-bin/gywcom_1999_qry_yqj_list_project?pid=${this.detailId}&page=1`).then(res => {
      this.asmuserdata = res.data.data.yqj_list
    })
    axios.get(`/cgi-bin/gywcom_proj_trans_query_ch?pid=${this.detailId}&type=home`).then(res => {
      this.moreusergive = res.data.data.trans
    })
  },
  destroyed () {
    this.$store.commit('openFootBar')
    this.$store.commit('closeGiveFootBar')
  },

  methods: {
    zan (id) {
      this.swid.push(id)
    },
    more () {
      this.curr++
      // console.log(this.curr)
      axios.get(`/cgi-bin/WXUnprocessV2?pid=${this.detailId}&row=2&curr=${this.curr}&soid=0`).then(res => {
        this.prolist = [...this.prolist, ...res.data.info.list]
      })
    },
    moreusergivegive () {
      if (!this.moremoregive.length) {
        axios.get(`/cgi-bin/gywcom_proj_trans_query_ch?pid=${this.detailId}&type=detail`).then(res => {
          this.moremoregive = res.data.data.trans
          this.moreusergive = [...this.moreusergive, this.moremoregive[this.giveindex], this.moremoregive[this.giveindex + 1], this.moremoregive[this.giveindex + 2]]
        })
      } else {
        this.giveindex = this.giveindex + 3
        this.moreusergive = [...this.moreusergive, this.moremoregive[this.giveindex], this.moremoregive[this.giveindex + 1], this.moremoregive[this.giveindex + 2]]
      }
    }
  }
}
</script>

<style lang="scss">
.container{
    width: 95%;
    margin-left: 2.5%;
}
.lovelovedetail_szh{
    width: 100%;
    height: 400px;
    overflow: hidden;

}
h2{
   font-weight: 400;;
}
h2{
    font-size: 28px;
    padding: 10px 0;
    margin-bottom: 10px;
}
.show{
    height: auto;
}
.hide{
    height: 600px;
    overflow: hidden;
    position: relative;

}
.po{
    position: relative;
    .mask{
        background: linear-gradient(rgba(255, 255, 255, 0),rgb(255, 255, 255,1));
        position: absolute;
        bottom: 50px;
        height: 30px;
        width: 100%;
        z-index: 66;
    }
}

.switch_of_open{
    height: 50px;
    font-size: 16px;

    text-align: center;
    line-height: 50px;
}

.content_szh{
        width: 100%;
        color: #3c5a6e;
        img{
            display: inline-block;
            width: 90%;
            margin: 20px 5%;
        }
        h3{
                font-size: 18px;
                padding: 5px 0;
                font-weight: 400;
                p,b{
                    font-size: 16px;
                    line-height: 30px;
                    font-weight: 400;

                }
            }
    }

.pubpro{
    .pubprotitle{
        font-size: 16px;
        font-weight: 400;
        padding: 10px 0;

    }
    .pubprocontent{
        margin-top: 10px;
        line-height: 30px;
        color: #3c5a6e;
        font-size: 18px;
        height: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
    }
}
.tb{

    margin-left: 5px;
  }
.zan{
  float:right;
  margin-right: 5px;
}
.proitem{
    border-top: 1px solid #ccc;
    padding-bottom: 10px;
    .proitem_head{
        h4{
            padding: 5px 0;
            font-size: 16px;
            font-weight: 400;
            margin-top: 10px;
        }
        p{
           color: #607d8b;
           font-size:16px ;
           margin-top: 5px;
        }

    }
    .proitem_content{
        margin-top: 10px;
        line-height: 30px;
        color: #3c5a6e;
        font-size: 18px;
        height: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;

    }
    .imgshow{
          height: 130px;
          overflow: hidden;
          li{
            float: left;
            padding-left: 2%;
            width: 31.3%;
            padding-bottom: 50px;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
  .more{
    margin-top: 20px;
    text-align: center;
  }
}

.jg{
  h2{
      font-size: 28px;
      padding: 10px 0;
      margin-bottom: 10px;
      font-weight: 400;
  }
  dl{
    width: 100%;
    height: 25px;
    dt{
      float: left;
      height: 100%;
      width: 30%;
    }
    dd{
      width: 70%;
      height: 100%;
      float: right;
      h3{
        font-size: 16px;
        font-weight: 400;
        span{
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
}
.moreprocontent{
  margin-top: 50px;
  width: 100%;
  h3{
    font-weight: 400;
    font-size: 20px;
    padding: 10px 0;
    margin-top: 10px;
  }
  img{
    width: 90%;
    margin:5px 5%;
    color: #3c5a6e;
  }
}
.moreprocontent_sw{
  text-align: center;
  width: 100%;
  margin-top: 50px;
}
.gtmoney{
  padding-bottom: 100px;
  .com,.nocom,.together{
    background:whitesmoke;
    border-radius: 5px;
    clear: both;
    padding: 5px 0;
  }
  .nocom{
    width: 100%;
    height: 100px;
    dl{
      height: 100%;
      dt{
        float: left;
        width: 30%;
        .van-circle{
          margin-left: 5px;
          margin-top: 5px;
        }
      }
      dd{
        float: right;
        width: 70%;
        dl{
          height: 20px;
          line-height: 20px;
          padding: 5px 0;
          dt{
            width: 40%;
          }
          dd{
            width: 60%;;
          }
        }
      }
    }
  }
  h3{
      font-size: 24px;
      padding: 10px 0;
      margin-bottom: 10px;
      font-weight: 400;
      margin-top: 30px;
  }
}
.together{
  margin-top: 10px;
  h4{
      font-size: 22px;
      padding: 10px 0;
      margin-bottom: 10px;
      font-weight: 400;
      text-align: center;
  }
  ul{
    margin-top: 30px;
    height: 100px;
    padding-bottom: 10px;
    li{
      float: left;
      width: 33.3%;
      text-align: center;
      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: inline-block;
      }
    }
  }
}
.moreusergive{
  width: 100%;
    li{
      width: 100%;
      height: 40px;
      line-height: 40px;
      .howmuch{
        color: #3c5a6e;
        font-size: 8px;
      }
      .when{
        float: right;
      }
    }
}
</style>
