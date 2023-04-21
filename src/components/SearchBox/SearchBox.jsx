import "./SearchBox.scss";
import { React, useState } from "react";

const SearchBox = (props) => {
  const { searchTerm, handleInput } = props;

  return (
    <div className="search">
      <label className="search__label">
        Search for our varieties of beers..
      </label>
      <input
        type="text"
        placeholder="Search.."
        className="search__input"
        onInput={handleInput}
        value={searchTerm}
      />
    </div>
  );
};

export default SearchBox;
