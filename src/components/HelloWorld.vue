<template>
  <div class="hello">
      <!-- <p>{{count}}</p> -->
      <!-- <button @click="LIST_INCREASE({data:2})">+</button>
      <button @click="jian(1)">-</button> -->
  </div>
</template>

<script>
// import {mapState, mapActions, mapMutations} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // computed:{
  //   ...mapState('list',['count'])
  // },
  // methods:{
  //   ...mapActions('list',['jia','jian']),
  //   ...mapMutations('list',['LIST_INCREASE'])
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
