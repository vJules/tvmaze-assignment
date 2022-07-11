<script setup lang="ts">
import type { TvShowViewModel } from "@/models/TvShow/TvShowViewModel";
import { RouterLink } from "vue-router";

const props = defineProps<{
  show: TvShowViewModel;
}>();
</script>

<template>
  <RouterLink :to="`/show/${props.show.id}`" class="tv-show">
    <img class="tv-show__image" :src="props.show.image.medium" />
    <div class="tv-show__details">
      <h3 class="tv-show__name">{{ props.show.name }}</h3>
      <div class="tv-show__rating">{{ props.show.rating.average }} / 10</div>
    </div>
  </RouterLink>
</template>

<style scoped lang="postcss">
.tv-show {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--color-text);
  position: relative;

  &__name {
    transition: color 0.25s ease-in-out;
    padding-bottom: 5px;
    font-size: 14px;
    line-height: 14px;
  }

  &::after {
    content: "";
    display: block;
    transition: opacity 0.25s ease-in-out;
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }

  &__image {
    max-width: 100%;
    max-height: 100%;
  }

  &__details {
    border-left: 1px solid transparent;
    border-bottom: 1px solid transparent;
    border-right: 1px solid transparent;
    transition: border-color 0.25s ease-in-out,
      background-color 0.25s ease-in-out;
    padding: 5px 5px;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
  }

  &__rating {
    font-size: 12px;
    line-height: 12px;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
    .tv-show__details {
      border-color: var(--color-grey-d8);
    }
    .tv-show__name {
      color: var(--color-primary);
    }
  }
}
</style>
