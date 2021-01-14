import { Day } from "./Day";
import { getListOfDays } from "../../utils";
import { DailyWeatherItem } from "../../types";
import { useContext } from "react";
import { WeatherContext } from "../WeatherContext";

export const DaysList = ({ weather }: { weather: DailyWeatherItem[] }) => {
  const { setDailyActiveDayIndex, dailyActiveDayIndex } = useContext(
    WeatherContext
  );

  const handleDayChange = (day: string) => {
    setDailyActiveDayIndex(getListOfDays().findIndex(item => item === day));
  };

  return (
    <div className="days">
      {weather.map((item, index) => {
        if (index < 7) {
          return (
            <Day
              icon={item.weather[0].icon}
              day={getListOfDays()[index]}
              key={item.dt}
              changeDay={handleDayChange}
              isActive={index === dailyActiveDayIndex}
            />
          );
        }

        return null;
      })}
    </div>
  );
};
