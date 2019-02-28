
import * as types from './types'
import axios from 'axios'


export const getList=function({commit}){
    axios.get('/api/getList')
     .then((res)=>{
          commit({
             type:types.GET_LIST,
             data:res.data.data
          })  
     })
     .catch((err)=>{
       console.log(err)
     })
}

export const getArticle=function({commit},id){
    
  axios.get('/api/getArticle')
    .then((res)=>{
          commit({
            type:types.GET_ARTICLE,
            data:res.data.data
          })
    })
    .catch((err)=>{
      console.log(err)
    })

}

export default {
  getList,
  getArticle
}
