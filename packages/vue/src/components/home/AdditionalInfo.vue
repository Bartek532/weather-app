<template>
  <ul class="additional-info">
    <span class="additional-info__title">Additional info</span>
    <li class="additional-info__item">
      <span class="sr-only">wind</span>
      <img
        src="@/assets/icons/additional/wind.svg"
        alt="wind"
        class="additional-info__item__icon"
      />
      <span class="additional-info__item__text">{{ wind }}m/s</span>
    </li>
    <li class="additional-info__item">
      <span class="sr-only">pressure</span>
      <img
        src="@/assets/icons/additional/pressure.svg"
        alt="pressure"
        class="additional-info__item__icon"
      />
      <span class="additional-info__item__text">{{ pressure }}hPa</span>
    </li>
    <li class="additional-info__item">
      <span class="sr-only">humidity</span>
      <img
        src="@/assets/icons/additional/humidity.svg"
        alt="humidity"
        class="additional-info__item__icon"
      />
      <span class="additional-info__item__text">{{ humidity }}%</span>
    </li>
    <li class="additional-info__item">
      <span class="sr-only">cloudiness</span>
      <img
        src="@/assets/icons/additional/cloudiness.svg"
        alt="cloudiness"
        class="additional-info__item__icon"
      />
      <span class="additional-info__item__text">{{ cloudiness }}%</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AdditionalInfo",
  props: {
    wind: {
      type: Number,
      required: true
    },
    humidity: {
      type: Number,
      required: true
    },
    pressure: {
      type: Number,
      required: true
    },
    cloudiness: {
      type: Number,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.additional-info {
  margin: 15px 0 25px 0;
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  padding: 0;

  &__title {
    font-weight: bold;
    margin-bottom: 14px;
  }

  &__item {
    width: 100%;
    display: flex;
    padding: 5px 40px;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;

    &__icon {
      width: 27px;
      height: 27px;
    }
  }
}

@media all and (min-width: 1000px) {
  .additional-info {
    transform: scale(1.1);
    width: 105%;
  }
}
</style>
