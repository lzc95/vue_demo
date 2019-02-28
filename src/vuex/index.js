import Vue from 'vue'
import Vuex from 'vuex'
import { default as actions } from './actions'
import { default as getters } from './getters'
import { default as state } from './state'
import { default as mutations } from './mutation'

Vue.use(Vuex)

const storeFactory = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default storeFactory

