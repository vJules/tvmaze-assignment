<script setup lang="ts">
import { searchShowsByName } from "@/api/shows";
import debounce from "@/helper/debounce";
import type { SearchResult } from "@/models/Search/SearchResult";
import { ref } from "vue";
import SearchBar from "../search/SearchBar.vue";

const searchResults = ref([] as SearchResult[]);
const isLoading = ref(true);

const searchShows = async (value: string) => {
  isLoading.value = true;
  try {
    const response = await searchShowsByName(value);
    searchResults.value = response.map((show) => ({
      link: `/show/${show.id}`,
      title: show.name,
    }));
  } catch (error) {
    console.log("error", error);
  } finally {
    isLoading.value = false;
  }
};
const resetSearch = () => {
  searchResults.value = [];
};

const search = debounce((value: string) => searchShows(value), 300);
</script>

<template>
  <div class="the-search">
    <SearchBar
      :searchResults="searchResults"
      @input="search"
      @reset="resetSearch"
      class="the-search__search-bar"
      placeholder="Search shows"
    ></SearchBar>
  </div>
</template>

<style scoped lang="postcss"></style>
