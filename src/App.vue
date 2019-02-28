<template>
  <div id="app">
    <Header/>
    <router-view class="TOP content"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components:{
    Header,
  }
}
</script>

<style>
html,body,div,header,p,ul,li,h1,h2{
  margin:0;
  padding:0;
  list-style:none;
}
.TOP{
  margin-top: 130px;
}
.content{
  max-width:1000px;
  position: relative;
  left: 50%;
  margin-left: -500px
}
</style>
