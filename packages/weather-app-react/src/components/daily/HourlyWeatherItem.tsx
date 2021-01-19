import { calculateTemp } from "../../utils";

export const HourlyWeatherItem = ({
  temp,
  hour
}: {
  temp: number;
  hour: number;
}) => {
  return (
    <article className="daily__hourly-weather__item">
      <span className="item__temp">{calculateTemp(temp, 0)}°</span>
      <time className="item__hour">{hour}:00</time>
    </article>
  );
};
