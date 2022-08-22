<template>
  <div class="default-box" :class="{ highlight }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    highlight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss">
.default-box {
  @apply flex bg-gray-200 h-52 w-full sm:rounded sm:shadow border border-gray-300
  hover:bg-gray-600 hover:text-gray-50;
}

.default-box.highlight {
  @apply bg-blueGray-600 text-gray-50;
}
</style>