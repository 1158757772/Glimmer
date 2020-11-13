<template>
<div>
    <g-swiper :perview="1" title="lovelovedetail_szh" v-if="imgList.length" :page="true">
        <div class="swiper-slide fistnav" v-for="item in imgList" :key="item">
          <img :src="item+'/500'" alt="">
        </div>
      </g-swiper>
      <section class="container">
      <h2>{{contenttitle}}</h2>
      <p>{{m_summary}}</p>
      <div class="po">
      <div v-html="desc" class="content_szh"  :class="open?'show':'hide'"></div>
      <div class="mask" v-if="!open"></div>
      <h4  class="switch_of_open" @click="open=!open">{{open?"收起 ↑":"查看更多 ↓"}}</h4>
      </div>
      <h2>最新进展</h2>
      <div v-if="pubpro" class="pubpro">
          <h3 class="pubprotitle">{{pubprotitle}}<van-button  type="info" class="tb" size="mini" color="#dda43b" plain>机构发布</van-button></h3>
          <p class="pubprocontent">{{pubpro}}</p>
      </div>
      <div v-for="item in prolist" :key="item.id" class="proitem">
          <div class="proitem_head">
              <h4>{{item.content_title |codetoString}}<van-button  type="info" class="tb" size="mini" color="#dda43b" plain>深度进展</van-button></h4>
              <p>{{item.create_time*1000|tomonment}}</p>
          </div>
          <p class="proitem_content">
          {{item.desc | codetoString}}
          </p>
          </div>
      </section>
</div>
</template>

<script>
import axios from 'axios'
import http from '@/util/http'
import gSwiper from '@/components/glimmerswiper-atplay'
import Vue from 'vue'
import moment from 'moment'
import { Icon, Button } from 'vant'

Vue.use(Button)
Vue.use(Icon)
Vue.filter('codetoString', function (code) {
  return decodeURI(code)
})
Vue.filter('tomonment', function (time) {
  return moment(time).format('YYYY年MM月DD日由项目工作人员发布')
})
export default {
  data () {
    return {
      detailId: this.$route.params.Id,
      detailType: this.$route.params.Type,
      imgList: [],
      contenttitle: '',
      m_summary: '',
      desc: '',
      open: false,
      curr: 1,
      prolist: [],
      pubpro: '',
      pubprotitle: ''
    }
  },
  components: {
    gSwiper
  },
  mounted () {
    let doId
    if (this.detailId.toString().substring(this.detailId.toString().length - 2, this.detailId.toString().length - 1) !== 0) {
      doId = this.detailId.toString().substring(this.detailId.toString().length - 2, this.detailId.toString().length)
    } else {
      doId = this.detailId.toString().substring(this.detailId.toString().length - 1, this.detailId.toString().length)
    }
    http({ url: `/${this.detailType}/${doId}/detail.${this.detailId}.json` }).then(res => {
      if (this.detailType === 'data_detail') {
        if (res.data.base.img_mob_list) {
          this.imgList = res.data.base.img_mob_list
        } else {
          this.imgList = res.data.base.img_list
        }
        this.contenttitle = res.data.base.title
        this.m_summary = res.data.base.m_summary
        this.desc = res.data.detail.desc
        if (res.data.detail.endReport) {
          this.pubpro = res.data.detail.endReport.summary
          this.pubprotitle = res.data.detail.endReport.title
        }
      } else if (this.detailType === 'sub_data_detail') {
        console.log(res.data)
        if (res.data.msg.base.img_mob_list) {
          this.imgList = res.data.msg.base.img_mob_list
        } else {
          this.imgList = res.data.msg.base.img_list
        }
        this.contenttitle = res.data.msg.base.title
        this.m_summary = res.data.msg.base.summary
      }
    })
    axios.get(`/cgi-bin/WXUnprocessV2?pid=${this.detailId}&row=2&curr=1&soid=0`).then(res => {
      this.prolist = res.data.info.list
    })
  }
}
</script>

<style lang="scss">
.container{
    width: 95%;
    margin-left: 2.5%;
}
.lovelovedetail_szh{
    width: 100%;
    height: 400px;
    overflow: hidden;

}
h2{
   font-weight: 400;;
}
h2{
    font-size: 28px;
    padding: 10px 0;
    margin-bottom: 10px;
}
.show{
    height: auto;
}
.hide{
    height: 600px;
    overflow: hidden;
    position: relative;

}
.po{
    position: relative;
    .mask{
        background: linear-gradient(rgba(255, 255, 255, 0),rgb(255, 255, 255,1));
        position: absolute;
        bottom: 50px;
        height: 30px;
        width: 100%;
        z-index: 66;
    }
}

.switch_of_open{
    height: 50px;
    font-size: 16px;

    text-align: center;
    line-height: 50px;
}

.content_szh{
        width: 100%;
        color: #3c5a6e;
        img{
            display: inline-block;
            width: 90%;
            margin: 20px 5%;
        }
        h3{
                font-size: 18px;
                padding: 5px 0;
                font-weight: 400;
                p,b{
                    font-size: 16px;
                    line-height: 30px;
                    font-weight: 400;

                }
            }
    }

.pubpro{
    .pubprotitle{
        font-size: 20px;
        font-weight: 400;
        padding: 10px 0;
    }
    .pubprocontent{
        margin-top: 10px;
        line-height: 30px;
        color: #3c5a6e;
        font-size: 18px;
        height: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
    }
}
.proitem{
    border-top: 1px solid #ccc;
    padding-bottom: 10px;
    .proitem_head{
        h4{
            padding: 5px 0;
            font-size: 18px;
            font-weight: 400;
            margin-top: 10px;
        }
        p{
           color: #607d8b;
           font-size:16px ;
           margin-top: 5px;
        }
    }
    .proitem_content{
        margin-top: 10px;
        line-height: 30px;
        color: #3c5a6e;
        font-size: 18px;
        height: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
    }
}
</style>
