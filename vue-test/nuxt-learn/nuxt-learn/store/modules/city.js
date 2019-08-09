const state = () => ({
  list:['a','b']
})
// 提交
const mutations ={
  add(state,text){
    state.list.push(text)
  }
}
// 响应提交
const actions = {
  add:({commit},text) => {
    commit('add',text)
  }
}
export default {
  namespaced:true,
  state,
  mutations,
  actions
}