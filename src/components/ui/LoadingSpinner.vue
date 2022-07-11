<template>
  <div class="loading-spinner">
    <div class="loading-spinner__spinner"></div>
  </div>
</template>

<style scoped lang="postcss">
.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 300px;
  &__spinner {
    border: 8px solid var(--color-grey-ee);
    border-top: 8px solid var(--color-primary);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
