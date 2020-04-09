import Vue from 'vue';
import Vuex from 'vuex';
import appStore from './modules/appStore';
import userInfoStore from './modules/userInfoStore';

Vue.use(Vuex);
const createStore = () => {
  return new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    appStore,
    userInfoStore
  }})
}
export default createStore
