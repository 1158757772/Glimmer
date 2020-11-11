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
          <van-button color="linear-gradient(to left, #000,  rgb(221, 164, 59))" class="right-btn">
            我已知情，继续捐赠
          </van-button>
        </div>
      </van-popup>
  </div>
</template>

<script>
import axios from 'axios'
import { Popup } from 'vant';
import Vue from 'vue';
Vue.use(Popup);
import { Button } from 'vant';
Vue.use(Button);
export default {
 data(){
    return{
      datalist:[],
      show: false,
    }
  },
 mounted () {
    axios.get("https://scdn.gongyi.qq.com/json_data/cfgsets/gycfg_723_v1.json").then(res=>{
      this.datalist=res.data.projects
    })
  },
  methods: {
    showPopup(id) {
      this.show = true;
      console.log(id)
    },
  },
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
      margin-top: 10px;
    }
}
.van-popup{
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
      width: 100%;
      margin-top: 50px;
      text-align: center;
      font-weight: 500;
    }
    h3{
      width: 100%;
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

    }
  }
}
</style>