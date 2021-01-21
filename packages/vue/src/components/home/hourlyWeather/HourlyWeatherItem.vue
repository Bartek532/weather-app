<template>
  <article className="hourly__weather__item">
    <time className="hourly__weather__item__time">{{ time }}:00</time>
    <img
      :src="require(`../../../assets/icons/weather/${icon}.svg`)"
      :alt="iconDescription"
      className="hourly__weather__item__icon"
    />
    <span className="hourly__weather__item__temp">
      {{ calculateTemp(temp, 0) }}°
    </span>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { calculateTemp } from "@/utils";
export default defineComponent({
  props: {
    time: {
      type: Number,
      required: true
    },
    temp: {
      type: Number,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    iconDescription: {
      type: String
    }
  },

  setup() {
    return { calculateTemp };
  }
});
</script>

<style lang="scss" scoped>
.hourly__weather__item {
  height: 180px;
  width: 85px;
  margin: 10px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  z-index: -2;
  color: #fff;
  font-weight: bold;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    z-index: -1;
  }

  &:first-child {
    background: #f59518;
  }

  &:first-child::after {
    height: 100%;
    top: 50%;
    background: #eb6952;
    border-radius: 50px 0 0 0;
  }

  &:nth-child(2) {
    background: #a455c9;
  }

  &:nth-child(2)::after {
    height: 100%;
    top: 50%;
    background: #6314c9;
  }

  &:nth-child(3) {
    background: #2c2666;
  }

  &:nth-child(3)::after {
    height: 50%;
    top: 0;
    background: #5a558a;
    border-radius: 0 0 50px 0;
  }

  &__icon {
    width: 70px;
    height: 70px;
    margin: 15px auto;
  }
}
</style>
