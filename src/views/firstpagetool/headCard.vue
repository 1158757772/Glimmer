<template>
  <div class="headcard">
      <div class="headcard_head">
          <img src="http://mat1.gtimg.com/gongyi/home/flower_avatar.png" alt="">
          <h3>你好有爱的你<br>今天想帮助谁呢？</h3>
      </div>
      <div class="headcard_foot">
      <div v-for="data in datalist" :key="data.id" class="headcard_bar" is-link    @click="showPopup(data.id)">
        <div class="target">{{data.target}}</div>
        <div class="wording">{{data.wording}}</div>
      </div>
      </div>
      <van-popup v-model="show" closeable close-icon-position="top-right">

        <div class="popup_head">
          <h2>微光公益透明度提示：</h2>
          <h3>微光公益打造透明公益平台，每个人都是一束微光</h3>
        </div>
        <div class="popup_foot">
         <van-button color="linear-gradient(to right, #000,  rgb(221, 164, 59))"  class="left-btn">了解更多项目信息</van-button>
          <van-button color="linear-gradient(to left, #000,  rgb(221, 164, 59))" class="right-btn" @click="give">
            我已知情，继续捐赠
          </van-button>
        </div>
        <div class="popupdata">
          <div class="popuptitle_chid">善款将捐赠给【{{popuptitle}}】</div>
          <div class="popuporg_chid">
             <div>善款接受：{{popupaccept}}</div>
             <div>项目执行：{{popupdo}}</div>
             <ul class="prolist">
               <li><van-icon name="passed" size="16" /> 项目开始时间：{{startTime}}</li>
               <li><van-icon name="passed" size="16" /> {{proinfo}}</li>
               <li><van-icon name="passed" size="16" /> {{protime}}</li>
               <li><van-icon name="passed" size="16" /> {{profinance}}</li>
             </ul>
          </div>

        </div>

      </van-popup>
      <van-popup
        v-model="showv2"
        closeable
        position="bottom"
        :style="{ height: '40%' }"
        class="givebar"
      >
        <dl class="givebar_dl">
          <dt><img :src="giveimg" alt=""></dt>
          <dd>
            <h3>{{popuptitle}}</h3>
            <h4>{{givecount}}束微光</h4>
            <div class="money">￥{{givecount*60}}</div>
          </dd>
        </dl>
        <van-tabs type="card" class="changecount" @click="onClick" color="#000" title-active-color="rgb(221, 164, 59)">
          <van-tab :name="1" :title="'1次'+giveinfo"/>
          <van-tab :name="3" :title="'3次'+giveinfo"/>
          <van-tab :name="5" :title="'5次'+giveinfo"/>
        </van-tabs>
        <van-checkbox-group v-model="result">
          <van-checkbox name="a" icon-size="12px" checked-color="rgb(221, 164, 59)">同意<span>用户捐赠协议</span></van-checkbox>
          <van-checkbox name="b" icon-size="12px" checked-color="rgb(221, 164, 59)">匿名捐赠</van-checkbox>
        </van-checkbox-group>
        <van-button type="primary" size="large"  color="linear-gradient(to right, #000, rgb(221, 164, 59))" class="givesub" @click="subgive">为他发光</van-button>
      </van-popup>
  </div>
</template>

<script>
import axios from 'axios'
import { Popup, Button, Icon, Tab, Tabs, Checkbox, CheckboxGroup, Toast } from 'vant'
import Vue from 'vue'

Vue.use(Popup)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)

Vue.use(Toast)
export default {
  data () {
    return {
      result: ['a'],
      datalist: [],
      show: false,
      showv2: false,
      popuptitle: '',
      popupaccept: '',
      popupdo: '',
      startTime: '',
      proinfo: '',
      protime: '',
      profinance: '',
      giveimg: '',
      givecount: 1,
      giveinfo: ''
    }
  },
  mounted () {
    axios.get('https://scdn.gongyi.qq.com/json_data/cfgsets/gycfg_723_v1.json').then(res => {
      this.datalist = res.data.projects
    })
  },
  methods: {
    onClick (num, title) {
      this.givecount = num
    },
    showPopup (id) {
      this.show = true
      const arr = id.toString().split('')
      const len = arr.length - 1
      let idResult
      if (arr[len - 1] === 0) {
        idResult = [arr[len]].join('')
      } else {
        idResult = [arr[(len - 1)], arr[len]].join('')
      }

      axios.get(`https://scdn.gongyi.qq.com/json_data/data_detail/${idResult}/detail.${id}.json`).then(res => {
        console.log(res.data)
        this.popuptitle = res.data.base.title
        this.popupaccept = res.data.base.fundName
        this.popupdo = res.data.base.eOrgName
        this.startTime = res.data.base.startTime
        this.giveinfo = res.data.base.ext_donate.nm
        if (res.data.base.implement_res && res.data.base.count) {
          this.proinfo = res.data.base.implement_res
          this.protime = '3个月内共进展' + res.data.base.count.process + '次'
          this.profinance = '2019年至今共进行' + res.data.base.count.finance + '次财务披露'
        } else {
          this.proinfo = '已提交善款执行预算'
          this.protime = '已提交项目执行计划'
          this.profinance = '未进入执行披露期'
        }

        this.giveimg = res.data.base.listImg + '/200'
      })
    },
    give () {
      this.show = false
      this.showv2 = true
      console.log(this.giveimg)
    },
    subgive () {
      if (!(this.result.indexOf('a') >= 0)) {
        Toast('您需要同意并勾选《用户捐赠协议》')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.headcard{
    width :80%;
    height:300px;
    background :url('http://mat1.gtimg.com/gongyi/home/index-header-bg.png');
    margin-left: 10%;
    position: relative;
    border-radius: 10px;
}
.headcard_head{
    width: 80%;
    height: 40%;
    position: absolute;
    top: 0;
    left: 10%;
    img{
        height: 50%;
        position: absolute;
        top: 25%;
    }
    h3{
        margin-left: 75px;
        height: 50%;
        position: absolute;
        top: 25%;
    }
}
.headcard_foot{
    width: 95%;
    height: 50%;
    position: absolute;
    bottom: 10%;
    left: 2.5%;

}
.headcard_bar{
    float: left;
    width: 48%;
    height: 48%;
    margin:1%;
    background: white;
    border-radius: 10px;

    background-image: url('http://mat1.gtimg.com/gongyi/home/index-banner-item-bg.png');
    .target{
      font-size: 16px;
      padding: 2px;
      margin-top: 10px;
      font-weight: 600;
    }
    .wording{
      font-size: 14px;
      padding: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
}
.van-popup--center{
  width: 90%;
  height: 80%;
  .popup_head{
    width: 100%;
    height: 30%;
    background-image: radial-gradient(circle farthest-side at center bottom,  rgb(221, 164, 59),rgba(254,138,50,0));
    background-color: #000;
    color: white;
    overflow: hidden;
    h2{
      width: 90%;
      margin-left: 5%;
      margin-top: 50px;
      text-align: center;
      font-weight: 500;
    }
    h3{
      width: 90%;
      margin-left: 5%;
      margin-top: 20px;
      text-align: center;
      font-weight: 400;
      font-size: 14px;
    }
  }
  .popup_foot{
    position: absolute;
    bottom: 0;
    height: 10%;
    width: 100%;
    .van-button{
      width: 50%;
      height: 100%;
      border:none;
      border-radius: 0;
      float: left;

    }
  }
  .popupdata{
      width: 60%;
      margin-left: 20%;
    .popuptitle_chid{
      height: 100%;
      display: flex;
      border-bottom: 1px solid #ccc;
      justify-content: center;
      align-items:center;
      text-align: center;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .popuporg_chid{
      width: 120%;
      margin-left: -10%;
      margin-top: 20px;
      color: #666;
      font-size: 12px;
      .prolist{
        width: 100%;;
        margin-top: 30px;
        font-size: 14px;
        line-height: 18px;
        li{
          margin-top: 10px;
          vertical-align:bottom;
          .van-icon{
            vertical-align:bottom;
            padding-right: 3px;
          }
        }
      }
    }

  }

}
.givebar{
  width: 90%;
  height: 90%;
  padding:5%;
  .givebar_dl{
      width: 100%;
      height: 50%;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
      dt{
        width: 40%;
        height: 100%;
        float: left;
        img{
         width: 90%;
         height: 90%;
         padding:5%;
        }
      }
      dd{
        width: 60%;
        height: 100%;
        float: right;
        h3,h4{
          font-weight: 400;
        }
        h3{
          font-size: 18px;
          margin-top: 10px;
        }
        h4{
          font-size: 14px;
          margin-top: 5px;
          color: #666;
        }
        .money{
          margin-top: 20px;
          font-size: 22px;
          font-weight: 600;
          color: rgb(221, 164, 59);
        }
      }
    }
    .changecount{
      margin-top: 10px;
     }
      .van-checkbox-group{
        margin-top: 10px;
        .van-checkbox{
          margin-top: 5px;
        }
      }
      .givesub{
        margin-top: 10px;
      }
  }
</style>
