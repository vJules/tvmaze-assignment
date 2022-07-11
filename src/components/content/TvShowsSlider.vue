<script setup lang="ts">
import type { TvShowViewModel } from "@/models/TvShow/TvShowViewModel";
import TvShow from "@/components/content/TvShow.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

defineProps<{
  shows: TvShowViewModel[];
  title: string;
}>();
const breakpoints = {
  320: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  480: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  640: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  768: {
    slidesPerView: 6,
    spaceBetween: 25,
  },
};
const modules = [Navigation];
</script>

<template>
  <div class="tv-shows-slider">
    <h2 class="tv-shows-slider__heading">{{ title }}</h2>
    <Swiper
      class="tv-shows-slider__swiper"
      :breakpoints="breakpoints"
      :space-between="25"
      :modules="modules"
      :navigation="true"
    >
      <SwiperSlide v-for="show in shows" :key="show.id">
        <TvShow :show="show"></TvShow>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="postcss">
.tv-shows-slider {
  overflow: hidden;
  padding: 25px 0;
  &:hover {
    &:deep() {
      .swiper-button-next,
      .swiper-button-prev {
        opacity: 1;
      }
    }
  }
  &:deep() {
    .swiper {
      overflow: visible;
    }
    .swiper-slide {
      height: auto;
      display: flex;
      align-items: stretch;
    }
    .swiper-button-next,
    .swiper-button-prev {
      background-color: var(--color-white);
      opacity: 0.65;
      transition: opacity 0.25s ease-in-out;
      box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.35);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      color: var(--color-primary);
    }
    .swiper-button-next.swiper-button-disabled,
    .swiper-button-prev.swiper-button-disabled {
      opacity: 0;
    }
    .swiper-button-next:after,
    .swiper-button-prev:after {
      font-size: 34px;
    }
  }
}
</style>
