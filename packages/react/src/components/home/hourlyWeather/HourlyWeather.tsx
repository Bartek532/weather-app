import type { BasicWeatherInfo, Timezone } from "../../../types";
import { useState } from "react";
import { HourlyWeatherToday } from "./HourlyWeatherToday";
import { HourlyWeatherTomorrow } from "./HourlyWeatherTomorrow";

export const HourlyWeather = ({
  weather,
  time
}: {
  weather: BasicWeatherInfo[];
  time: Timezone;
}) => {
  const [isTodayActive, setIsTodayActive] = useState(true);
  return (
    <section className="hourly">
      <div className="hourly__navbar">
        <button
          className={`hourly__navbar__item ${
            isTodayActive && "hourly__navbar__item--active"
          }`}
          onClick={() => setIsTodayActive(true)}
        >
          Today
        </button>
        <button
          className={`hourly__navbar__item ${
            !isTodayActive && "hourly__navbar__item--active"
          }`}
          onClick={() => setIsTodayActive(false)}
        >
          Tomorrow
        </button>
      </div>
      {isTodayActive ? (
        <HourlyWeatherToday weather={weather} time={time} />
      ) : (
        <HourlyWeatherTomorrow weather={weather} time={time} />
      )}
    </section>
  );
};
