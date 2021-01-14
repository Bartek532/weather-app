import { SearchControls } from "./SearchControls";
import { Home } from "../views/Home";
import { Daily } from "../views/Daily";
import { Loader } from "./Loader";
import { Navbar } from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useContext, useEffect } from "react";
import { WeatherContext } from "./WeatherContext";

import {
  getCurrentWeather,
  getDailyWeather,
  getTimezone,
  getCityNameByCoordinates
} from "../utils";

export const Main = () => {
  const {
    loading,
    setLoading,
    setError,
    setCurrentWeather,
    setDailyWeather,
    setTimezone,
    setDailyActiveDayIndex
  } = useContext(WeatherContext);

  const search = async (city: string) => {
    setLoading(true);
    try {
      const currentWeather = await getCurrentWeather(city);
      setCurrentWeather(currentWeather);

      const { coord } = currentWeather;
      setDailyWeather(await getDailyWeather(coord.lat, coord.lon));

      const { countryName, formatted } = await getTimezone(
        coord.lat,
        coord.lon
      );
      setTimezone({ countryName, hour: Number(formatted.substring(11, 13)) });

      setError(false);
      setDailyActiveDayIndex(0);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  const searchByLocation = async () => {
    setLoading(true);
    return navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const data = await getCityNameByCoordinates(
        coords.latitude,
        coords.longitude
      );

      search(data.address.city);
    });
  };

  useEffect(() => {
    async function searchFirstTime() {
      return await search("London");
    }

    searchFirstTime();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="main">
      <SearchControls search={search} searchByLocation={searchByLocation} />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/daily" exact component={Daily} />
        </Switch>
        <Navbar />
      </Router>
    </div>
  );
};