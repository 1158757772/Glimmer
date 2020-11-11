<template>
  <div id="onetoone">
      <header>
        <p>一对一定向结对</p>
        <p>做彼此的<span>专属天使</span></p>
        <p>已有139.967受助者得到结对支持</p>
      </header>
      <main>
        <div class="longevity">
          <h3>本周寿星</h3>
          <onetooneSwiper>
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
          </onetooneSwiper>
        </div>
      </main>
  </div>
</template>

<script>
import onetooneSwiper from './onetoone/onetooneSwiper'

import axios from 'axios'

export default {
  components: {
    onetooneSwiper
  },
  mounted () {
    axios({
      url: '/cgi-bin/gywcom_1V1HelpFilterCondition.fcgi?tag=1',
      headers: {
        'content-type': 'application/json'
      },
      method: 'post',
      data: [{ type: '1', birthday: '11,8,11,14' }, { type: '1', birthday: '11,1,11,30' }, { type: '1', search_way: '1' }, { type: '1', search_way: '1', birthday: '10,24,11,22' }, { type: '1', search_way: '0' }]

    })
      .then(res => {
        console.log(res.data)
      })
  }
}
</script>

<style scoped>
  #onetoone{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  header{
    height: 20%;
    background-image: url(https://mat1.gtimg.com/gongyi/1v1/index/index-bannerbg.png);
    background-size: cover;
    padding: 3%;
  }
  header p:nth-child(1),header p:nth-child(2){
    font-size: 20px;
    line-height: 36px;
  }
  header p:nth-child(3){
    font-size: 15px;
    line-height: 36px;
  }
  header span{
    color: #f00;
  }
  main{
    flex: 1;
  }
  .longevity{
    padding: 3%;
  }
  .longevity h3{
    line-height: 50px;
  }
</style>
