<template>
  <div class="all">
    <!-- 搜索框 -->
    <van-search
      background="#000"
      placeholder="送出你的微光"
      @click="ToSearch"
    />
     <!-- 半圆背景 -->
    <div class="round"></div>
     <!-- 顶部卡片 -->
    <head-card></head-card>
     <!-- 顶部圆形导航 -->
    <head-nav></head-nav>
     <!-- 内容区 -->
    <div class="container">
       <!-- 顶部轮播 -->
   <first-swiper></first-swiper>
       <!-- 展示轮播 -->
   <show-swiper></show-swiper>
       <!-- 展示列表 -->
   <show-list></show-list>
       <!-- 展示卡片 -->
    <show-card>
      <div slot="head" class="text" >今日关注</div>
      <img slot="showimg" class="showimg" src="http://imgcdn.gongyi.qq.com/gongyi/6a335576a1d92cb03e2e1b61125ccdf77a311518efb18c327c36225779262fd6e41790e34072c930/500" @click="goid(203500)"/>
      <div slot="showtext" class="showtext"><h3>丰富心智障碍者的生活</h3><h4>丰富心智障碍者的生活</h4></div>
      <van-button round type="info" slot="showbtn" class="showbtn" color="linear-gradient(to right, #ff6034, #ee0a24)" size="small">社区融合</van-button>
      <ul slot="showlistgroup">
        <li @click="goid(217030)">
           <dl class="whole-dl">
          <dt class="img_dt"><img src="http://imgcdn.gongyi.qq.com/gongyi/6a335576a1d92cb07b5cf640a0951fcebde5b8789900badfb31819c9ac2c6de8331696f8feb25c28/500" alt=""></dt>
          <dd class="text_dd">
              <h3>他在一所小学工作了近20年，音体美课程似乎和这里无关</h3>
              <p class="left">老师别走</p>
              <p class="right">女童教育</p>
          </dd>
          </dl>
        </li>
        <li  @click="goid(222005)">
           <dl class="whole-dl">
          <dt class="img_dt"><img src="http://imgcdn.gongyi.qq.com/gongyi/6a335576a1d92cb0ccfd5c803ad00921eec285c65c2e07505ef05602f2fd340db2550c8cb167406f/500" alt=""></dt>
          <dd class="text_dd">
              <h3>一间简单的宿舍，让异地求医的患儿在治疗路上得以停歇</h3>
              <p class="left">口罩天使医路有家</p>
              <p class="right">教育助力</p>
          </dd>
          </dl>
        </li>
      </ul>
    </show-card>
    <show-card>
      <div slot="head" class="text" >教育助学：孩子的读书梦</div>
      <img slot="showimg" class="showimg" src="//imgcdn.gongyi.qq.com/gongyi/24cafafaef632db013b36dc11d2364934195e0dad5e768427bd47e5312256cb5/500" @click="goid(200996)"
      />
      <div slot="showtext" class="showtext"><h3>把陪伴带给本该无忧的她</h3><h4>失依女童陪伴成长</h4></div>
      <van-button round type="info" slot="showbtn" class="showbtn" color="linear-gradient(to right, #ff6034, #ee0a24)" size="small">生活支持</van-button>
      <ul slot="showlistgroup">
        <li @click="goid(205242)">
           <dl class="whole-dl">
          <dt class="img_dt"><img src="http://imgcdn.gongyi.qq.com/gongyi/e7d70da62b802ce4d29dfabb33614459a07f398d878df7f8d58c85126433516e/500" alt=""></dt>
          <dd class="text_dd">
              <h3>培养教师的心理教育能力，用爱融化孩子心里的针尖</h3>
              <p class="left">心教师工程</p>
              <p class="right">心理教育</p>
          </dd>
          </dl>
        </li>
        <li @click="goid(13873)">
           <dl class="whole-dl">
          <dt class="img_dt"><img src="http://imgcdn.gongyi.qq.com/gongyi/102bde6148ff566b9a00f403b8f12a18247edfb00cd2c527112fc8dc2faccc4edf7c14238faef170/500" alt=""></dt>
          <dd class="text_dd">
              <h3>建立青春期性健康意识，让性教育不再成为教育死角</h3>
              <p class="left">爱的教育校园行</p>
              <p class="right">防艾教育</p>
          </dd>
          </dl>
        </li>
      </ul>
    </show-card>
    <show-card>
      <div slot="head" class="text" >扶贫救灾：点燃生活希望</div>
      <img slot="showimg" class="showimg" src="http://imgcdn.gongyi.qq.com/gongyi/81d83fd6da62e247b0d175a4177a3fb16f5d74e45a46e03d76ba8368cdf64cb6/500" @click="goid(32123)"/>
      <div slot="showtext" class="showtext"><h3>大山贫困老人的爱心回礼</h3><h4>外婆的礼物</h4></div>
      <van-button round type="info" slot="showbtn" class="showbtn" color="linear-gradient(to right, #ff6034, #ee0a24)" size="small">创业养老</van-button>
      <ul slot="showlistgroup">
        <li @click="goid(35620)">
           <dl class="whole-dl">
          <dt class="img_dt"><img src="http:////imgcdn.gongyi.qq.com/gongyi/8c949bbb84dee7ef1a7463770b9a175f361ec57ed77f22c6f0b5d098345ba8cc9449cc4c15ec8fa2dfbc2e1ef500aa1b/500" alt=""></dt>
          <dd class="text_dd">
              <h3>暖心陪伴孤寡老人，不要让他们在孤独中度过最后的晚年</h3>
              <p class="left">银龄守护计划</p>
              <p class="right">送去微光</p>
          </dd>
          </dl>
        </li>
        <li @click="goid(213992)">
           <dl class="whole-dl">
          <dt class="img_dt"><img src="http://imgcdn.gongyi.qq.com/gongyi/a7534d930be368fb5a87b5c84040163378d82c4d2817c7f7235c0309da6f36dd/500" alt=""></dt>
          <dd class="text_dd">
              <h3>对于困境中的他们，你的一分一毫都可带来美好改变</h3>
              <p class="left">壹基金壹家人计划</p>
              <p class="right">灾难救助</p>
          </dd>
          </dl>
        </li>
      </ul>
    </show-card>
    <show-card>
      <div slot="head" class="text" >疾病救助：帮他们恢复健康</div>
      <img slot="showimg" class="showimg" src="http://imgcdn.gongyi.qq.com/gongyi/86d68d09d4885c032b3d68ff82ad25d13a35ba075a4ae30ab63a5c001c74f342/500" @click="goid(364)"/>
      <div slot="showtext" class="showtext"><h3>重新回归有声世界</h3><h4>爱的分贝聋儿救助</h4></div>
      <van-button round type="info" slot="showbtn" class="showbtn" color="linear-gradient(to right, #ff6034, #ee0a24)" size="small">康复训练</van-button>
      <ul slot="showlistgroup">
        <li @click="goid(223804)">
           <dl class="whole-dl">
          <dt class="img_dt"><img src="http://imgcdn.gongyi.qq.com/gongyi/6a335576a1d92cb067e1257216a6f0193191ccd880ce020655891d77b011e9eb40e4dd77a846a41e/500" alt=""></dt>
          <dd class="text_dd">
              <h3>为贫困血液病患者筹集治疗费用，减轻他们的负担</h3>
              <p class="left">给血癌患者一抹希望</p>
              <p class="right">凝聚爱心</p>
          </dd>
          </dl>
        </li>
        <li @click="goid(221655)">
           <dl class="whole-dl">
          <dt class="img_dt"><img src="http://imgcdn.gongyi.qq.com/gongyi/6a335576a1d92cb0076f41868fbd8451a4ba736de369797c104806d1e74363ac8a704c84340f2424/500" alt=""></dt>
          <dd class="text_dd">
              <h3>对于Ta们来说，你的一份捐助无疑是雪中送碳</h3>
              <p class="left">大病家庭的生命之光</p>
          </dd>
          </dl>
        </li>
      </ul>
    </show-card>
    <show-card>
      <div slot="head" class="text" >环境保护：守护绿水青山</div>
      <img slot="showimg" class="showimg" src="http://imgcdn.gongyi.qq.com/gongyi/6a335576a1d92cb04bafe4f19bbe5442844079a385e2f62b44e0cdf51dd77c1cdc4a29a2aaeec9a286fba5d68f763c05be928eaceea3382f78ccbafb501c816d/500" @click="goid(10306)"/>
      <div slot="showtext" class="showtext"><h3>为濒危水鸟建立保护基地</h3><h4>守护栖息地任鸟飞</h4></div>
      <van-button round type="info" slot="showbtn" class="showbtn" color="linear-gradient(to right, #ff6034, #ee0a24)" size="small">保护濒危</van-button>
      <ul slot="showlistgroup">
        <li @click="goid(1000018338)">
           <dl class="whole-dl">
          <dt class="img_dt"><img src="http://imgcdn.gongyi.qq.com/gongyi/6a335576a1d92cb0ab5dc011c82df40ba325a0b534197a6810313555a0951c4fdcaf3c917b4c9ef6/500" alt=""></dt>
          <dd class="text_dd">
              <h3>给流浪动物一个家，让它们平安度过这个冬天</h3>
              <p class="left">许它一个明天</p>
              <p class="right">温暖庇护</p>
          </dd>
          </dl>
        </li>
        <li @click="goid(1000021650)">
           <dl class="whole-dl">
          <dt class="img_dt"><img src="http://imgcdn.gongyi.qq.com/gongyi/567dd0a80ef33937052462ff5b8ee41adc8d9c612f1e946909e80b82ffb073c1/500" alt=""></dt>
          <dd class="text_dd">
              <h3>开展林区植被恢复，给国宝安全的生存环境</h3>
              <p class="left">守护熊猫和他的朋友</p>
              <p class="right">关爱他们</p>
          </dd>
          </dl>
        </li>
      </ul>
    </show-card>
    <bottom-swiper>
    </bottom-swiper>
    <bottom-show>
    </bottom-show>
   </div>
   <foot>
   </foot>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search, Button } from 'vant'
import headCard from './firstpagetool/headCard'
import headNav from './firstpagetool/headNav'
import firstSwiper from './firstpagetool/firstpageswiper'
import showSwiper from './firstpagetool/firstpageswiper_2'
import showList from './firstpagetool/showlist'
import showCard from './firstpagetool/showcard'

import bottomSwiper from './firstpagetool/bottomswiper'
import bottomShow from './firstpagetool/bottomshow'
import foot from './firstpagetool/foot'
Vue.use(Button)
Vue.use(Search)
export default {

  methods: {
    ToSearch () {
      this.$router.push('/search')
    },
    goid (id) {
      console.log(id)
    }
  },
  components: {
    headCard,
    headNav,
    firstSwiper,
    showSwiper,
    showList,
    showCard,
    bottomSwiper,
    bottomShow,
    foot
  }
}

</script>

<style lang="scss" scoped>
.round{
  width: 100%;
  height: 150px;
  background: black;
  border-radius: 0 0 50% 50% ;
  position: absolute;
  top: 50px;
  z-index: -99;
}
.container{
  width: 95%;
  margin-left: 2.5%;
}
</style>
