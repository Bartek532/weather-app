import { ReactComponent as SearchIcon } from "../assets/icons/defaultSearchIcon.svg";
import { ReactComponent as LocationSearchIcon } from "../assets/icons/locationSearchIcon.svg";
import { ChangeEvent, useState } from "react";

import { getCurrentWeather } from "../utils";

export const SearchControls = () => {
  const [query, setQuery] = useState("");
  const handleSearch = async () => {
    console.log(await getCurrentWeather(query));
  };

  const handleQueryUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchByEnter = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      console.log(await getCurrentWeather(query));
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
      <button className="search__btn--default" onClick={handleSearch}>
        <SearchIcon />
      </button>
      <button className="search__btn--location">
        <LocationSearchIcon />
      </button>
    </div>
  );
};
