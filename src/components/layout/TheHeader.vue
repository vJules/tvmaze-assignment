<script setup lang="ts">
import TheLogo from "@/components/layout/TheLogo.vue";
import TheSearch from "@/components/layout/TheSearch.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <TheLogo></TheLogo>
        <TheSearch class="header__search"></TheSearch>
      </div>
    </div>
  </header>
</template>

<style scoped lang="postcss">
.header {
  background-color: var(--color-header-background);
  padding-bottom: 15px;
  box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.1);
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__search {
    width: 100%;
  }
  @media (--md-viewport) {
    padding-bottom: 0;

    &__inner {
      flex-direction: row;
    }
    &__search {
      margin-left: auto;
      width: auto;
    }
  }
}
</style>
