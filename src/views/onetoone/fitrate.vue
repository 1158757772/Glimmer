<template>
  <!-- <v-touch @swiperight="onSwipeRight" :swipe-options="{ direction: 'horizontal', threshold: 100 }"> -->
    <div id="fitrate">
        <p>请选择筛选条件</p>
        <!-- 地址栏 -->
        <van-cell is-link @click="showPopup">
          <van-icon name="location-o" />
          {{carmodel ? carmodel : '地域'}}
        </van-cell>
        <van-popup v-model="show"  position="bottom" :style="{ height: '50%' }">
          <van-area title="请选择地域"  :area-list="areaList" ref="myarea" @cancel="onCancel" @confirm="onConfirm"/>
        </van-popup>
        <!-- 性别栏 -->
        <van-cell is-link @click="showSex">
          <van-icon name="like-o" />
          {{sexmodel ? sexmodel : '性别'}}
        </van-cell>
        <van-popup v-model="sex"  position="bottom" :style="{ height: '50%' }">
          <van-area title="请选择性别" columns-num="1" :area-list="sexList" ref="mysex" @cancel="cancelSex" @confirm="confirmSex"/>
        </van-popup>
        <!-- 年龄栏 -->
        <van-cell is-link @click="showAge">
          <van-icon name="notes-o" />
          {{agemodel ? agemodel : '年龄'}}
        </van-cell>
        <van-popup v-model="age"  position="bottom" :style="{ height: '50%' }">
          <van-area title="请选择年龄" columns-num="1" :area-list="ageList" ref="myage" @cancel="cancelAge" @confirm="confirmAge"/>
        </van-popup>
        <!-- 生日栏 -->
        <van-cell is-link @click="showBirthday">
          <van-icon name="point-gift-o" />
          {{birthdaymodel ? birthdaymodel : '生日'}}
        </van-cell>
        <van-popup v-model="birthday"  position="bottom" :style="{ height: '50%' }">
          <van-area title="请选择生日" columns-num="1" :area-list="birthdayList" ref="mybirthday" @cancel="cancelBirthday" @confirm="confirmBirthday"/>
        </van-popup>
        <!-- 星座栏 -->
        <van-cell is-link @click="showStar">
          <van-icon name="star-o" />
          {{starmodel ? starmodel : '星座'}}
        </van-cell>
        <van-popup v-model="star"  position="bottom" :style="{ height: '50%' }">
          <van-area title="请选择星座" columns-num="1" :area-list="starList" ref="mystar" @cancel="cancelStar" @confirm="confirmStar"/>
        </van-popup>
        <button @click="$router.back()">筛选</button>
    </div>
  <!-- </v-touch> -->
</template>

<script>
import areaList from '@/util/area'

import Vue from 'vue'
// import VueTouch from 'vue-touch'
import { Popup, Cell, Icon, Area } from 'vant'

Vue.use(Popup).use(Cell).use(Icon).use(Area)

// .use(VueTouch, { name: 'v-touch' })

export default {
  data () {
    return {
      show: false, // 是否显示地址弹出层
      areaList, // 地址列表
      carmodel: '', // 选中的地址
      sex: false, // 是否显示性别弹出层
      sexList: { // 性别列表
        province_list: {
          a0: '不限',
          a1: '男',
          a2: '女'
        }
      },
      sexmodel: '', // 选中的性别
      age: false, // 是否显示年龄弹出层
      ageList: { // 年龄列表
        province_list: {
          b0: '不限',
          b1: '0~10岁',
          b2: '21~30岁',
          b3: '31~40岁',
          b4: '41~50岁',
          b5: '51~60岁',
          b6: '61~70岁',
          b7: '71~80岁',
          b8: '81~90岁',
          b9: '91~100岁',
          b10: '100岁以上'
        }
      },
      agemodel: '', // 选中的年龄
      birthday: false, // 是否显示生日弹出层
      birthdayList: { // 生日列表
        province_list: {
          c1: '不限',
          c2: '本月生日',
          c3: '本周生日',
          c4: '今日生日',
          c5: '1月',
          c6: '2月',
          c7: '3月',
          c8: '4月',
          c9: '5月',
          c10: '6月',
          c11: '7月',
          c12: '8月',
          c13: '9月',
          c14: '10月',
          c15: '11月',
          c16: '12月'
        }
      },
      birthdaymodel: '', // 选中的生日
      star: false, // 是否显示星座弹出层
      starList: { // 星座列表
        province_list: {
          d1: '不限',
          d2: '白羊座',
          d3: '金牛座',
          d4: '双子座',
          d5: '巨蟹座',
          d6: '狮子座',
          d7: '处女座',
          d8: '天秤座',
          d9: '天蝎座',
          d10: '射手座',
          d11: '摩羯座',
          d12: '水瓶座',
          d13: '双鱼座'
        }
      },
      starmodel: '' // 选中的星座
    }
  },
  mounted () {
    this.$store.commit('closeFootBar')
  },
  destroyed () {
    this.$store.commit('openFootBar')
  },
  methods: {
    onSwipeRight () { // 右划事件
      // console.log('right')
      this.$router.back()
    },
    showPopup () { // 显示地址弹出层
      this.show = true
    },
    onCancel () { // 点击地址弹出层取消按钮时触发
      // console.log(123);

      this.show = false // 隐藏地址弹出层

      this.$refs.myarea.reset() // 重置地址
    },
    onConfirm (value) { // 点击地址弹出层确认按钮时触发
      // console.log(456,value);
      let areaName = ''

      for (var i = 0; i < value.length; i++) {
        areaName += (i === 0 ? '' : '/') + value[i].name
      }

      this.carmodel = areaName
      // console.log(this.carmodel);
      this.show = false
    },
    showSex () { // 显示性别弹出层
      this.sex = true
    },
    cancelSex () { // 点击性别弹出层取消按钮时触发
      this.sex = false // 隐藏性别弹出层

      this.$refs.mysex.reset()
    },
    confirmSex (value) { // 点击性别弹出层确认按钮时触发
      console.log(value)

      let sexName = ''

      for (var a = 0; a < value.length; a++) {
        sexName = sexName + value[a].name
      }

      this.sexmodel = sexName
      // console.log(this.sexmodel);

      this.sex = false
    },
    showAge () { // 显示年龄弹出层
      this.age = true
    },
    cancelAge () { // 点击年龄弹出层取消按钮时触发
      this.age = false // 隐藏年龄弹出层

      this.$refs.myage.reset()
    },
    confirmAge (value) { // 点击年龄弹出层确认按钮时触发
      console.log(value)

      let ageName = ''

      for (var b = 0; b < value.length; b++) {
        ageName = ageName + value[b].name
      }

      this.agemodel = ageName
      console.log(this.agemodel)

      this.age = false
    },
    showBirthday () { // 显示生日弹出层
      this.birthday = true
    },
    cancelBirthday () { // 点击生日弹出层取消按钮时触发
      this.birthday = false // 隐藏生日弹出层

      this.$refs.mybirthday.reset()
    },
    confirmBirthday (value) { // 点击生日弹出层确认按钮时触发
      console.log(value)

      let birthdayName = ''

      for (var c = 0; c < value.length; c++) {
        birthdayName = birthdayName + value[c].name
      }

      this.birthdaymodel = birthdayName
      // console.log(this.birthdaymodel);

      this.birthday = false
    },
    showStar () { // 显示星座弹出层
      this.star = true
    },
    cancelStar () { // 点击星座弹出层取消按钮时触发
      this.star = false // 隐藏星座弹出层

      this.$refs.mystar.reset()
    },
    confirmStar (value) { // 点击星座弹出层确认按钮时触发
      console.log(value)

      let starName = ''

      for (var d = 0; d < value.length; d++) {
        starName = starName + value[d].name
      }

      this.starmodel = starName
      console.log(this.starmodel)

      this.star = false
    }
  }
}
</script>

<style scoped>
  #fitrate{
    padding: 20px;
  }
  .van-cell{
    border-bottom: 1px solid #ccc;
  }
  .van-icon{
    vertical-align: middle;
  }
  button{
    width: 90%;
    height: 50px;
    border: 0;
    outline: none;
    border-radius: 25px;
    background: orangered;
    color: #fff;
    position: fixed;
    bottom: 20px; left: 0;
    margin: 0 5%;
  }
</style>
