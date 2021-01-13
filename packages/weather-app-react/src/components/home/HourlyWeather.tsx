import { BasicWeatherInfo, Timezone } from "../../types";
import { useState } from "react";
import { calculateHour } from "../../utils";
import { HourlyWeatherItem } from "./HourlyWeatherItem";
import styles from "../../assets/styles/home/HourlyWeather.module.scss";

export const HourlyWeatherToday = ({
  weather,
  time
}: {
  weather: Partial<BasicWeatherInfo>[];
  time: Timezone;
}) => {
  return (
    <div className={styles["hourly__weather__items"]}>
      {weather.map((item, index) => {
        if (index < 4 && index > 0) {
          return (
            <HourlyWeatherItem
              key={item.dt}
              time={calculateHour(time.hour, index)}
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
  weather,
  time
}: {
  weather: Partial<BasicWeatherInfo>[];
  time: Timezone;
}) => {
  return (
    <div className={styles["hourly__weather__items"]}>
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

export const HourlyWeather = ({
  weather,
  time
}: {
  weather: Partial<BasicWeatherInfo>[];
  time: Timezone;
}) => {
  const [isTodayActive, setIsTodayActive] = useState(true);
  return (
    <div className={styles.hourly}>
      <div className={styles["hourly__navbar"]}>
        <span
          className={`${styles["hourly__navbar__item"]} ${
            isTodayActive && styles["hourly__navbar__item--active"]
          }`}
          onClick={() => setIsTodayActive(true)}
        >
          Today
        </span>
        <span
          className={`${styles["hourly__navbar__item"]} ${
            !isTodayActive && styles["hourly__navbar__item--active"]
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
