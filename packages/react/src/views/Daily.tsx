import { useContext, useState, useEffect, memo } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { MainInfo } from "../components/daily/MainInfo";
import { HourlyWeather } from "../components/daily/HourlyWeather";
import { DaysList } from "../components/daily/DaysList";
import { getWeatherInfoAboutSelectedDay } from "../utils";

export const Daily = memo(() => {
  const { dailyWeather, currentSelectedDayIndex } = useContext(WeatherContext);

  const [{ mainData, additionalData, temperature }, setSelectedDayInfo] =
    useState(
      getWeatherInfoAboutSelectedDay(
        currentSelectedDayIndex,
        dailyWeather!.daily
      )
    );

  useEffect(() => {
    setSelectedDayInfo(
      getWeatherInfoAboutSelectedDay(
        currentSelectedDayIndex,
        dailyWeather!.daily
      )
    );
  }, [currentSelectedDayIndex]);

  return (
    <div className="daily">
      <div className="daily__main">
        <MainInfo main={mainData} additional={additionalData} />
      </div>
      <div className="daily__additional">
        <HourlyWeather temp={temperature} />
        <DaysList weather={dailyWeather!.daily} />
      </div>
    </div>
  );
});
