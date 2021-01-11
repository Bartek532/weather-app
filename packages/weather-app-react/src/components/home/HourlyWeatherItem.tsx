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
      <span>{time}</span>
      <img
        src={require(`../../assets/icons/weather/${icon}.svg`).default}
        alt="weather-icon"
      />
      <span>{temp}</span>
    </div>
  );
};
