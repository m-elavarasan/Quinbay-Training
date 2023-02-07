// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productData: {},
    cartData: [],
    userData: {
      username: 'admin',
      password: 'admin'
    }
  },
  getters: {
    getProductData(state) {
      return state.productData
    },
    getCartData(state) {
      return state.cartData
    },
    getUserData(state) {
      return state.userData
    }
    },
  mutations: {
    setProductData(state, data) {
      console.log('Inside Product Mutation');
      state.productData = data.data
    },
    addToCart(state, item) {
      console.log('Inside Cart Mutation');
      const index = state.cartData.findIndex(i => i.id === item.id)
      if (index === -1) {
        state.cartData.push({ ...item, count: 1 })
      } else {
        state.cartData[index].count++
      }
    },
    updateCartData (state, cartData) {
      state.cartData = cartData;
    },
    resetCartData(state) {
      state.cartData = [];
    }
  },
  actions: {
    setProductData({commit}, data) {
      console.log('inside product action');
      commit('setProductData', data)
    },
    addToCart({commit}, item) {
      console.log('inside addToCart action');
      commit('addToCart', item)
    },
    updateCartData({ commit }, cartData) {
      console.log('inside updateCartData action');
      commit('updateCartData', cartData)
      },
      resetCartData({ commit }) {
        commit('resetCartData');
      },
  },
  modules: {
  }
})
