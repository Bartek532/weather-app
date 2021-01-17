<template>
  <nav>
    <router-link to="/" class="link">
      <img src="@/assets/icons/home.svg" alt="home" class="link__icon" />
      <span class="link__text">Home</span>
    </router-link>
    <router-link to="/daily" class="link">
      <span class="link__text">Daily</span>
      <img
        src="@/assets/icons/calendar.svg"
        alt="calendar"
        class="link__icon"
      />
    </router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  max-width: 400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  text-align: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &__icon {
      width: 19px;
      height: 19px;
    }

    &__text {
      color: #9ca3ad;
      padding: 5px 10px;
      font-weight: bold;
    }

    &.router-link-exact-active {
      .link__icon path {
        fill: #000;
      }

      .link__text {
        color: #000;
      }
    }
  }
}

@media all and (min-width: 1000px) {
  .link {
    transform: scale(1.3);
  }
}
</style>
