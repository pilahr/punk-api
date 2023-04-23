import React from "react";
import "./FilterList.scss";

const FilterList = (props) => {
  const { label, handleChange, highABV } = props;
  return (
    <div className="filter">

      <div className="filter__checkbox">
        <label className="filter__label">{label} </label>
        <input
          type="checkbox"
          className="filter__box"
          onChange={handleChange}
          value={highABV}
        ></input>
      </div>
      
    </div>
  );
};

export default FilterList;
