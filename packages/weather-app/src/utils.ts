import axios from "axios";
import { LOCATION_API_URL, LOCATION_API_KEY } from "./consts";
import { Coordinates } from "./types";

export const getCityNameByCoordinates = async ({ lat, lon }: Coordinates) => {
  const { data } = await axios.get(
    `${LOCATION_API_URL}/reverse.php?key=${LOCATION_API_KEY}&lat=${lat}&lon=${lon}&format=json`
  );

  return data;
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
