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
      <div class="aspect-w-4 aspect-h-3">
        <div
          v-if="props.loading_image === true"
          :style="{ width: props.image.width + 'px' }"
          class="bg-gray-300 animate-pulse h-64"
        ></div>
        <img
          v-if="props.loading_image === false"
          :src="props.image.urls.regular"
          class="w-full h-full object-cover"
          @load="
            () => {
              loading_image = false;
              $emit('imagesLoaded');
            }
          "
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start p-4 text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <div class="flex flex-col">
            <h4 class="font-light">{{ props.image.user.name }}</h4>
            <p class="text-sm font-semibold">{{ props.image.user.location }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-show="loading_image == true" class="">
      <ImageCardLoader :width="props.image.width" v-show="loading_image" />
    </div> -->
  </div>
</template>

<style scoped></style>
