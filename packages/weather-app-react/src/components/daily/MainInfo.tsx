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
    <div className="daily__main-info">
      <h1>Weekly chart</h1>
      {main.day}
      <img
        src={require(`../../assets/icons/weather/${main.icon}.svg`).default}
        alt="weather-icon"
      />
      {main.min_temp}
      {main.max_temp}

      <span>Wind: {additional.wind}</span>
      <span>pressure: {additional.pressure}</span>
      <span>humidity: {additional.humidity}</span>
      <span>cloudiness: {additional.cloudiness}</span>
    </div>
  );
};
