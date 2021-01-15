import { HourlyWeatherItem } from "./HourlyWeatherItem";
import type { BasicWeatherInfo, Timezone } from "../../../types";
import { calculateHour } from "../../../utils";

export const HourlyWeatherToday = ({
  weather,
  time
}: {
  weather: Partial<BasicWeatherInfo>[];
  time: Timezone;
}) => {
  return (
    <div className="hourly__weather">
      {weather.slice(0, 3).map((item, index) => {
        return (
          <HourlyWeatherItem
            key={item.dt}
            time={calculateHour(time.hour, index)}
            temp={item!.temp!}
            icon={item!.weather![0].icon}
          />
        );
      })}
    </div>
  );
};
