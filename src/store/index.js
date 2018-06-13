import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production' // 生产模式不用 strict

export default new Vuex.Store({
  modules: {
    cart,
    products
  },
  strict: debug
})
