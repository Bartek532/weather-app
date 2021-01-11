import { useContext } from "react";
import { MainInfo } from "../components/home/MainInfo";
import { AdditionalInfo } from "../components/home/AdditionalInfo";
import { HourlyWeather } from "../components/home/HourlyWeather";

import { WeatherContext } from "../components/WeatherContext";

export const Home = () => {
  const { currentWeather, dailyWeather, loading } = useContext(WeatherContext);

  if (!loading) {
    return (
      <div className="home">
        <MainInfo
          iconCode={currentWeather.weather[0].icon}
          place={currentWeather.name}
          temperature={currentWeather.main.temp}
        />
        <HourlyWeather data={dailyWeather.hourly} />
        <AdditionalInfo
          cloudiness={currentWeather.clouds.all}
          pressure={currentWeather.main.pressure}
          wind={currentWeather.wind.speed}
          humidity={currentWeather.main.humidity}
        />
      </div>
    );
  }

  return null;
};
