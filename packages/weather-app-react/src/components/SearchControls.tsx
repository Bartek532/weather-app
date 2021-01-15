import { ReactComponent as SearchIcon } from "../assets/icons/defaultSearch.svg";
import { ReactComponent as LocationSearchIcon } from "../assets/icons/locationSearch.svg";
import { ChangeEvent, useState } from "react";

export const SearchControls = ({
  search,
  searchByLocation
}: {
  search: (city: string) => Promise<void>;
  searchByLocation: () => Promise<void>;
}) => {
  const [query, setQuery] = useState("");

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
    <form className="search">
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        placeholder="Search city"
        className="search__input"
        value={query}
        onChange={handleQueryUpdate}
        onKeyDown={handleSearchByEnter}
      />
      <button
        className="search__btn search__btn--default"
        onClick={() => search(query)}
        aria-label="search"
      >
        <SearchIcon />
      </button>
      <button
        className="search__btn search__btn--location"
        onClick={() => searchByLocation()}
        aria-label="search-by-location"
      >
        <LocationSearchIcon />
      </button>
    </form>
  );
};
