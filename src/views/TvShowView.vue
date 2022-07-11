<script setup lang="ts">
import { ref, watch } from "vue";
import { getShowById } from "@/api/shows";
import type { TvShowViewModel } from "@/models/TvShow/TvShowViewModel";
import TvShowDetails from "@/components/content/TvShowDetails.vue";
import { useRoute } from "vue-router";
import LoadingSpinner from "../components/ui/LoadingSpinner.vue";

const show = ref(null as TvShowViewModel | null);
const isLoading = ref(true);
const hasError = ref(true);
const route = useRoute();

const getTvShow = async (id: string) => {
  hasError.value = false;
  isLoading.value = true;
  try {
    const response = await getShowById(id);
    show.value = response;
  } catch (error) {
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
};

watch(
  () => route.params.id,
  async (newId) => {
    if (newId) {
      await getTvShow(newId as string);
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="tv-show-view">
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
    <div v-else-if="hasError" class="error">Error happended</div>
    <div class="container" v-else-if="show">
      <TvShowDetails class="tv-show-view__details" :show="show"></TvShowDetails>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.tv-show-view {
  &__details {
    padding: 25px 0;
  }
}
</style>
