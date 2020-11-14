<template>
  <div id="center">
    <div>
      <header></header>
      <div class="top">
        <div class="top1">
          <div class="top2">
            <div class="top3">
              <div class="top4">
                <img src="../../public/images/img.png" alt="">
              </div>
            </div>
            <div class="top3_1">
              <h4>
                宿老
                <span>&nbsp;爱心新秀</span>
              </h4>
              <div class="top3_1_1">
              <span>
                ______________________________
              </span>
              </div>
              <div class="top3_1_2">
                <span>LV.0</span>&nbsp;
                <span>累计爱心经验0</span>
              </div>
            </div>
          </div>
          <div class="top_bot">
            <div>
              <h1>0</h1>
              <p>累计捐款/元</p>
            </div>
            <div>
              <h1>0</h1>
              <p>累计步数/步></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cen">
      <div>
        <van-grid :column-num="3" square :border="false">
          <van-grid-item v-for="value in looplist" :key="value.id"
          :icon="value.icon" :text="value.title" @click="toOne()"/>
        </van-grid>
      </div>
    </div>
    <div class="bot">
      <div class="bot_1">
        <h3>公益成就</h3>
        <span>0/8</span>
      </div>
      <div class="bot_2">
          <van-grid :column-num="3" square :border="false">
            <van-grid-item v-for="value in looplist" :key="value.id"
            :text="value.title2" :icon="value.img" @click="showPopup1"/>
          </van-grid>
          <van-popup v-model="show2" closeable>
            <div class="tu">
              <img src="../../public/images/500.jpg" alt="">
              <span>您还没有任何❤成就</span>
              <van-button round type="info" color="red" @click="handleOne" size="large" >返回首页</van-button>
            </div>
          </van-popup>
      </div>
    </div>
      <van-popup v-model="show"><img src="../../public/images/download.jpg" alt=""
        style="width: 310px; height: 462px;"
      ></van-popup>
    <div class="btn">
      <van-button  round type="info" size="large" color="red" @click="btnClick">分享我的成就</van-button>
    </div>
    <!-- <div class="logo">
      <img src="../../public/images/logo_gy.png" alt="">
    </div> -->
  </div>
</template>

<script>
import Vue from 'vue'
import { Grid, GridItem, Icon, Button, Popup, Cell } from 'vant'
Vue.use(GridItem).use(Icon).use(Grid).use(Button).use(Popup).use(Cell)
export default {
  data () {
    return {
      show: false,
      show2: false,
      looplist: [
        {
          id: '1',
          icon: 'gold-coin-o',
          title2: '乐捐新贵',
          img: 'https://mat1.gtimg.com/gongyi/m/wx/love_account/badge_disable_mini_ljxg.png',
          title: '我的捐款'
        },
        {
          id: '2',
          icon: 'balance-o',
          title2: '积善成德',
          img: 'https://mat1.gtimg.com/gongyi/m/wx/love_account/badge_disable_mini_jscd.png',
          title: '我发起的一起捐'
        },
        {
          id: '3',
          icon: 'medal-o',
          title2: '爱心巨匠',
          img: 'https://mat1.gtimg.com/gongyi/m/wx/love_account/badge_disable_mini_axjj.png',
          title: '我的益行记录'
        },
        {
          id: '4',
          icon: 'logistics',
          title2: '博士集中',
          img: 'https://mat1.gtimg.com/gongyi/m/wx/love_account/badge_disable_mini_bsjz.png',
          title: '我的捐步记录'
        },
        {
          id: '5',
          icon: 'friends-o',
          title2: '持之以恒',
          img: 'https://mat1.gtimg.com/gongyi/m/wx/love_account/badge_disable_mini_czyh.png',
          title: '我的一对一'
        },
        {
          id: '6',
          icon: 'like-o',
          title2: '一呼百应',
          img: 'https://mat1.gtimg.com/gongyi/m/wx/love_account/badge_disable_mini_yhby.png',
          title: '我的爱心加倍卡'
        },
        {
          id: '7',
          icon: 'balance-list-o',
          title2: '一心一意',
          img: 'https://mat1.gtimg.com/gongyi/m/wx/love_account/badge_disable_mini_yxyy.png',
          title: '我的票据'
        },
        {
          id: '8',
          icon: 'shop-collect-o',
          title2: '月捐新贵',
          img: 'https://mat1.gtimg.com/gongyi/m/wx/love_account/badge_disable_mini_yjxg.png',
          title: '企业回馈'
        }
      ]
    }
  },
  methods: {
    toOne () {
      this.$router.push('/center/cen_1')
    },
    btnClick () {
      this.show = true
    },
    showPopup1 () {
      this.show2 = true
    },
    handleOne () {
      this.$router.push('/firstPage')
    }
  }
}
</script>

<style  lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #center{
    background: #ccc;
    header{
      position: relative;
      padding-top: 50%;
      background: rgba(223,36,19,.8);
      width: 100%;
      height: 100%;
    }
    .top{
      span,p{
        font-size: 12px;
        color: #aaa;
      }
      position: relative;
      top: -120px;
      margin: 0 16px;
      .top1{
        background: #fff;
        .top2{
          padding: 16px;
          display: flex;
          justify-content: flex-start;
          .top3{
            padding-right: 16px;
            width: 60%;
            .top4{
              width: 60%;
              height: 60%;
            }
          }
        }
        .top_bot{
          width: 224px;
          height: 68px;
          margin-left: 72px;
          padding: 0 16px 16px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .cen{
      background: #fff;
      position: relative;
      top: -120px;
      margin: 16px ;
    }
    .bot{
      position: relative;
      top: -120px;
      background: #fff;
      margin: 16px;
      .bot_1{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        span{
          font-size: 12px;
          color: #aaa;
        }
      }
    }
    .btn{
      position: relative;
      top: -50px;
    }
    .logo{
      text-align: center;
    }
     .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    .block {
      width: 120px;
      height: 120px;
      background-color: #fff;
    }
    .tu{
      width: 310px;
      height: 426px;
      background: #fff;
      flex-direction: column;
      text-align: center;
      display: flex;
      justify-content: space-around;
      img{
        width: 150px;
        height: 150px;
        margin: auto;
      }
    }
  }
</style>
