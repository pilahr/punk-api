import { React, useState } from "react";
import "./RangeInput.scss";

const RangeInput = ({ min, max, label, id, onChange, value }) => {
  return (
    <div className="range">
      <label className="range__label" htmlFor={id}>
        {label}
      </label>

      <div className="range__wrap">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default RangeInput;
