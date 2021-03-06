import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  msg:'11',
  flag:false,
  foods:[]
}
const mutations = {
  setFoods(state, foods) {
    console.log(foods)
    state.foods = foods
  },
  setFlag(state,flag){
    state.flag = flag
  }
}
const actions = {
  setMsg(state,msg){
    setTimeout(() => {
      state.commit('setMsg',msg);
    }, Math.random()*3000);
  }
}
const getters = {
  msg(state){
    return state.msg.split('').join('-');
  }
}
const modules = {
  news:{
    namespaced:true,
    state:{
      title:'新聞',
      msg:''
    },
    mutations:{
      setMsg(state,msg){
        console.log('news')
        state.msg = msg + '-news';
      }
    },
    actions:{
      setMsg(state,msg){
        state.commit('setMsg',msg,{root:true});
      }
    }
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
})