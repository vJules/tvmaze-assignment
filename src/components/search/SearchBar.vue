<script setup lang="ts">
import type { SearchResult } from "@/models/Search/SearchResult";
import { ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

const emit = defineEmits(["input", "reset"]);
const route = useRoute();

const props = defineProps<{
  searchResults: SearchResult[];
}>();

const searchValue = ref("");

const setSearchValue = (event: Event) => {
  searchValue.value = (event.target as HTMLInputElement).value;
  emit("input", searchValue.value);
};

watch(
  () => route.params.id,
  async (newId) => {
    if (newId) {
      searchValue.value = "";
      emit("reset");
    }
  },
  { immediate: true }
);
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div
    class="search-bar"
    :class="{
      'search-bar--results-active': props.searchResults.length,
    }"
  >
    <input
      class="search-bar__input"
      type="search"
      @input="(event) => setSearchValue(event)"
      :value="searchValue"
      :placeholder="($attrs.placeholder as string)"
    />
    <div
      class="search-bar__results"
      :class="{ 'search-bar__results--active': props.searchResults.length }"
    >
      <RouterLink
        class="search-bar__result-item"
        v-for="result in props.searchResults"
        :key="result.link"
        :to="result.link"
      >
        {{ result.title }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.search-bar {
  &__input {
    width: 100%;
    padding: 10px 15px;
    transition: border-color 0.25s ease-in;
    border: 2px solid transparent;
    border-radius: 50px;
    font-size: 20px;
    z-index: 1;
    &:hover {
      border-color: var(--color-grey-d8);
    }
    &:focus {
      outline: none;
      border-color: var(--color-primary);
    }
  }

  &__results {
    transition: opacity 0;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: 0;
    right: 0;
    background-color: var(--color-white);
    border-left: 1px solid var(--color-grey-d8);
    border-right: 1px solid var(--color-grey-d8);
    border-bottom: 1px solid var(--color-grey-d8);
    z-index: 2;

    &--active {
      transition: opacity 0.25s ease-in-out;
      opacity: 1;
      visibility: visible;
    }
  }
  &__result-item {
    padding: 10px 10px;
    display: block;
    color: var(--color-text);
    text-decoration: none;
    &:nth-child(odd) {
      background-color: var(--color-grey-ee);
    }
    &:hover {
      color: var(--color-primary);
    }
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 50%;
    background-color: var(--color-white);
    opacity: 0;
    border-left: 1px solid var(--color-grey-d8);
    border-right: 1px solid var(--color-grey-d8);
    transition: opacity 0;
  }
  &--results-active {
    .search-bar__input:not(:focus) {
      border-color: var(--color-grey-d8);
    }
    &::after {
      transition: opacity 0.25s ease-in-out;
      opacity: 1;
    }
  }
}
</style>
