<template>
  <div class="nav">
      <ul>
          <router-link to="/sport" tag="li">
              <dl>
                  <dt></dt>
                  <dd>运动捐步</dd>
              </dl>
          </router-link>
          <router-link to="/onetoone" tag="li">
              <dl>
                  <dt></dt>
                  <dd>一对一</dd>
              </dl>
          </router-link>
          <router-link to="/community" tag="li">
              <dl>
                  <dt></dt>
                  <dd>公益社区</dd>
              </dl>
          </router-link>
          <router-link to="/projecttype" tag="li">
              <dl>
                  <dt></dt>
                  <dd>项目分类</dd>
              </dl>
          </router-link>
          <router-link to="/center" tag="li">
              <dl>
                  <dt></dt>
                  <dd>个人中心</dd>
              </dl>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav ul{
    margin-top: 20px;
    width: 100%;
    height: 120px;
    background: blueviolet;
    display: flex;
    li{
        flex: 1;
        text-align: center;
        dl{
            width: 100%;
            height: 100%;
            dt{
                width: 100%;
                height: 80%;
                background: chartreuse;
            }
        }
    }
}
</style>
