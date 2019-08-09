const state = () => ({
  app:[]
})
// 提交
const mutations ={
  add(state,text){
    state.app.push(text)
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