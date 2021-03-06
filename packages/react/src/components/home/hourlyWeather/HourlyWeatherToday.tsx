import { HourlyWeatherItem } from "./HourlyWeatherItem";
import type { BasicWeatherInfo, Timezone } from "../../../types";
import { calculateHour } from "../../../utils";

export const HourlyWeatherToday = ({
  weather,
  time,
}: {
  weather: BasicWeatherInfo[];
  time: Timezone;
}) => {
  return (
    <article className="hourly__weather">
      <h3 className="sr-only">Hourly weather today</h3>
      {weather.slice(1, 4).map((item, index) => {
        return (
          <HourlyWeatherItem
            key={item.dt}
            time={calculateHour(time.hour, index + 1)}
            temp={item.temp}
            icon={item.weather[0].icon}
            iconDescription={item.weather[0].description}
          />
        );
      })}
    </article>
  );
};
