<template>
  <div class="home">
    <div class="home__main">
      <MainInfo
        :iconCode="$store.state.currentWeather.weather[0].icon"
        :city="$store.state.currentWeather.name"
        :country="$store.state.timezone.countryName"
        :temperature="$store.state.currentWeather.main.temp"
        :iconDescription="$store.state.currentWeather.weather[0].description"
      />
    </div>
    <div class="home__additional">
      <HourlyWeather
        :weather="$store.state.dailyWeather.hourly"
        :timezone="$store.state.timezone"
      />
      <AdditionalInfo
        :wind="$store.state.currentWeather.wind.speed"
        :pressure="$store.state.currentWeather.main.pressure"
        :humidity="$store.state.currentWeather.main.humidity"
        :cloudiness="$store.state.currentWeather.clouds.all"
      />
    </div>
  </div>
</template>

<script lang="ts">
import MainInfo from "@/components/home/MainInfo.vue";
import HourlyWeather from "@/components/home/hourlyWeather/HourlyWeather.vue";
import AdditionalInfo from "@/components/home/AdditionalInfo.vue";
export default {
  components: {
    MainInfo,
    HourlyWeather,
    AdditionalInfo
  }
};
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
