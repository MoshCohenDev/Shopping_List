import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './store-tasks'
import settings from './store-setting'
import auth from './store-auth'

Vue.use(Vuex)
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      tasks,
      settings,
      auth
    },

    strict: process.env.DEBUGGING
  })

  return Store
}
