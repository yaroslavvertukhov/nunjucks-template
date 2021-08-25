<template>
  <test-component :items="users" />
</template>

<script>
import testComponent from './components/test-component';

export default {
  name: 'app',
  components: {
    testComponent,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.$api.getUsers().then((response) => {
      const users = response.data;
      this.users = users;
    });
  },
};
</script>
