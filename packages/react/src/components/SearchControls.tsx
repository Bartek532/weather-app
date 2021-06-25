import { ReactComponent as SearchIcon } from "../assets/icons/defaultSearch.svg";
import { ReactComponent as LocationSearchIcon } from "../assets/icons/locationSearch.svg";
import { ChangeEvent, useState } from "react";

export const SearchControls = ({
  search,
  searchByLocation,
}: {
  search: (city: string) => Promise<void>;
  searchByLocation: () => Promise<void>;
}) => {
  const [query, setQuery] = useState("");

  const handleQueryUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (!query.trim().length) {
      return;
    }
    return search(query);
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        type="search"
        role="search"
        placeholder="Search city"
        className="search__input"
        value={query}
        onChange={handleQueryUpdate}
      />
      <button className="search__btn search__btn--default" type="submit">
        <span className="sr-only">search</span>
        <SearchIcon />
      </button>
      <button
        className="search__btn search__btn--location"
        onClick={() => searchByLocation()}
      >
        <span className="sr-only">search by location</span>
        <LocationSearchIcon />
      </button>
    </form>
  );
};
