<template>
  <div>
    <footer-bar></footer-bar>
    <!-- 路由容器---插槽封装 -->
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import footerBar from '@/components/footerBar'
export default {
  components: {
    footerBar
  }
}
</script>
<style lang="scss">
  *{
    margin:0;
    padding: 0;
  }
  html,body{
    height: 100%;
  }
  ul{
    list-style:none;
  }

  section{
    margin-bottom: 50px;
  }
</style>
