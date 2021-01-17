import { HourlyWeatherItem } from "./HourlyWeatherItem";
import type { BasicWeatherInfo, Timezone } from "../../../types";
import { calculateHour } from "../../../utils";

export const HourlyWeatherTomorrow = ({
  weather,
  time
}: {
  weather: Partial<BasicWeatherInfo>[];
  time: Timezone;
}) => {
  return (
    <div className="hourly__weather">
      {weather.map((item, index) => {
        if (
          [
            24 - time.hour + 9,
            24 - time.hour + 13,
            24 - time.hour + 17
          ].includes(index)
        ) {
          return (
            <HourlyWeatherItem
              key={item.dt}
              time={calculateHour(time.hour, index + 1)}
              temp={item!.temp!}
              icon={item!.weather![0].icon}
            />
          );
        }

        return null;
      })}
    </div>
  );
};