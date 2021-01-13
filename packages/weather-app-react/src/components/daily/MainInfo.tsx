type DailyWeatherDayType = {
  main: { icon: string; max_temp: number; min_temp: number; day: string };
  additional: {
    wind: number;
    pressure: number;
    humidity: number;
    cloudiness: number;
  };
};

export const MainInfo = ({ main, additional }: DailyWeatherDayType) => {
  return (
    <div className="main-info">
      <h1 className="main-info__title">Weekly chart</h1>
      <span className="main-info__day-name">{main.day}</span>
      <img
        src={require(`../../assets/icons/weather/${main.icon}.svg`).default}
        alt="weather-icon"
        className="main-info__icon"
      />
      <span className="main-info__min-temp"> {main.min_temp}</span>
      <span className="main-info__max-temp"> {main.max_temp}</span>

      <div className="main-info__additional"></div>
      <span>Wind: {additional.wind}</span>
      <span>pressure: {additional.pressure}</span>
      <span>humidity: {additional.humidity}</span>
      <span>cloudiness: {additional.cloudiness}</span>
    </div>
  );
};
