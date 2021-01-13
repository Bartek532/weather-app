import { ReactComponent as SearchIcon } from "../assets/icons/defaultSearch.svg";
import { ReactComponent as LocationSearchIcon } from "../assets/icons/locationSearch.svg";
import { ChangeEvent, useState, useContext, useEffect } from "react";
import { WeatherContext } from "./WeatherContext";
import styles from "../assets/styles/Search.module.scss";

import { getCurrentWeather, getDailyWeather, getTimezone } from "../utils";

export const SearchControls = () => {
  const [query, setQuery] = useState("");
  const {
    setLoading,
    setError,
    setCurrentWeather,
    setDailyWeather,
    setTimezone
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
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    async function searchFirstTime() {
      return await search("London");
    }

    searchFirstTime();
  }, []);

  const handleQueryUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchByEnter = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      return search(query);
    }

    return;
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search city"
        className={styles["wrapper__input"]}
        value={query}
        onChange={handleQueryUpdate}
        onKeyDown={handleSearchByEnter}
      />
      <button
        className={`${styles["wrapper__btn--default"]} ${styles["wrapper__btn"]}`}
        onClick={() => search(query)}
      >
        <SearchIcon />
      </button>
      <button
        className={`${styles["wrapper__btn--location"]} ${styles["wrapper__btn"]}`}
      >
        <LocationSearchIcon />
      </button>
    </div>
  );
};
