<script setup>
const props = defineProps({
  image: Object,
  show_modal: Boolean,
});
const emit = defineEmits(["closeModal"]);

const closeModal = () => {
  emit("closeModal");
};
</script>

<template>
  <div class="container mx-auto p-4">
    <!-- Fullscreen Modal with Overlay -->
    <div
      v-if="props.show_modal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <!-- Modal Content -->
      <div class="relative w-full h-full max-w-4xl mx-auto p-10 rounded-lg">
        <!-- Close button -->
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-2xl font-bold text-white"
        >
          &times;
        </button>

        <!-- Modal body content -->
        <div
          @click.stop
          class="relative bg-white w-full h-full max-w-4xl mx-auto rounded-lg overflow-hidden flex flex-col"
        >
          <div class="relative flex-grow">
            <img
              :src="props.image.urls.full"
              class="w-full h-full object-cover"
            />

            <div
              class="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white"
            >
              <h2 class="text-3xl font-bold mb-4">
                {{ props.image.user.name }}
              </h2>
              <p class="text-lg mb-6">
                {{ props.image.user.location }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      isModalOpen: false, // Tracks modal open/close state
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script> -->
