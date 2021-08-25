import Vue from 'vue';
import App from './app';
import api from './plugins/api';

Vue.use(api);

const test = document.querySelector('#test');
if (test)
  new Vue({
    el: test,
    render(h) {
      return h(App);
    },
  });
