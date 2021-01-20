<template>
  <div class="search">
    <label htmlFor="search">Search</label>
    <input
      id="search"
      type="text"
      placeholder="Search city"
      class="search__input"
      v-model="query"
      @keyup.enter="search"
    />
    <button
      class="search__btn search__btn--default"
      aria-label="search"
      @click="$emit('search', query)"
    >
      <img src="@/assets/icons/defaultSearch.svg" alt="search-icon" />
    </button>
    <button
      class="search__btn search__btn--location"
      aria-label="search-by-location"
      @click="$emit('search-by-location')"
    >
      <img src="@/assets/icons/locationSearch.svg" alt="location-search-icon" />
    </button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const query = ref("");

    return { query };
  }
});
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  top: 0;
  left: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;

  &__input {
    background: transparent;
    padding: 10px;
    font-size: 1rem;
    border: 0 none;
    border-bottom: 2px solid #000;
    width: 60vw;
    max-width: 400px;
    outline: 0 none;
    margin-right: 20px;

    &:focus {
      box-shadow: 0 3px 3px -1px gray;
      transition: 0.3s;
    }
  }

  &__btn {
    cursor: pointer;
    padding: 8px;
    border: 0 none;
    font-weight: bold;
    font-size: 1.3em;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
      opacity: 0.5;
      transition: opacity 0.2s;
    }

    img {
      width: 27px;
      height: 27px;
    }
  }
}
</style>
