<template>
  <div class="showbar">
      <slot name="showimg"></slot>
      <div class="bottom">
           <slot name="showtext"></slot>
           <slot name="showbtn"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .showbar{
        width: 100%;
        height: 200px;
        overflow: hidden;
        border-radius: 5px;
        position: relative;
        .showimg{
            width: 100%;
        }
        .bottom{
            position: absolute;
            width: 100%;
            height: 100px;
            bottom: 0;
            color: #fff;

            .showtext{
                height: 100%;
                float: left;
                h3{
                    padding: 12px;
                    font-weight: 400;
                }
                h4{
                    padding: 10px;
                    font-weight: 400;
                }

            }

            .showbtn{
                float: right;
                margin-top: 30px;
                margin-right: 10px;
            }
        }
    }
</style>
