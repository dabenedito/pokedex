<template>
  <h1 v-if="type === 1" class="text-blueGray-600 text-2xl font-bold py-4">
    <slot />
  </h1>
  <h3 class="text-blueGray-600 text-base font-bold py-4">
    <slot />
  </h3>
</template>

<script>
export default {
  porps: {
    type: String
  }
}
</script>