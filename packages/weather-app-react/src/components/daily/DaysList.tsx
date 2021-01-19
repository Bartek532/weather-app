import { Day } from "./Day";
import { getListOfDays } from "../../utils";
import type { DailyWeatherItem } from "../../types";
import { useContext, memo } from "react";
import { WeatherContext } from "../../context/WeatherContext";

export const DaysList = memo(({ weather }: { weather: DailyWeatherItem[] }) => {
  const { setCurrentSelectedDayIndex, currentSelectedDayIndex } = useContext(
    WeatherContext
  );

  const handleDayChange = (day: string) => {
    setCurrentSelectedDayIndex(getListOfDays().findIndex(item => item === day));
  };

  return (
    <ul className="days">
      {weather.slice(0, 7).map((item, index) => {
        return (
          <Day
            icon={item.weather[0].icon}
            day={getListOfDays()[index]}
            iconDescription={item.weather[0].description}
            key={item.dt}
            changeDay={handleDayChange}
            isActive={index === currentSelectedDayIndex}
          />
        );
      })}
    </ul>
  );
});
