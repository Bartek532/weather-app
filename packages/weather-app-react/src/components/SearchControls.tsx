import { ReactComponent as SearchIcon } from "../assets/icons/defaultSearchIcon.svg";
import { ReactComponent as LocationSearchIcon } from "../assets/icons/locationSearchIcon.svg";
import { ChangeEvent, useState, useContext } from "react";
import { WeatherContext } from "./WeatherContext";

import { getCurrentWeather, getDailyWeather } from "../utils";

export const SearchControls = () => {
  const [query, setQuery] = useState("");
  const {
    setLoading,
    setError,
    setCurrentWeather,
    setDailyWeather
  } = useContext(WeatherContext);

  const search = async () => {
    setLoading(true);
    try {
      const currentWeather = await getCurrentWeather(query);
      setCurrentWeather(currentWeather);

      const { coord } = currentWeather;
      setDailyWeather(await getDailyWeather(coord.lat, coord.lon));

      setError("");
    } catch {
      setError("Niestety, nie znaleziono tego czego szukasz");
    } finally {
      setLoading(false);
    }
  };

  const handleQueryUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchByEnter = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      return search();
    }

    return;
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        value={query}
        onChange={handleQueryUpdate}
        onKeyDown={handleSearchByEnter}
      />
      <button className="search__btn--default" onClick={search}>
        <SearchIcon />
      </button>
      <button className="search__btn--location">
        <LocationSearchIcon />
      </button>
    </div>
  );
};
