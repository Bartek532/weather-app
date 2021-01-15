import { useContext, useState, useEffect, memo } from "react";
import { WeatherContext } from "../components/WeatherContext";
import { MainInfo } from "../components/daily/MainInfo";
import { HourlyWeather } from "../components/daily/HourlyWeather";
import { DaysList } from "../components/daily/DaysList";
import { getListOfDays } from "../utils";

export const Daily = memo(() => {
  const { dailyWeather, dailyActiveDayIndex } = useContext(WeatherContext);

  const [activeDay, setActiveDay] = useState(
    dailyWeather!.daily[dailyActiveDayIndex!]
  );

  useEffect(() => {
    setActiveDay(dailyWeather!.daily[dailyActiveDayIndex!]);
  }, [dailyActiveDayIndex]);

  const mainData = {
    icon: activeDay.weather[0].icon,
    min_temp: activeDay.temp.min,
    max_temp: activeDay.temp.max,
    day: getListOfDays()[dailyActiveDayIndex!]
  };
  const additionalData = {
    wind: activeDay.wind_speed,
    pressure: activeDay.pressure,
    humidity: activeDay.humidity,
    cloudiness: activeDay.clouds
  };

  const { morn, day, eve, night } = activeDay.temp;

  return (
    <div className="daily">
      <MainInfo main={mainData} additional={additionalData} />
      <HourlyWeather temp={{ morn, day, eve, night }} />
      <DaysList weather={dailyWeather!.daily} />
    </div>
  );
});
