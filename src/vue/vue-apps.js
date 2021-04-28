import Vue from 'vue';
import store from '@/store';
import App from '@/app';

new Vue({
  store,
  render(h) { return h(App); },
}).$mount('#vue-test');
