import "./SearchBox.scss";
import React from "react";
import Search from "../../assets/images/search.png"

const SearchBox = (props) => {
  const { label, searchTerm, handleInput } = props;

  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <div className="search">
      <label className="search__label" htmlFor={label}>
        {capitalizedLabel}
      </label>
      <div className="search__box">
        <img src={Search} alt="search icon" />
        <input
        type="text"
        name={label}
        placeholder="Search.."
        className="search__input"
        onInput={handleInput}
        value={searchTerm}
      />
      </div>
      
    </div>
  );
};

export default SearchBox;
