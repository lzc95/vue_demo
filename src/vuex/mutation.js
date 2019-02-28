import * as types from './types'

export default {
  
  [types.GET_LIST](state,payload){
     state.listData = payload.data
  },
  [types.GET_ARTICLE](state,payload){
    state.articleCon = payload.data[0]
  }
 
}
