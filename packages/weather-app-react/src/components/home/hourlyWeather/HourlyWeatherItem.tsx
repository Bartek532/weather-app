import { calculateTemp } from "../../../utils";

export const HourlyWeatherItem = ({
  time,
  temp,
  icon,
  iconDescription
}: {
  time: number;
  temp: number;
  icon: string;
  iconDescription: string;
}) => {
  return (
    <article className="hourly__weather__item">
      <time className="hourly__weather__item__time">{time}:00</time>
      <img
        src={require(`../../../assets/icons/weather/${icon}.svg`).default}
        alt={`${iconDescription} icon`}
        className="hourly__weather__item__icon"
      />
      <span className="hourly__weather__item__temp">
        {calculateTemp(temp, 0)}°
      </span>
    </article>
  );
};
