<template>
    <div class="home">
        <van-nav-bar
        title="爱心❤数据"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <ul>
            <li>以帮助<br>
                0次</li>
            <li>资助金额<br>
                0元</li>
        </ul>
        <div class="btn">
            <van-button round hairline type="info" size="small" @click="handleRight" color="red">返回首页</van-button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Button, Overlay } from 'vant'
Vue.use(NavBar).use(Button).use(Overlay)
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/center')
    },
    handleRight () {
      this.$router.push('/firstPage')
    }
  }
}
</script>
<style lang="scss" scoped>
  ul{
        display: flex;
        height: 40px;
        line-height: 40px;
        text-align: center;
        z-index: 100;
        position: sticky;
        top: 0;
        background-color: #ccc;
        li{
            flex: 1;
        }
    }
    .btn{
        width: 100px;
        position: relative;
        top: 200px;
        left: 148px;

    }
</style>
