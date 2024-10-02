<script setup>
const image_search_value = ref("");
</script>

<template>
  <div class="relative flex-auto bg-white rounded-lg">
    <input
      type="search"
      aria-label="Search for Photos"
      placeholder="Search for Photos"
      class="block focus-within:ring-indigo-600 ring-0 focus:ring-1 focus:ring-indigo-600 w-full appearance-none rounded-lg bg-transparent py-6 pl-9 pr-4 text-base text-slate-900 transition placeholder:text-slate-400 focus:outline-none sm:text-[0.8125rem] sm:leading-6 [&amp;::-webkit-search-cancel-button]:appearance-none [&amp;::-webkit-search-decoration]:appearance-none [&amp;::-webkit-search-results-button]:appearance-none [&amp;::-webkit-search-results-decoration]:appearance-none"
      v-model="image_search_value"
      @keyup.enter="
        () => {
          $emit('searchForImage', image_search_value);
          image_search_value = '';
        }
      "
    /><svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      class="pointer-events-none absolute ml-2 inset-y-0 left-0 h-full w-5 fill-slate-500 transition"
    >
      <path
        d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"
      ></path>
    </svg>
  </div>
</template>

<style scoped></style>
