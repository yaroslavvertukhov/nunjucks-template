<template>
  <test-component
    :items="users"
  />
</template>

<script>
import api from "@/helpers/api";
import testComponent from './components/test-component';

export default {
  name: 'App',
  mixins: [api],
  components: {
    testComponent,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.testAPI()
      .then((response) => {
        const users = response.data;
        this.users = users;
      });
  },
};
</script>
