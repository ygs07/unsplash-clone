import { createApi } from 'unsplash-js';
import { ref } from 'vue';

export const useUnsplashImages = () => {
  const unsplash = createApi({
    accessKey: 'j9xlOVdHz-uNKrNEFS7XWzrTNtVUvRtRUHsRxXeEAVw',
    //...other fetch options if needed
  });

  const images = ref<any[]>([]);  // Holds fetched images
  const loadingImages = ref(false); // Loading state

  const getImages = (search: string = 'African') => {
    loadingImages.value = true;
    unsplash.search
      .getPhotos({
        query: search,
      })
      .then((response) => {
        images.value = response.response?.results || [];  // Ensure to handle undefined results
        loadingImages.value = false;
      })
      .catch(() => {
        loadingImages.value = false;  // Ensure to stop loading on error
      });
  };

  return {
    images,
    loadingImages,
    getImages,
  };
};
