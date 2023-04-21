import React from "react";
import "./FilterList.scss";

const FilterList = () => {
  return (
    <div className="filter">
      <div className="filter__checkbox">
        <label className="filter__label">High ABV (&gt; 6.0%) </label>
        <input type="checkbox" className="filter__box"></input>
      </div>
      <div className="filter__checkbox">
        <label className="filter__label">Classic Range </label>
        <input type="checkbox" className="filter__box"></input>
      </div>
      <div className="filter__checkbox">
        <label className="filter__label">Acidic (ph &lt; 4) </label>
        <input type="checkbox" className="filter__box"></input>
      </div>
    </div>
  );
};

export default FilterList;
