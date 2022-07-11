<script setup lang="ts">
import type { TvShowViewModel } from "@/models/TvShow/TvShowViewModel";
import { computed } from "vue";

const props = defineProps<{
  show: TvShowViewModel;
}>();

const averageRating = computed(() =>
  props.show?.rating?.average ? props.show.rating.average : "?"
);
</script>

<template>
  <div class="tv-show-details">
    <div class="tv-show-details__content">
      <div class="tv-show-details__image-container">
        <img
          class="tv-show-details__image"
          v-if="show.image"
          :src="show.image.original"
        />
      </div>
      <div class="tv-show-details__information">
        <div class="tv-show-details__intro">
          <h1 class="tv-show-details__name">{{ show.name }}</h1>

          <div class="tv-show-details__rating">
            <span class="tv-show-details__average-rating">
              {{ averageRating }}
            </span>
            / 10
          </div>
        </div>
        <p class="tv-show-details__premiered">
          Premiered: {{ show.premiered }}
        </p>

        <div class="tv-show-details__genres">
          <span
            class="tv-show-details__genre"
            v-for="genre in show.genres"
            :key="genre"
            >{{ genre }}</span
          >
        </div>
        <div class="tv-show-details__summary" v-html="show.summary"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.tv-show-details {
  &__content {
    display: flex;
    flex-direction: column;
  }
  &__image-container {
    width: 100%;
    background-color: var(--color-grey-d8);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__image {
    max-width: 100%;
    max-height: 400px;
    display: block;
  }
  &__name {
    line-height: 30px;
    margin: 0;
    padding-right: 25px;
  }
  &__intro {
    display: flex;
    justify-content: space-between;
  }
  &__information {
    padding-top: 25px;
  }
  &__rating {
    line-height: 30px;
    margin: 0;
  }
  &__average-rating {
    font-size: 26px;
  }
  &__genres {
    display: flex;
    padding-bottom: 25px;
  }
  &__premiered {
    font-size: 14px;
    padding-bottom: 15px;
    margin: 0;
    padding-bottom: 5px;
  }
  &__summary {
    padding-bottom: 15px;
  }
  &__genre {
    margin-right: 5px;
    padding: 5px 10px;
    background-color: var(--color-text);
    color: var(--color-white);
    border-radius: 5px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  @media (--md-viewport) {
    &__content {
      align-items: flex-start;
      flex-direction: row;
    }
    &__image-container {
      width: 400px;
    }
    &__image {
      max-height: none;
    }
    &__information {
      padding-top: 0;
      padding-left: 25px;
      max-width: 600px;
    }
  }
}
</style>
