import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    is_check : -1
}
const mutations = {
    SET_IS_CHECK(state,is_check){
        state.is_check = is_check
    }
}

const store = new Vuex.Store({
    state,
    mutations
  })
  
  export default store;