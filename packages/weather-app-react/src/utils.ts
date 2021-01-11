import axios from "axios";
import { WEATHER_API_URL, WEATHER_API_KEY, TIME_API_URL } from "./consts";

export const getCurrentWeather = async (city: string) => {
  const { data } = await axios.get(
    `${WEATHER_API_URL}/weather?q=${city}&APPID=${WEATHER_API_KEY}`
  );

  return data;
};

export const getDailyWeather = async (latitude: number, longitude: number) => {
  const { data } = await axios.get(
    `${WEATHER_API_URL}/onecall?lat=${latitude}&lon=${longitude}&APPID=${WEATHER_API_KEY}`
  );

  return data;
};

export const getTimezone = async (latitude: number, longitude: number) => {
  const { data } = await axios.get(
    `${TIME_API_URL}?key=VW216NLMWBQ1&format=json&by=position&lat=${latitude}&lng=${longitude}`
  );

  return data;
};

export const calculateHour = (actualTime: number, shift: number) => {
  const shiftedTime = actualTime + shift;

  if (shiftedTime > 23) {
    return shiftedTime - 24;
  }

  return shiftedTime;
};
