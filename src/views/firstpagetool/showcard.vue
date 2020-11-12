<template>
<div>

  <head-h>
      <slot name="head" slot="left"></slot>
  </head-h>
  <show-img>
       <slot name="showimg" slot="showimg"></slot>
       <slot name="showtext" slot="showtext"></slot>
       <slot name="showbtn" slot="showbtn"></slot>
  </show-img>
  <slot name="showlistgroup"></slot>
  </div>
</template>

<script>
import headH from './head'
import showImg from './showimg'
export default {
  components: {
    headH,
    showImg
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

ul{
    li{
        height: 100px;
        .whole-dl{
            width: 100%;
            height: 100%;
            overflow: hidden;
            .img_dt{
                width: 40%;
                height: 100%;
                float: left;
                img{
                    width: 80%;
                    height: 80%;
                    margin-top: 10%;
                    margin-left: 10%;
                    border-radius: 5px;
                }
            }
            .text_dd{
                width: 60%;
                height: 100%;
                float: right;
                h3,h4{
                    font-weight: 400;
                    padding-bottom: 5px;
                }
                h3{
                    margin-top: 10%;
                    font-size: 16px;
                }
                h4{
                    font-size: 14px;
                }
                .left{
                    font-size: 13px;
                    color: grey;
                    float: left;
                }
                .right{
                    font-size: 6px;
                    color: grey;
                    float: right;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
            }
        }

    }
}
</style>
