import Vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'
import navbar from './modules/navbar'

// const Vue = require('vue')
// const Vuex = require('Vuex')
// const city = require('./modules/city')
// const navbar = require('./modules/navbar')

const Router = require('koa-router')

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    city,
    navbar
  },
  actions: {

  }
})

export default store
