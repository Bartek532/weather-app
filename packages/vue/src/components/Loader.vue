<template>
  <div class="loader">
    <span class="sr-only">loading</span>
    <div class="loader__ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &__ring {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 60px;
  }
  &__ring div {
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    margin: 8px;
    border: 5px solid#5e2ce6;
    border-radius: 50%;
    animation: loading 0.6s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #5e2ce6 transparent transparent transparent;
  }
  &__ring div:nth-child(1) {
    animation-delay: -0.15s;
  }
  &__ring div:nth-child(2) {
    animation-delay: -0.1s;
  }
  &__ring div:nth-child(3) {
    animation-delay: -0.05s;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
