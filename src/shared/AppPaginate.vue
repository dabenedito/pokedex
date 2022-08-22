<template>
  <div class="fixed z-90 bottom-10 right-auto left-auto border">
    <div class="flex items-center justify-center rounded-md shadow-sm" role="group">
      <button @click="previous()" type="button" class="default-button rounded-l-lg">
        Previous
      </button>

      <button @click="next()" type="button" class="default-button rounded-r-lg">
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
      default: ""
    },
    next: {
      type: Function,
      default: ""
    },
  }
};
</script>

<style scoped>
.default-button {
  @apply py-2 px-4 text-sm
  font-medium text-gray-900 hover:text-blue-700
  bg-gray-200 border border-gray-200 hover:bg-gray-100
  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700
}

.dark-theme {
  @apply dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white
}
</style>