<script setup >
const props = defineProps({
  width: String,
});
</script>

<template>
  <div
    class="h-64 bg-gray-300 animate-pulse flex items-end justify-start"
    :style="{
      width: props.width + 'px',
    }"
  >
    <div class="flex flex-col space-y-3 p-4 text-white text-xl">
      <span
        class="inline-flex items-center w-10 rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
      ></span>
      <span
        class="inline-flex items-center w-20 rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
      ></span>
    </div>
  </div>
</template>

<style scoped></style>
