import Vue from 'vue'
import Vuex from 'vuex'
import * as navStore from './navStore'
import * as profileStore from './profileStore'
import * as loginStore from './loginStore'
import * as signupStore from './signupStore'

Vue.use(Vuex)

const createStore = ()=> {
    return  new Vuex.Store({
        modules: {
         navStore,
         profileStore,
         loginStore,
         signupStore,
        }
      })
}

export default createStore;