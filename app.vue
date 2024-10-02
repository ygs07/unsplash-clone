<script setup>
const { images, loading_images, getImages } = useUnsplashImages();

let image_search_value = ref();
let image_to_view = ref({});
let show_search_input = ref(true);
let show_modal = ref(false);
onMounted(() => {
  getImages();
});
</script>


<template>
  <div class="flex flex-col -space-y-10">
    <div class="py-24 sm:py-32 space-y-5 bg-gray-200">
      <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <SearchBar
          v-show="show_search_input == true"
          @searchForImage="
            (search_string) => {
              getImages(search_string);
              show_search_input = false;
              image_search_value = search_string;
            }
          "
        />

        <h2
          class="text-5xl font-semibold text-blue-900"
          v-show="show_search_input == false"
        >
          Search Results for "{{ image_search_value }}"

          <button
            @click="
              () => {
                image_search_value = '';
                show_search_input = true;
                getImages();
              }
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </h2>
      </div>
    </div>
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <Modal
        :image="image_to_view"
        :show_modal="show_modal"
        @closeModal="
          () => {
            show_modal = false;
          }
        "
      ></Modal>
      <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-8">
        <div
          class="relative overflow-hidden rounded-lg mb-5 group"
          v-for="(image, index) in images"
          :key="index"
        >
          <ImageCard
            @imagesLoaded="
              () => {
                console.log('loaded');
                loading_images = false;
              }
            "
            @viewImage="
              (image) => {
                image_to_view = image;
                show_modal = true;
              }
            "
            :image="image"
            :loading_image="loading_images"
          />
        </div>
      </div>
    </div>
  </div>
</template>

