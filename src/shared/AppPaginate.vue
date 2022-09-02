<template>
  <div class="flex items-center justify-center pb-5">
    <div class="flex w-28 justify-center">
      <button @click="previous()" type="button" class="btn">
        Previous
      </button>

      <div class="divider divider-horizontal" />

      <button @click="next()" type="button" class="btn">
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    previous: {
      type: Function,
      default: '',
    },

    next: {
      type: Function,
      default: '',
    },
  },
};
</script>

<style scoped>
</style>