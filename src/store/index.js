import Vuex from 'vuex'
import products from './modules/products'
import axios from 'axios'



export default new Vuex.Store({
  state:{
    counter: [],
    // colorCode: 'red'
  },
  mutations:{
    increaseCounter(state, mydata ){
      state.counter =  mydata
    }
  },
  actions:{
increaseCounter({commit}){
  axios('http://localhost:3000/card').then(response =>{
    commit('increaseCounter', response.data)
  })
}
  },
  getters:{
    myGettter(state){
      return state.counter
    }
  },
  modules: {
    products,

  }
})