<template>
  <div class="home">
    <div class="home__main">
      <MainInfo
        :iconCode="currentWeather.weather[0].icon"
        :city="currentWeather.name"
        :country="timezone.countryName"
        :temperature="currentWeather.main.temp"
        :iconDescription="currentWeather.weather[0].description"
      />
    </div>
    <div class="home__additional">
      <HourlyWeather :weather="dailyWeather.hourly" :timezone="timezone" />
      <AdditionalInfo
        :wind="currentWeather.wind.speed"
        :pressure="currentWeather.main.pressure"
        :humidity="currentWeather.main.humidity"
        :cloudiness="currentWeather.clouds.all"
      />
    </div>
  </div>
</template>

<script lang="ts">
import MainInfo from "@/components/home/MainInfo.vue";
import HourlyWeather from "@/components/home/hourlyWeather/HourlyWeather.vue";
import AdditionalInfo from "@/components/home/AdditionalInfo.vue";
import { useStore } from "vuex";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    MainInfo,
    HourlyWeather,
    AdditionalInfo
  },
  setup() {
    const store = useStore();
    const currentWeather = store.state.currentWeather;
    const dailyWeather = store.state.dailyWeather;
    const timezone = store.state.timezone;

    return { currentWeather, dailyWeather, timezone };
  }
});
</script>

<style lang="scss" scoped>
.home__additional {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
}

@media all and (min-width: 1000px) {
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 90px 0;

    &__main {
      transform: scale(1.7) translateY(-20px);
      margin-right: 200px;
    }

    &__additional {
      transform: scale(1.1);
    }
  }

  .additional-info {
    transform: scale(1.1);
    width: 105%;
  }
}

@media all and (min-width: 1400px) {
  .home__main {
    margin-right: 270px;
  }
}

@media all and (min-height: 1000px) {
  .home {
    margin: 150px 0;
  }
}
</style>
