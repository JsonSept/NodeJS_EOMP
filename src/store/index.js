import { createStore } from 'vuex'
import axios from 'axios'

// axios.defaults.withCredentials = true;

const baseUrl = 'http://localhost:8090'

export default createStore({
  state: {
    products:null,
    users: null,
  },
  getters: {
  },
  mutations: {
    setProduct(state,payload){
      state.products = payload
    },
    setUsers(state,payload){
      state.users = payload
    }
  },
  actions: {
    async getProduct({commit}){
      let {data} = await axios.get(baseUrl + '/products')
      // console.log(data);
      commit('setProduct', data)
    },

    async getPost({commit}, productDetails){
      await axios.post(baseUrl + '/products', productDetails)
      window.location.reload()
    },

    async deleteItem({commit}, prodName){
      console.log(prodName);
      await axios.delete(baseUrl + '/products/' + prodName)
      window.location.reload()
    },

    async getPatch({commit}, update){
      console.log(update);
      await axios.patch(baseUrl + '/products/' + update.prodID, update)
      window.location.reload()
    },


    async getUsers({commit}){
      let {data} = await axios.get(baseUrl + '/users')
      // console.log(data);
      commit('setUsers', data)
    },

    async addUsers({commit}, userDetails){
      await axios.post(baseUrl + '/users', userDetails)
      window.location.reload()
    },

    async deleteUsers({commit}, userName){
      console.log(userName);
      await axios.delete(baseUrl + '/users/' + userName)
      window.location.reload()
    },

    async editUsers({commit}, update){
      console.log(update);
      await axios.patch(baseUrl + '/users/' + update.userID, update)
      window.location.reload()
    }
  },
  modules: {
  }
})
