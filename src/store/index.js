import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import CV from './modules/cv.store'

Vue.use(Vuex)



export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules:{ CV },
    plugins: [createPersistedState()],
    strict: process.env.DEV
  })

  return Store
}
