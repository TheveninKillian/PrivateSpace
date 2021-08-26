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
