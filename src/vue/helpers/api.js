import axios from 'axios';

export default {
  data() {
    return {
      CancelTokens: {},
    };
  },
  methods: {
    testAPI() {
      return axios.get(`${process.env.API_URL_TEST}/users`);
    },
  },
};
