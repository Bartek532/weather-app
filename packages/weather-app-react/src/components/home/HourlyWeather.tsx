import { BasicWeatherInfo } from "../../types";
import { useState } from "react";

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
    </div>
  );
};
