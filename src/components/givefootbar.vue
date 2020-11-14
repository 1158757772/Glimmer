<template>
<div>
  <div class="givefootbar">
      <router-link to="/firstPage" class="sadh"><van-icon name="wap-home-o" /></router-link>
      <van-button round type="primary" size="large"  color="#000" @click="szuh">捐赠</van-button>
  </div>
  <van-popup v-model="show" closeable close-icon-position="top-right">

        <div class="popup_head">
          <h2>微光公益透明度提示：</h2>
          <h3>微光公益打造透明公益平台，每个人都是一束微光</h3>
        </div>
        <div class="popup_foot">
         <van-button color="linear-gradient(to right, #000,  rgb(221, 164, 59))"  class="left-btn" @click="gotype">了解更多项目信息</van-button>
          <van-button color="linear-gradient(to left, #000,  rgb(221, 164, 59))" class="right-btn" @click="give">
            我已知情，继续捐赠
          </van-button>
        </div>
        <div class="popupdata">
          <div class="popuptitle_chid">善款将捐赠给【{{$store.state.openCard.popuptitle}}】</div>
          <div class="popuporg_chid">
             <div>善款接受：{{$store.state.openCard.popupaccept}}</div>
             <div>项目执行：{{$store.state.openCard.popupdo}}</div>
             <ul class="prolist">
               <li><van-icon name="passed" size="16" /> 项目开始时间：{{$store.state.openCard.startTime}}</li>
               <li><van-icon name="passed" size="16" /> {{$store.state.openCard.proinfo}}</li>
               <li><van-icon name="passed" size="16" /> {{$store.state.openCard.protime}}</li>
               <li><van-icon name="passed" size="16" /> {{$store.state.openCard.profinance}}</li>
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
          <dt><img :src="$store.state.openCard.giveimg" alt=""></dt>
          <dd>
            <h3>{{$store.state.openCard.popuptitle}}</h3>
            <h4>{{givecount}}束微光</h4>
            <div class="money">￥{{givecount*60}}</div>
          </dd>
        </dl>
        <van-tabs type="card" class="changecount" @click="onClick" color="#000" title-active-color="rgb(221, 164, 59)">
          <van-tab :name="1" :title="'1次'+$store.state.openCard.giveinfo"/>
          <van-tab :name="3" :title="'3次'+$store.state.openCard.giveinfo"/>
          <van-tab :name="5" :title="'5次'+$store.state.openCard.giveinfo"/>
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
import { Popup, Button, Icon, Tab, Tabs, Checkbox, CheckboxGroup, Toast } from 'vant'
import Vue from 'vue'

Vue.use(Popup)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)

export default {
  data () {
    return {
      result: ['a'],
      show: false,
      showv2: false,
      givecount: 1
    }
  },
  methods: {
    give () {
      this.show = false
      this.showv2 = true
    },
    onClick (num, title) {
      this.givecount = num
    },
    subgive () {
      if (!(this.result.indexOf('a') >= 0)) {
        Toast('您需要同意并勾选《用户捐赠协议》')
      }
    },
    gotype () {
      this.$router.push('/projecttype')
    },
    szuh () {
      if (this.$store.state.openCard.popuptitle) {
        this.show = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
 .givefootbar{
    position: fixed;
    z-index: 100;
    bottom: 0px;
    left:0;
    width: 100%;
    height: 50px;
    line-height: 25px;
    background: white;
    text-align: center;
    .sadh{
        height: 80%;
        padding: 10%;
        padding-left: 5px;
        .van-icon{
          font-size: 30px;
          vertical-align: middle;
        }
    }
    .van-button{
        width: 50%;
        height: 90%;
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
  .van-popup--center{
  width: 90%;
  height: 80%;
  .popup_head{
    width: 100%;
    height: 35%;
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
