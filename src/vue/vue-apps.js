import Vue from 'vue';
import store from '@/store';
import App from '@/app';
import api from './plugins/api';

Vue.use(api);

new Vue({
  store,
  render(h) {
    return h(App);
  },
}).$mount('#vue-test');
