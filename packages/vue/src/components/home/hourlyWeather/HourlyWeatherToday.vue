<template>
  <article class="hourly__weather">
    <HourlyWeatherItem
      v-for="(item, index) in weather.slice(1, 4)"
      :key="item.dt"
      :time="calculateHour(time.hour, index + 1)"
      :temp="item.temp"
      :icon="item.weather[0].icon"
      :iconDescription="item.weather[0].description"
    />
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { BasicWeatherInfo, Timezone } from "@/types";
import HourlyWeatherItem from "./HourlyWeatherItem.vue";
import { calculateHour } from "@/utils";

export default defineComponent({
    name: 'HourlyWeatherToday',
  components: {
    HourlyWeatherItem
  },
  props: {
    weather: {
      type: Array as () => Partial<BasicWeatherInfo>[],
      required: true
    },
    time: {
      type: Object as () => Timezone,
      required: true
    }
  },

  setup() {
    return { calculateHour };
  }
});
</script>

<style></style>
