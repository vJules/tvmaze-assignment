<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
</script>

<template>
  <TheHeader> </TheHeader>
  <RouterView />
  <TheFooter class="the-footer"></TheFooter>
</template>

<style>
@import "@/assets/base.css";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  font-weight: normal;
}

.the-footer {
  margin-top: auto;
}
</style>
