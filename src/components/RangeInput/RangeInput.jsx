import React from "react";
import "./RangeInput.scss";

const RangeInput = ({ min, max, label, id, onChange, value }) => {
  return (
    <div className="range">
      <label className="range__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default RangeInput;
