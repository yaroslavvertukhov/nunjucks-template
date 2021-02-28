<template>
  <div class="users">
    <div class="users__title">
      Тестовый компонент вывода юзеров vue
    </div>
    <div class="blocks">
      <div v-for="item in items" class="blocks__item">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'testComponent',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.users {
  margin: 20px 0;
  &__title {
    font-size: 20px;
  }
}
.blocks {
  display: flex;
  flex-wrap: wrap;
  &__item {
    width: 30%;
  }
}
</style>
