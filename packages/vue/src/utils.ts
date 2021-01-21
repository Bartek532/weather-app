import axios from "axios";
import { LOCATION_API_URL, LOCATION_API_KEY } from "./consts";
import type { DailyWeatherItem } from "./types";

export const getCityNameByCoordinates = async ({ latitude, longitude }: {latitude: number, longitude: number}) => {
  const { data } = await axios.get(
    `${LOCATION_API_URL}/reverse.php?key=${LOCATION_API_KEY}&lat=${latitude}&lon=${longitude}&format=json`
  );

  return data;
};


export const calculateHour = (actualTime: number, shift: number) => {
  return (actualTime + shift) % 24;
};

export const calculateTemp = (value: number, precision: number) => {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round((value - 273.5) * multiplier) / multiplier;
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
    minTemp: selectedDay.temp.min,
    maxTemp: selectedDay.temp.max,
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