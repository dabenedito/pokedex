<template>
  <div class="new-box" :class="{ highlight }">
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

.new-box {
  @apply card w-full bg-base-100 shadow-xl hover:bg-base-300
}</style>