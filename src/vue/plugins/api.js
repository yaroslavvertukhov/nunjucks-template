import axios from 'axios';

const services = {
  test: process.env.VUE_APP_API_URL_TEST,
};

const methods = {
  getUsers() {
    return axios.get(`${services.test}/users`);
  },
};

export default {
  install(Vue) {
    Vue.prototype.$api = methods;
  },
};
