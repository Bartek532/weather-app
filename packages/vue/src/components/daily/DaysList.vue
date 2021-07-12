<template>
  <ul class="days">
    <Day
      v-for="(item, index) in weather.slice(0, 7)"
      :key="item.dt"
      :icon="item.weather[0].icon"
      :day="getListOfDays()[index]"
      :iconDescription="item.weather[0].icon"
      @click="$emit('change-active-day', index)"
      :class="{ 'day--active': activeDayIndex === index }"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import type {DailyWeatherItem} from '@/types';
import {getListOfDays} from '@/utils';
import Day from '@/components/daily/Day.vue';
export default defineComponent({
    name: 'DaysList',
    components: {
        Day
    },
    props: {
        weather: {
            type: Array as () => DailyWeatherItem[],
            required: true
        },
        activeDayIndex: {
            type: Number,
            required: true
        }
    },
    setup(){
        return {getListOfDays}
    }
})
</script>

<style lang="scss" scoped>
.days {
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 20px;
  list-style-type: none;
}

@media all and (min-width: 1000px) {
  .days {
    margin-top: 30px;
    transform: scale(1.2);
  }
}
</style>
