<template>
  <div class="users">
    <div class="users__title">Тестовый компонент вывода юзеров</div>
    <div class="blocks">
      <div v-for="item in items" :key="item.name" class="blocks__item">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test-component',
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
