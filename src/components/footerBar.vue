<template>
  <footer>
    <ul>
        <router-link to="/firstPage" tag="li" active-class="active">
          <van-icon name="circle" size='20'/>
          <span>首页</span>
        </router-link>
        <router-link to="/find" tag="li" active-class="active">
          <van-icon name="play-circle-o" size='20'/>
          <span>发现</span>
        </router-link>
        <router-link to="/center" tag="li" active-class="active">
          <van-icon name="smile-o"  size='20'/>
          <span>个人中心</span>
        </router-link>
    </ul>
  </footer>
</template>
<script>
import Vue from 'vue'
import { Icon } from 'vant'

Vue.use(Icon)
export default {

}
</script>
<style lang="scss" scoped>
  // @import url();
  .active{
    color: rgb(221, 164, 59);
  }

  footer{
    position: fixed;
    z-index: 100;
    bottom: 0px;
    left:0;
    width: 100%;
    height: 50px;
    line-height: 25px;
    background:black;
    text-align: center;
    ul{
      display: flex;
      li{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items:center;
        padding-top: 5px;
        color: whitesmoke;

        span{
          font-size:12px;
        }
      }
    }
  }
</style>
