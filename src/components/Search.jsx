import { SearchIcon } from "lucide-react";
import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <SearchIcon className="search-icon" />
        <input
          type="text"
          placeholder="Search thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
