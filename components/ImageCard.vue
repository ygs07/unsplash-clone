<script setup lang="ts">
const props = defineProps({
  image: Object,
  loading_image: Boolean,
});

const loading_image = ref(true);
</script>
<template>
  <div>
    <div
      class="cursor-zoom-in relative mb-4 break-inside-avoid rounded-lg overflow-hidden 1§"
      @click="
        () => {
          $emit('viewImage', props.image);
        }
      "
    >
      <div class="aspect-w-4 aspect-h-3 w-full h-full bg-gray-300">
        <div
          v-show="props.loading_image === true"
          :style="{ width: props.image?.width + 'px' }"
          class="bg-gray-300 animate-pulse h-64"
        ></div>
        <img
          v-show="props.loading_image === false"
          :src="props.image?.urls.regular"
          class="object-cover"
          @load="
            () => {
              console.log('sas');
              loading_image = false;
              $emit('imagesLoaded');
            }
          "
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start p-4 text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <div class="flex flex-col">
            <div v-show="loading_image == false">
              <h4 class="font-light">{{ props.image?.user.name }}</h4>
              <p class="text-sm font-semibold">
                {{ props.image?.user.location }}
              </p>
            </div>
            <div v-show="loading_image == true">
              <span
                class="inline-flex h-2 bg-slate-700 items-center w-10 rounded-full px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
