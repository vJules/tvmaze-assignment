<script setup lang="ts">
import IconLogo from "@/components/icons/IconLogo.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink to="/" class="logo">
    <IconLogo class="logo__icon"></IconLogo>
    <span class="logo__title">
      TVmaze<br />
      Demo</span
    >
  </RouterLink>
</template>

<style scoped lang="postcss">
.logo {
  display: flex;
  align-items: center;
  color: var(--color-white);
  text-decoration: none;

  &__title {
    font-weight: bold;
    transition: opacity 0.25s ease-in-out;
    opacity: 0.75;
  }

  &__icon {
    width: 80px;
    height: 80px;
  }

  &:hover {
    .logo__title {
      opacity: 1;
    }
  }
}
</style>
