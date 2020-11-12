<template>
  <div class="head">
      <slot name="left"></slot>
      <slot name="right"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.head{
    width: 100%;
    height: 50px;
    .text{
        height: 100%;
        float: left;
        font-size: 22px;
        line-height:50px;
    }
    .run{
        float: right;
        font-size: 10px;
        height: 100%;
        line-height: 50px;
        color: black;
        .van-icon{
            vertical-align: bottom;
        }
    }
}
</style>