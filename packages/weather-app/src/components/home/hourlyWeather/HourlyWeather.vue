<template>
  <div class="hourly">
    <div class="hourly__navbar">
      <span
        :class="[
          'hourly__navbar__item',
          { 'hourly__navbar__item--active': isTodayActive }
        ]"
        @click="isTodayActive = true"
      >
        Today
      </span>
      <span
        :class="[
          'hourly__navbar__item',
          { 'hourly__navbar__item--active': !isTodayActive }
        ]"
        @click="isTodayActive = false"
      >
        Tomorrow
      </span>
    </div>
    <HourlyWeatherToday
      :weather="weather"
      :time="timezone"
      v-if="isTodayActive"
    />
    <HourlyWeatherTomorrow :weather="weather" :time="timezone" v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { BasicWeatherInfo, Timezone } from "@/types";
import HourlyWeatherToday from "./HourlyWeatherToday.vue";
import HourlyWeatherTomorrow from "./HourlyWeatherTomorrow.vue";
export default defineComponent({
  components: {
    HourlyWeatherToday,
    HourlyWeatherTomorrow
  },
  props: {
    weather: {
      type: Array as () => Partial<BasicWeatherInfo>[],
      required: true
    },
    timezone: {
      type: Object as () => Timezone,
      required: true
    }
  },
  setup() {
    const isTodayActive = ref(true);

    return { isTodayActive };
  }
});
</script>

<style lang="scss">
.hourly {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  margin: 20px 0;

  &__navbar__item {
    padding: 0 10px;
    font-weight: bold;
    color: #9ca3ad;
    cursor: pointer;

    &--active {
      color: #000;
    }
  }

  &__weather {
    display: flex;
    margin: 12px 0;
  }
}
</style>
