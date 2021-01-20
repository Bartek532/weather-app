<template>
  <form class="search" @submit="search">
    <label htmlFor="search" class="sr-only">Search</label>
    <input
      id="search"
      type="search"
      role="search"
      placeholder="Search city"
      class="search__input"
      v-model="query"
    />
    <button class="search__btn search__btn--default" type="submit">
      <span className="sr-only">search</span>
      <img src="@/assets/icons/defaultSearch.svg" alt="search" />
    </button>
    <button
      class="search__btn search__btn--location"
      @click="$emit('search-by-location')"
    >
      <span className="sr-only">search by location</span>
      <img src="@/assets/icons/locationSearch.svg" alt="location-search" />
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup(prp, ctx) {
    const query = ref("");

    function search(e: Event) {
      e.preventDefault();
      ctx.emit("search", query.value);
    }

    return { query, search };
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
  padding: 20px 0;

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
