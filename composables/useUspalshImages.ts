import { createApi } from 'unsplash-js';
import { ref } from 'vue';

export const useUnsplashImages = () => {
  const unsplash = createApi({
    accessKey: 'j9xlOVdHz-uNKrNEFS7XWzrTNtVUvRtRUHsRxXeEAVw',
    //...other fetch options if needed
  });

  const images = ref<any[]>([]);  // Holds fetched images
  const loading_images = ref(true); // Loading state

  const getImages = (search: string = 'African') => {
    loading_images.value = true;
    unsplash.search
      .getPhotos({
        query: search,
      })
      .then((response) => {
        images.value = response.response?.results || [];  // Ensure to handle undefined results
        loading_images.value = false;
      })
      .catch(() => {
        loading_images.value = false;  // Ensure to stop loading on error
      });
  };

  return {
    images,
    loading_images,
    getImages,
  };
};
