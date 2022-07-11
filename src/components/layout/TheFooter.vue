<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <p>Footer</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="postcss">
.footer {
  border-top: 1px solid var(--color-grey-d8);
  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
  }
}
</style>
