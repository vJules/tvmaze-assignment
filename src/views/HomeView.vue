<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getShows } from "@/api/shows";
import TvShowsSlider from "@/components/content/TvShowsSlider.vue";
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";
import type { GenreViewModel } from "@/models/TvShow/GenreViewModel";
import { showsToGenreList } from "@/lib/showsToGenreList";

const genres = ref({} as GenreViewModel[]);
const isLoading = ref(true);
const hasError = ref(false);

const getTvShows = async () => {
  isLoading.value = true;
  try {
    const response = await getShows();
    genres.value = showsToGenreList(response);
  } catch (error) {
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  getTvShows();
});
</script>

<template>
  <main>
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
    <div v-else-if="hasError" class="error">Error happended</div>
    <div v-else-if="genres.length > 0" class="container">
      <TvShowsSlider
        v-for="genre in genres"
        :key="genre.name"
        :title="genre.name"
        :shows="genre.shows"
      ></TvShowsSlider>
    </div>
  </main>
</template>
