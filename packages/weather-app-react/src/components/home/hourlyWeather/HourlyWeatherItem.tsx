import { calculateTemp } from "../../../utils";

export const HourlyWeatherItem = ({
  time,
  temp,
  icon
}: {
  time: number;
  temp: number;
  icon: string;
}) => {
  return (
    <div className="hourly__weather__item">
      <span className="hourly__weather__item__time">{time}:00</span>
      <img
        src={require(`../../../assets/icons/weather/${icon}.svg`).default}
        alt="weather-icon"
        className="hourly__weather__item__icon"
      />
      <span className="hourly__weather__item__temp">
        {calculateTemp(temp, 0)}°
      </span>
    </div>
  );
};
