import Vue from 'vue';
import { Carousel } from 'ant-design-vue';
if (process.client) {
  require('babel-polyfill')
  window.history.replaceState = window.history.replaceState || function () {}
}
Vue.use(Carousel);

