<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps<{
  msg: string;
}>();
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="inner-header">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <nav class="navigation">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
@media (--md-viewport) {
  .header {
    background-color: green;
  }

  .inner-header {
    display: flex;
    align-items: center;
  }

  .navigation {
    margin-left: auto;
    display: flex;
  }
}
</style>
