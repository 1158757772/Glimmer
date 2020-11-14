<template>
  <div>
    <footer-bar v-if="$store.state.footBarOnoff"></footer-bar>
    <givefooter-bar v-if="$store.state.giveFootOnoff"></givefooter-bar>
    <!-- 路由容器---插槽封装 -->
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import footerBar from '@/components/footerBar'
import givefooterBar from '@/components/givefootbar'
export default {
  components: {
    footerBar,
    givefooterBar
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
