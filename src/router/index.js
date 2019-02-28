import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Index = ()=> import('@/components/Index')
const Article = ()=> import('@/components/ArticleDetail')
const About = ()=> import('@/components/About')

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/article/:id',
      name:'Article',
      component:Article
    },
    {
      path:'/about',
      name:'About',
      component:About
    }
  ]
})
