<template>
  <section class="main-info">
    <h1 class="main-info__title">Weather forecast</h1>
    <img
      :src="require(`../../assets/icons/weather/${iconCode}.svg`)"
      :alt="iconDescription"
      class="main-info__icon"
    />
    <span class="main-info__temp">
      <span class="sr-only">current temperature</span>
      {{ calculateTemp(temperature, 1) }}<sup>°</sup>
    </span>
    <span class="main-info__place"> {{ city }}, {{ country }} </span>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { calculateTemp } from "@/utils";
export default defineComponent({
  name: "MainInfo",
  props: {
    iconCode: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    temperature: {
      type: Number,
      required: true
    },
    iconDescription: {
      type: String
    }
  },
  setup() {
    return { calculateTemp };
  }
});
</script>

<style lang="scss" scoped>
.main-info {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  padding: 30px 0;

  &__title {
    font-size: 1rem;
    margin-bottom: 15px;
  }

  &__icon {
    margin: 10px;
    width: 100px;
    height: 100px;
    margin-bottom: 0;
  }

  &__temp {
    font-size: 3em;
    font-weight: bold;

    sup {
      font-size: 1.5rem;
    }
  }

  &__place {
    color: #9ca3ad;
  }
}

@media all and (min-width: 1000px) {
  .main-info__title {
    margin: 0;
    font-size: 0.8rem;
  }
}
</style>
