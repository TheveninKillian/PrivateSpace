<script lang="ts" setup>
const props = defineProps({
  title: String,
  note: String,
})
</script>

<template>
  <div>
    <h2>{{ props.title }}</h2>

    <p>{{ props.note }}</p>
  </div>
</template>

<style lang="scss" scoped>
div{
  width: calc(100% / 5);

  border: 1px solid red;
}
</style>
