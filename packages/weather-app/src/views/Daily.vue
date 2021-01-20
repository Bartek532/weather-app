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
import { defineComponent, computed, ref, watch } from "vue";
import { getListOfDays, getWeatherInfoAboutSelectedDay } from "@/utils";
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
@media all and (min-width: 500px) {
  .days {
    .day {
      transform: scale(1.1);
    }
  }
}

@media all and (min-width: 1000px) {
  .daily {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0 40px 0;

    &__main-info {
      max-width: 350px;
      transform: scale(1.3) translateY(-20px);
      margin-right: 90px;

      &__additional {
        display: flex;
        align-self: center;
        justify-content: center;
        align-items: space-evenly;
        flex-flow: column wrap;
        max-width: 230px;
        border-left: 4px solid #5e2ce6;
        padding-left: 25px;
      }

      &__wrapper {
        margin: 10px 0;
      }
    }

    &__additional {
      width: 500px;
    }

    .days {
      margin-top: 30px;
      transform: scale(1.2);

      .day {
        margin: 0 7px;
      }
    }
  }
}

@media all and (min-width: 1200px) {
  .daily__main-info {
    margin-right: 200px;
  }
}
</style>
