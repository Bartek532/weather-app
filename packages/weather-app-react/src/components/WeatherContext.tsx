import * as React from "react";
import { useState, createContext, Dispatch, SetStateAction } from "react";
import type { CurrentWeatherType, DailyWeatherType, Timezone } from "../types";

export const WeatherContext = createContext<Partial<WeatherContextType>>({});

type WeatherContextType = {
  currentWeather: CurrentWeatherType;
  dailyWeather: DailyWeatherType;
  timezone: Timezone;
  loading: boolean;
  error: boolean;
  dailyActiveDayIndex: number;
  setCurrentWeather: Dispatch<SetStateAction<CurrentWeatherType | undefined>>;
  setDailyWeather: Dispatch<SetStateAction<DailyWeatherType | undefined>>;
  setTimezone: Dispatch<SetStateAction<Timezone | undefined>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<boolean>>;
  setDailyActiveDayIndex: Dispatch<SetStateAction<number>>;
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
  const [dailyActiveDayIndex, setDailyActiveDayIndex] = useState(0);

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
        dailyActiveDayIndex,
        setDailyActiveDayIndex
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
