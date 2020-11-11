<template>
  <div id="onetoone">
      <header>
        <p>一对一定向结对</p>
        <p>做彼此的<span>专属天使</span></p>
        <p>已有139.967受助者得到结对支持</p>
      </header>
      <main></main>
  </div>
</template>

<script>
export default {

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
</style>
