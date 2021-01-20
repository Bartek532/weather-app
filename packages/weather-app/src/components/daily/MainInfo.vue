<template>
  <div class="daily__main-info">
    <h1 class="daily__main-info__title">Weekly chart</h1>
    <div class="daily__main-info__wrapper">
      <img
        :src="require(`../../assets/icons/weather/${main.icon}.svg`)"
        alt="weather-icon"
        class="icon"
      />
      <span class="day-name">{{ main.day }}</span>
      <div class="temp">
        <span class="temp__max"> {{ calculateTemp(main.maxTemp, 0) }}°</span>
        <span class="temp__min"> {{ calculateTemp(main.minTemp, 0) }}°</span>
      </div>
    </div>

    <ul class="daily__main-info__additional">
      <li class="item wind">
        <span class="item__label">wind</span>
        <span class="item__value">{{ additional.wind }}m/s</span>
      </li>
      <li class="item pressure">
        <span class="item__label">pressure</span>
        <span class="item__value">{{ additional.pressure }}hPa</span>
      </li>
      <li class="item humidity">
        <span class="item__label">humidity</span>
        <span class="item__value">{{ additional.humidity }}%</span>
      </li>
      <li class="item cloudiness">
        <span class="item__label">cloudiness</span>
        <span class="item__value">{{ additional.cloudiness }}%</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { calculateTemp } from "@/utils";

export default defineComponent({
  props: {
    main: {
      type: Object as () => {
        icon: string;
        maxTemp: number;
        minTemp: number;
        day: string;
      },
      required: true
    },
    additional: {
      type: Object as () => {
        wind: number;
        pressure: number;
        humidity: number;
        cloudiness: number;
      },
      required: true
    }
  },
  setup() {
    return { calculateTemp };
  }
});
</script>

<style lang="scss" scoped>
.daily__main-info {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column wrap;

  &__title {
    font-size: 1.5rem;
    padding: 0 30px;
  }

  &__wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr 3fr;
    place-items: center;
    padding: 0 15px;

    .day-name {
      justify-self: start;
      font-weight: bold;
      font-size: 1.3rem;
      padding-left: 17px;
    }
    .icon {
      width: 65px;
      height: 65px;
    }

    .temp {
      font-size: 1.3em;
      justify-self: end;
      padding-right: 5px;

      &__max {
        color: #d11d22;
        padding: 0 7px;
      }

      &__min {
        color: #2e5fe6;
      }
    }
  }

  &__additional {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 5px 25px;
    grid-gap: 7px 30px;

    .item {
      display: flex;
      justify-content: space-between;

      &__label {
        text-transform: capitalize;
        font-weight: bold;
      }
    }
  }
}
</style>
