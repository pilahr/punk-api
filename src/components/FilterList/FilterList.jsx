import React from "react";
import "./FilterList.scss";

const FilterList = (props) => {
  const { label, handleCheckBox, filterId } = props;
  return (
    <div className="filter">
      <div className="filter__checkbox">
        <label className="filter__label">{label} </label>
        <input
          type="checkbox"
          className="filter__box"
          onChange={() => handleCheckBox(filterId)}
        ></input>
      </div>
    </div>
  );
};

export default FilterList;
