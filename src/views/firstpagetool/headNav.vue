<template>
  <div class="nav">
      <ul>
          <router-link to="/sport" tag="li">
              <dl>
                  <dt><img src="http://mat1.gtimg.com/gongyi/home/icon2020/step_icon.png" class="nav-icon"></dt>
                  <dd>运动捐步</dd>
              </dl>
          </router-link>
          <router-link to="/onetoone" tag="li">
              <dl>
                  <dt><img src="http://mat1.gtimg.com/gongyi/home/icon2020/1v1_icon.png" alt=""></dt>
                  <dd>一对一</dd>
              </dl>
          </router-link>
          <router-link to="/community" tag="li">
              <dl>
                  <dt><img src="http://mat1.gtimg.com/gongyi/home/icon-yuejuan.png" alt=""></dt>
                  <dd>公益社区</dd>
              </dl>
          </router-link>
          <router-link to="/projecttype" tag="li">
              <dl>
                  <dt><img src="http://mat1.gtimg.com/gongyi/home/icon2019/cate_icon.png" alt=""></dt>
                  <dd>项目分类</dd>
              </dl>
          </router-link>
          <router-link to="/center" tag="li">
              <dl>
                  <dt><img src="http://mat1.gtimg.com/gongyi/home/icon2019/user_center_icon.png" alt=""></dt>
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
    margin-top: 10px;
    width: 100%;
    height: 120px;
    display: flex;
    li{
        flex: 1;
        text-align: center;
        dl{
            width: 100%;
            height: 100%;
            dt{
                width: 100%;
                height: 60%;
                position: relative;
                img{
                    display: block;
                    position: absolute;
                    width: 80%;
                    left: 50%;
                    top: 50%;
                    margin-top: -40%;
                    margin-left: -40%;
                }

            }
        }
    }
}
</style>
