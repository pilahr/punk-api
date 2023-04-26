import { React, useState } from "react";
import "./RangeInput.scss";

const RangeInput = ({ min, max, label, id, onChange, value, title }) => {
  return (
    <div className="range">
      <label className="range__label" htmlFor={id}>
        {label}
       
      </label>
      <p className="range__title" >{title}</p>
      <div className="range__wrap">
        <input className="range__input"
          id={id}
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          title={title}
        />
      </div>
    </div>
  );
};

export default RangeInput;
