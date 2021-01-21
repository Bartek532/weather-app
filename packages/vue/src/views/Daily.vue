<template>
  <div class="daily">
    <div class="daily__main">
      <MainInfo
        :main="selectedDayWeatherInfo.mainData"
        :additional="selectedDayWeatherInfo.additionalData"
      />
    </div>
    <div class="daily__additional">
      <HourlyWeather :temp="selectedDayWeatherInfo.temperature" />
      <DaysList
        :weather="$store.state.dailyWeather.daily"
        :activeDayIndex="currentSelectedDayIndex"
        @change-active-day="currentSelectedDayIndex = $event"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { getWeatherInfoAboutSelectedDay } from "@/utils";
import { useStore } from "vuex";
import MainInfo from "@/components/daily/MainInfo.vue";
import HourlyWeather from "@/components/daily/HourlyWeather.vue";
import DaysList from "@/components/daily/DaysList.vue";
export default defineComponent({
  components: {
    MainInfo,
    HourlyWeather,
    DaysList
  },
  setup() {
    const store = useStore();
    const currentSelectedDayIndex = ref(0);

    const selectedDayWeatherInfo = computed(() =>
      getWeatherInfoAboutSelectedDay(
        currentSelectedDayIndex.value,
        store.state.dailyWeather.daily
      )
    );

    return {
      currentSelectedDayIndex,
      selectedDayWeatherInfo
    };
  }
});
</script>

<style lang="scss" scoped>
.daily {
  max-width: 550px;
}
@media all and (min-width: 1000px) {
  .daily {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0 40px 0;
    max-width: 100%;

    &__additional {
      width: 500px;
    }
  }
}
</style>
