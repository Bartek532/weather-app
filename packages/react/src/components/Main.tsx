import { SearchControls } from "./SearchControls/SearchControls";
import { Home } from "../views/Home";
import { Daily } from "../views/Daily";
import { Loader } from "./Loader";
import { Navbar } from "./Navbar/Navbar";
import { Error } from "./Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useContext, useEffect, memo } from "react";
import { WeatherContext } from "../context/WeatherContext";

import {
  getCurrentWeather,
  getDailyWeather,
  getTimezone,
  getCityNameByCoordinates,
} from "../utils";

export const Main = memo(() => {
  const {
    error,
    loading,
    setLoading,
    setError,
    setCurrentWeather,
    setDailyWeather,
    setTimezone,
    setCurrentSelectedDayIndex,
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
      setCurrentSelectedDayIndex(0);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  const searchByLocation = async () => {
    setLoading(true);

    if (!("geolocation" in navigator)) {
      setError(true);
      return;
    }

    return navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        const data = await getCityNameByCoordinates(
          coords.latitude,
          coords.longitude
        );

        search(data.address.city);
      },
      () => {
        setLoading(false);
        setError(true);
      }
    );
  };

  useEffect(() => {
    search("London");
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="error__wrapper">
        <SearchControls search={search} searchByLocation={searchByLocation} />
        <Error />
      </div>
    );
  }

  return (
    <div className="main">
      <SearchControls search={search} searchByLocation={searchByLocation} />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/daily" exact component={Daily} />
        </Switch>
        <Navbar />
      </Router>
    </div>
  );
});
