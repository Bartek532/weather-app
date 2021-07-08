<template>
  <li class="day">
    <button
      :aria-label="day"
      @click="$emit('change-active-day', index)"
      :class="[{ 'day__btn--active': activeDayIndex === index }, 'day__btn']"
    >
      <img
        :src="require(`../../assets/icons/weather/${icon}.svg`)"
        :alt="iconDescription"
        class="day__icon"
      />
      <span class="day__day-name">{{ day.substring(0, 3) }}</span>
    </button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Day",
  props: {
    icon: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    iconDescription: {
      type: String,
    },
    index: {
      type: Number,
      required: true,
    },
    activeDayIndex: {
      type: Number,
      default: 0,
    },
  },
});
</script>

<style lang="scss" scoped>
.day {
  width: 15%;

  &__btn {
    width: 100%;
    max-width: 60px;
    border-radius: 10px;
    margin: 0 2px;
    padding: 8px 0px;
    border: 0 none;
    background-color: transparent;
    outline: 0 none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0.6pt 0.6pt #5e2ce6;
    }

    &--active {
      background-color: #5e2ce6;
      color: #fff;
    }
  }

  &__icon {
    width: 43px;
    height: 43px;
    margin-bottom: 5px;
  }
}

@media all and (min-width: 500px) {
  .day {
    transform: scale(1.1);
  }
}

@media all and (min-width: 1000px) {
  .day {
    margin: 0 7px;
  }
}
</style>
