<template>
  <div>
     <ul>
         <li v-for="(item,index) in listData" :key='index'>
           <div class="brief_con">
             <h2><router-link :to="'/article/'+item.id" >{{item.title}}</router-link></h2>
             <p class='time_kind'>
               <span><i class=" fa calendar-minus-o"></i>发表于{{item.create_time}}</span>
               <span>分类于{{item.kinds}}</span>
             </p>
             <p class="con">{{item.content}}</p>
             <button @click="goArticle(item.id)">阅读原文>></button>
           </div>
           <img src="../assets/logo.png" alt="">
           <p class="clear_float"></p>
         </li>
     </ul>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Index',
  data(){
   return{

   }

  },
  computed: {
    ...mapState({
      listData: state => {
        return state.listData
      }
    })
  },
  methods:{
     goArticle(id){
         this.$router.push({ name: 'Article', params: {id}})
     }
  },

  mounted: function () {
    this.$store.dispatch('getList')
  },
  
  
}
</script>

<style scoped>
  li{
    margin-bottom:50px;
    height: 250px;

  }  
  h2{
    margin-bottom:10px;
  }
  h2 a {
    font-size:30px;
    color:#000;
    font-weight: bold;
    text-decoration:none;
    
  }
  a:hover{
    text-decoration: underline;
  }

  button{
     width: 100px;
     height:40px;
     border:none;
     outline: none;
     color: #fff;
     background:#293E4F;
     cursor: pointer;
     font-size:15px;
  }
  .brief_con{
    width:780px;
    height: 220px;
    background:red;
    float: left;
    margin-right:20px;
  }
  .brief_con .con{
    height: 120px;
    overflow: hidden;
  }
  .time_kind{
    margin-bottom:10px;
  }
  img{
    width: 200px;
    height:200px;
    float: left;
  }
  .clear_float{
    clear: left;
  }
</style>
