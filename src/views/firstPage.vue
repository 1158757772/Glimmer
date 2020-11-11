<template>
  <div>
    <van-search
      background="#000"
      placeholder="送出你的微光"
      @click="ToSearch"
    />
    <div class="round"></div>
    <head-card>
      
    </head-card>
      
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
import headCard from './firstpagetool/headCard';
Vue.use(Search);
export default {
  
 
  methods:{
    ToSearch(){
      this.$router.push('/search')
    }
  },
  components :{
    headCard
  }
}

</script>

<style lang="scss" scoped>
.round{
  width: 100%;
  height: 150px;
  background: black;
  border-radius: 0 0 50% 50% ;
  position: absolute;
  top: 50px;
  z-index: -99;
}
</style>>


