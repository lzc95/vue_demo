<template>
  <header> 
    <p>
      <router-link v-for="(item,index) in linkData" 
          :key='index' 
          :to="item.to"
          :class="{active:index == indexPrev}"
          @mouseover.native="changeActive(index)"
          @mouseout.native="changePrev"
      >{{item.text}}</router-link>
    </p>
  </header>
</template>

<script>
export default{
  name:'Header',
  data(){
    return{
        linkData:[
          {
            to:'/',
            text:'俄罗斯方块的记忆',
          },{
            to:'/',
            text:'首页',
          },{
            to:'/categories',
            text:'分类',
          },{
            to:'/archives',
            text:'归档'
          },{
            to:'/tags',
            text:'标签'
          },{
            to:'/openSource',
            text:'开源'
          },{
            to:'/about',
            text:'关于'
          }
        ], 
        indexPrev:-1,
    }
  },
  methods:{
      changeActive(index){
          if(index!=0){
            this.indexPrev=index
          }
      },
      changePrev(){
         this.indexPrev=-1
      }
  }
}
</script>


<style scoped>
header{
  width: 100%;
  height:80px;
  background:#293E4F;
  line-height: 80px;
  position:fixed;
  left: 0;
  top:0;
  z-index: 100;
}
a{
  color: #fff;
  text-decoration:none;
  display:block;
  float: left;
  width:100px;
  font-size:14px;
  cursor: pointer;
  text-align: center;
}
a:first-child{
  width:200px;
  margin-right: 100px;
  font-size: 18px;
}
header p{
  position: relative;
  width:1000px;
  left:50%;
  margin-left:-400px
}

.active{
  background:#fff;
  color:#293E4F
}
</style>
