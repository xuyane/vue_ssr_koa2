const state = {
  count:1
}

const mutations = {
  add(state,param){
    window.console.log(param);
    state.count+=param
  },
  reduce(state){
    state.count--
  }
}

const actions = {
  add:({commit},param)=>{
    commit('add',param)
  },
  reduce:({commit})=>{
    commit('reduce')
  }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}