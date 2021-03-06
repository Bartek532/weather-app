import { useContext, memo } from "react";
import { MainInfo } from "../components/home/MainInfo";
import { AdditionalInfo } from "../components/home/AdditionalInfo";
import { HourlyWeather } from "../components/home/hourlyWeather/HourlyWeather";

import { WeatherContext } from "../context/WeatherContext";

export const Home = memo(() => {
  const { currentWeather, dailyWeather, timezone } = useContext(WeatherContext);
  return (
    <div className="home">
      <div className="home__main">
        <MainInfo
          iconCode={currentWeather!.weather[0].icon}
          city={currentWeather!.name}
          country={timezone!.countryName}
          temperature={currentWeather!.main.temp}
          iconDescription={currentWeather!.weather[0].description}
        />
      </div>
      <div className="home__additional">
        <HourlyWeather weather={dailyWeather!.hourly} time={timezone!} />
        <AdditionalInfo
          cloudiness={currentWeather!.clouds.all}
          pressure={currentWeather!.main.pressure}
          wind={currentWeather!.wind.speed}
          humidity={currentWeather!.main.humidity}
        />
      </div>
    </div>
  );
});
