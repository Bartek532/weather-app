import { createStore } from "vuex";
import axios from "axios";
import { WEATHER_API_URL, WEATHER_API_KEY, TIME_API_URL, TIME_API_KEY } from "../consts";
import { types } from "./mutation-types";
import type {CurrentWeatherType, Coordinates, DailyWeatherType, Timezone} from '../types';

export default createStore({
  state: {
    loading: false,
    error: false,
    currentWeather: {},
    dailyWeather: {},
    timezone: {}
  },
  mutations: {
    [types.SET_LOADING_STATUS](state, value: boolean) {
      state.loading = value;
    },
    [types.SET_ERROR_STATUS](state, value: boolean) {
      state.error = value;
    },
    [types.SET_CURRENT_WEATHER](state, value: CurrentWeatherType){
      state.currentWeather = value;
    },
    [types.SET_DAILY_WEATHER](state, value: DailyWeatherType){
      state.dailyWeather = value;
    },
    [types.SET_TIMEZONE](state, value: Timezone){
      state.timezone = value;
    }
  },
  actions: {
    async getCurrentWeather({ commit }, city: string) {
      const { data } = await axios.get(
        `${WEATHER_API_URL}/weather?q=${city}&APPID=${WEATHER_API_KEY}`
      );

      commit(types.SET_CURRENT_WEATHER, data);
    },
    async getDailyWeather({commit}, {lat, lon}: Coordinates) {
      const { data } = await axios.get(
        `${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&APPID=${WEATHER_API_KEY}`
      );
    
      commit(types.SET_DAILY_WEATHER, data);

    },
    async getTimezone({commit}, { lat, lon}: Coordinates){
      const { data } = await axios.get(
        `${TIME_API_URL}?key=${TIME_API_KEY}&format=json&by=position&lat=${lat}&lng=${lon}`
      );

      const {countryName, formatted} = data;
    
      commit(types.SET_TIMEZONE, {countryName, hour: Number(formatted.substring(11, 13))})
    },
    setLoading({commit}, value: boolean){
      commit(types.SET_LOADING_STATUS, value)
    },
    setError({commit}, value: boolean){
      commit(types.SET_ERROR_STATUS, value)
    }
  }
});
