<template>
  <div class="hourly__weather">
    <HourlyWeatherItem
      v-for="(item, index) in weather.slice(1, 4)"
      :key="item.dt"
      :time="calculateHour(time.hour, index + 1)"
      :temp="item.temp"
      :icon="item.weather[0].icon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BasicWeatherInfo, Timezone } from "@/types";
import HourlyWeatherItem from "./HourlyWeatherItem.vue";
import { calculateHour } from "@/utils";

export default defineComponent({
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
