<template>
  <div class="bottom_show">
      <h3>
          截止到1分钟前，已有
      </h3>
      <ul>
          <li>
            <span>423,239,295</span>次微光捐赠  
          </li>
          <li>
              <span>11,506,762,952</span>元总捐款金额
          </li>
          <li>
              <span>93,860</span>个项目获得帮助 
          </li>
      </ul>
      <router-link to="/projecttype" tag="h4">
      已经到底了，点击查看更多公益项目吧
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .bottom_show{
      width: 100%;
      padding-top: 10px;
      border-top: 1px solid #ccc;
      h3{
          padding: 5px 0;
          font-size: 12px;
          color:#666
      }
      h4{
          padding: 5px 0;
          font-size: 12px;
          color:#666;
          text-align: center;
          margin-top: 15px;
      }
      ul{
          margin-top: 5px;
          li{
              padding: 5px 0;
              span{
                  font-size: 20px;
                  color:red;
                  display: inline-block;
                  padding-right: 5px;
              }
          }
      }
  }

</style>