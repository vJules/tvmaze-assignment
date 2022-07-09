<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <TheHeader msg="You did it!"> </TheHeader>

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

.the-footer{
  margin-top: auto;
}

</style>
