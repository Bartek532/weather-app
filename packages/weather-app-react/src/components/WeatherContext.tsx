import * as React from "react";
import { useState, createContext, Dispatch, SetStateAction } from "react";
import { CurrentWeatherType, DailyWeatherType, Timezone } from "../types";

export const WeatherContext = createContext<WeatherContextType>(
  {} as WeatherContextType
);

type WeatherContextType = {
  currentWeather: CurrentWeatherType;
  dailyWeather: DailyWeatherType;
  timezone: Timezone;
  loading: boolean;
  error: boolean;
  setCurrentWeather: Dispatch<SetStateAction<CurrentWeatherType>>;
  setDailyWeather: Dispatch<SetStateAction<DailyWeatherType>>;
  setTimezone: Dispatch<SetStateAction<Timezone>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<boolean>>;
};

type Props = {
  children: React.ReactNode;
};

export const WeatherProvider = (props: Props) => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType>(
    {} as CurrentWeatherType
  );
  const [dailyWeather, setDailyWeather] = useState<DailyWeatherType>(
    {} as DailyWeatherType
  );

  const [timezone, setTimezone] = useState<Timezone>({} as Timezone);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
        setError
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
