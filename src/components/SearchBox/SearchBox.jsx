import "./SearchBox.scss";
import React from "react";

const SearchBox = () => {
  return (
    <form className="search">
      <label className="search__label">Search for our varieties of beers..</label>
      <input placeholder="Search.." className="search__input"></input>
    </form>
  );
};

export default SearchBox;
