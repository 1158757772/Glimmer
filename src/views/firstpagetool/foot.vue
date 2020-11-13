<template>
  <div class="foot">
      <ul>
          <router-link to="/" tag="li">服务协议</router-link>
          <router-link to="/" tag="li">平台介绍</router-link>
          <router-link to="/" tag="li">建议反馈</router-link>
      </ul>
      <h3>统一社会信用代码：531000005000206140</h3>
      <h3>投诉与建议：1158757772@qq.com</h3>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.foot{
    background: whitesmoke;
    overflow: hidden;
    ul{
        margin-top: 15px;
        height: 30px;
        text-align: center;
        li{
            height: 100%;
            display: inline;
            padding: 0 3px;
        }

    }
     h3{
            font-size: 8px;
            text-align: center;
            padding-top: 5px;
            color: #666;
        }
}
</style>
