<template>
  <section class="daily__hourly-weather">
    <HourlyWeatherItem
      v-for="(item, index) in Object.values(temp)"
      :key="index"
      :temp="Number(item)"
      :hour="startHour + diffBetweenHours * index"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HourlyWeatherItem from "@/components/daily/HourlyWeatherItem.vue";
import type { Temperature } from "@/types";
export default defineComponent({
  components: {
    HourlyWeatherItem
  },
  props: {
    temp: {
      type: Object as () => Partial<Temperature>,
      required: true
    }
  },
  setup() {
    const startHour = 8;
    const diffBetweenHours = 5;

    return { startHour, diffBetweenHours };
  }
});
</script>

<style lang="scss" scoped>
.daily__hourly-weather {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px 0;
  margin-bottom: 15px;
}
</style>
