<template>
  <div class="error__wrapper__text">
    Niestety <span class="not-found">nie znaleziono</span> tego, czego szukasz
    lub wystąpił <span class="error">błąd</span>, spróbuj ponownie!
  </div>
</template>

<style lang="scss">
.error__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;

  &__text {
    width: 80%;
    max-width: 500px;
    font-size: 1.8rem;
    text-align: center;
    font-weight: bold;
    padding: 20px 0;

    .not-found {
      color: #2e5fe6;
    }

    .error {
      color: #d11d22;
    }
  }
}
</style>
