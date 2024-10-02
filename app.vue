<script setup>
const { images, loading_images, getImages } = useUnsplashImages();

onMounted(() => {
  getImages();
});
</script>

<template>
  <div></div>
</template>
