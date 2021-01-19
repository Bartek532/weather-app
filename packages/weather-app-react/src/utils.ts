import axios from "axios";
import {
  WEATHER_API_URL,
  WEATHER_API_KEY,
  TIME_API_URL,
  LOCATION_API_URL
} from "./consts";
import type { DailyWeatherItem } from "./types";

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

export const getCityNameByCoordinates = async (lat: number, lng: number) => {
  const { data } = await axios.get(
    `${LOCATION_API_URL}/reverse.php?key=195e70003d0429&lat=${lat}&lon=${lng}&format=json`
  );

  return data;
};

export const getUserPosition = () => {
  if (!("geolocation" in navigator)) {
    throw new Error("Geolocation is not available");
  }

  return navigator.geolocation.getCurrentPosition;
};

export const calculateHour = (actualTime: number, shift: number) => {
  return (actualTime + shift) % 24;
};

export const calculateTemp = (temp: number, comma: number) => {
  return (temp - 273.5).toFixed(comma);
};

export const getListOfDays = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const today = new Date();
  const listOfDays = [];
  for (let i = today.getDay(); i < today.getDay() + 7; i++) {
    listOfDays.push(days[i % 7]);
  }

  return listOfDays;
};

export const getWeatherInfoAboutSelectedDay = (
  index: number,
  dailyWeather: DailyWeatherItem[]
) => {
  const selectedDay = dailyWeather[index];

  const mainData = {
    icon: selectedDay.weather[0].icon,
    min_temp: selectedDay.temp.min,
    max_temp: selectedDay.temp.max,
    day: getListOfDays()[index],
    iconDescription: selectedDay.weather[0].description
  };
  const additionalData = {
    wind: selectedDay.wind_speed,
    pressure: selectedDay.pressure,
    humidity: selectedDay.humidity,
    cloudiness: selectedDay.clouds
  };

  const { morn, day, eve, night } = selectedDay.temp;

  return { mainData, additionalData, temperature: { morn, day, eve, night } };
};
