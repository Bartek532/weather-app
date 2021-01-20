<template>
  <div className="daily__hourly-weather__item">
    <span className="item__temp">{{ calculateTemp(temp, 0) }}°</span>
    <span className="item__hour">{{ hour }}:00</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { calculateTemp } from "@/utils";
export default defineComponent({
  props: {
    hour: { type: Number, required: true },
    temp: { type: Number, required: true }
  },
  setup() {
    return { calculateTemp };
  }
});
</script>

<style lang="scss" scoped>
.daily__hourly-weather__item {
  position: relative;
  overflow: hidden;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  color: #fff;
  width: 40vw;
  height: 40vw;
  max-width: 180px;
  max-height: 180px;
  margin: 20px 0px;
  border-radius: 20px;
  box-shadow: 0px 13px 39px -1px rgba(179, 177, 179, 1);

  &::after {
    content: "";
    width: 100%;
    height: 200%;
    top: -78%;
    left: -40%;
    position: absolute;
    transform: rotate(45deg);
  }

  span {
    z-index: 10;
    position: relative;
  }

  .item__temp {
    font-size: 4rem;
    transform: translate(8px, -7px);
  }

  .item__hour {
    position: absolute;
    bottom: 15px;
  }

  &:first-child {
    background: #f5dc1d;

    &::after {
      background-color: #f09618;
    }
  }

  &:nth-child(2) {
    background: #f525bd;

    &::after {
      background-color: #e82a43;
    }
  }

  &:nth-child(3) {
    background: #a938eb;

    &::after {
      background-color: #7a17b3;
    }
  }

  &:nth-child(4) {
    background: #5211f5;

    &::after {
      background-color: #33118a;
    }
  }
}
</style>
