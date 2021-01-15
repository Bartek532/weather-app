import type { BasicWeatherInfo, Timezone } from "../../../types";
import { useState } from "react";
import { HourlyWeatherToday } from "./HourlyWeatherToday";
import { HourlyWeatherTomorrow } from "./HourlyWeatherTomorrow";

export const HourlyWeather = ({
  weather,
  time
}: {
  weather: Partial<BasicWeatherInfo>[];
  time: Timezone;
}) => {
  const [isTodayActive, setIsTodayActive] = useState(true);
  return (
    <div className="hourly">
      <div className="hourly__navbar">
        <span
          className={`hourly__navbar__item ${
            isTodayActive && "hourly__navbar__item--active"
          }`}
          onClick={() => setIsTodayActive(true)}
        >
          Today
        </span>
        <span
          className={`hourly__navbar__item ${
            !isTodayActive && "hourly__navbar__item--active"
          }`}
          onClick={() => setIsTodayActive(false)}
        >
          Tomorrow
        </span>
      </div>
      {isTodayActive ? (
        <HourlyWeatherToday weather={weather} time={time} />
      ) : (
        <HourlyWeatherTomorrow weather={weather} time={time} />
      )}
    </div>
  );
};
