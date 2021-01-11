import { BasicWeatherInfo } from "../../types";
import { useState } from "react";
import { calculateHour } from "../../utils";
import { HourlyWeatherItem } from "./HourlyWeatherItem";

const currentTime = 17;

export const HourlyWeatherToday = ({
  data
}: {
  data: Partial<BasicWeatherInfo>[];
}) => {
  return (
    <div className="hourly__weather__today">
      {data.map((item, index) => {
        if (index < 3) {
          console.log(index);
          return (
            <HourlyWeatherItem
              key={item.dt}
              time={calculateHour(currentTime, index + 1)}
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

export const HourlyWeatherTomorrow = ({
  data
}: {
  data: Partial<BasicWeatherInfo>[];
}) => {
  console.log(data);
  return (
    <div className="hourly__weather__tomorrow">
      {data.map((item, index) => {
        if (
          [
            24 - currentTime + 9,
            24 - currentTime + 13,
            24 - currentTime + 17
          ].includes(index)
        ) {
          return (
            <HourlyWeatherItem
              key={item.dt}
              time={calculateHour(currentTime, index + 1)}
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

export const HourlyWeather = ({
  data
}: {
  data: Partial<BasicWeatherInfo>[];
}) => {
  const [isTodayActive, setIsTodayActive] = useState(true);
  return (
    <div className="hourly">
      <div className="hourly__navbar">
        <span
          className={`hourly__navbar__item__today ${
            isTodayActive && "hourly__navbar__item--active"
          }`}
          onClick={() => setIsTodayActive(true)}
        >
          Today
        </span>
        <span
          className={`hourly__navbar__item__tomorrow ${
            !isTodayActive && "hourly__navbar__item--active"
          }`}
          onClick={() => setIsTodayActive(false)}
        >
          Tomorrow
        </span>
      </div>
      {isTodayActive ? (
        <HourlyWeatherToday data={data} />
      ) : (
        <HourlyWeatherTomorrow data={data} />
      )}
    </div>
  );
};
