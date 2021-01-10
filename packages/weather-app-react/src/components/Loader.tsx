import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

export const Loader = () => {
  const { loading } = useContext(WeatherContext);
  return loading ? <div>Loading...</div> : null;
};
