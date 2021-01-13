import { calculateTemp } from "../../utils";

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
      <h1 className="daily__main-info__title">Weekly chart</h1>
      <div className="daily__main-info__wrapper">
        <img
          src={require(`../../assets/icons/weather/${main.icon}.svg`).default}
          alt="weather-icon"
          className="icon"
        />
        <span className="day-name">{main.day}</span>
        <div className="temp">
          <span className="temp__max"> {calculateTemp(main.max_temp, 0)}°</span>
          <span className="temp__min"> {calculateTemp(main.min_temp, 0)}°</span>
        </div>
      </div>

      <div className="daily__main-info__additional">
        <span className="item wind">
          <span className="item__label">wind</span>
          <span className="item__value">{additional.wind}m/s</span>
        </span>
        <span className="item pressure">
          <span className="item__label">pressure</span>
          <span className="item__value">{additional.pressure}hPa</span>
        </span>
        <span className="item humidity">
          <span className="item__label">humidity</span>
          <span className="item__value">{additional.humidity}%</span>
        </span>
        <span className="item cloudiness">
          <span className="item__label">cloudiness</span>
          <span className="item__value">{additional.cloudiness}%</span>
        </span>
      </div>
    </div>
  );
};
