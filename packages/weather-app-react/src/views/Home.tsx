import { useContext } from "react";
import { MainInfo } from "../components/home/MainInfo";
import { WeatherContext } from "../components/WeatherContext";

export const Home = () => {
  const { currentWeather, loading } = useContext(WeatherContext);

  if (!loading) {
    return (
      <MainInfo
        iconCode={currentWeather.weather[0].icon}
        place={currentWeather.name}
        temperature={currentWeather.main.temp}
      />
    );
  }

  return null;
};
