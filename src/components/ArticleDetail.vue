<template>
  <div class="article_con">
     <h2>{{articleCon.title}}</h2>
     <p class='sub'>
        <span>发表于{{articleCon.create_time}}</span>
        <span>分类于{{articleCon.kinds}}</span>
     </p>
     <p class="con">{{articleCon.content}}</p>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'ArticleDetial',
  data(){
   return{

   }

  },
  computed:{
    ...mapState(['articleCon'])
  },
  methods:{
   
  },
  created:function(){
     this.$store.dispatch('getArticle',this.$route.params.id)
  },
}
</script>

<style scoped>
  h2{
      text-align: center;
      font-weight: bold;
      font-size: 30px;
  }
  .sub{
      text-align: center;
      color:#999;
  }
  .sub span:not(:last-child){
      padding-right:10px;
      border-right:2px solid #999;
  }
  .con{
      margin-top:50px;
      
  }
</style>
