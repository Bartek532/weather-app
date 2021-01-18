import * as React from "react";
import { useState, createContext, Dispatch, SetStateAction } from "react";
import type { CurrentWeatherType, DailyWeatherType, Timezone } from "../types";

export const WeatherContext = createContext<
  BasicContextType & Partial<WeatherContextType>
>({
  error: false,
  setError: () => {},
  loading: false,
  setLoading: () => {},
  currentSelectedDayIndex: 0,
  setCurrentSelectedDayIndex: () => {},
  setCurrentWeather: () => {},
  setDailyWeather: () => {},
  setTimezone: () => {}
});

type BasicContextType = {
  loading: boolean;
  error: boolean;
  currentSelectedDayIndex: number;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<boolean>>;
  setCurrentSelectedDayIndex: Dispatch<SetStateAction<number>>;
  setCurrentWeather: Dispatch<SetStateAction<CurrentWeatherType | undefined>>;
  setDailyWeather: Dispatch<SetStateAction<DailyWeatherType | undefined>>;
  setTimezone: Dispatch<SetStateAction<Timezone | undefined>>;
};

type WeatherContextType = {
  currentWeather: CurrentWeatherType;
  dailyWeather: DailyWeatherType;
  timezone: Timezone;
};

type Props = {
  children: React.ReactNode;
};

export const WeatherProvider = (props: Props) => {
  const [currentWeather, setCurrentWeather] = useState<
    CurrentWeatherType | undefined
  >(undefined);
  const [dailyWeather, setDailyWeather] = useState<
    DailyWeatherType | undefined
  >(undefined);

  const [timezone, setTimezone] = useState<Timezone | undefined>(undefined);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentSelectedDayIndex, setCurrentSelectedDayIndex] = useState(0);

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        setCurrentWeather,
        dailyWeather,
        setDailyWeather,
        timezone,
        setTimezone,
        loading,
        setLoading,
        error,
        setError,
        currentSelectedDayIndex,
        setCurrentSelectedDayIndex
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
