import React from "react";
import "./FilterList.scss";

const FilterList = ({ label, handleCheckBox, filterOption }) => {
  return (
    <div className="filter">
      <div className="filter__checkbox">
        <label className="filter__label">{label} </label>
        <input
          type="checkbox"
          className="filter__box"
          value={filterOption}
          onChange={handleCheckBox}
        ></input>
      </div>
    </div>
  );
};

export default FilterList;
