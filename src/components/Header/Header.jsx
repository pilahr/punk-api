import React from "react";
import "./Header.scss";
import beercan from "../../assets/images/beer-can.png";

const Header = () => {
  return (
    <div className="heading">
      <img src={beercan} alt="web icon" />
      <h2 className="heading__text">Craft Beer Breweries</h2>
      <p></p>
    </div>
  );
};

export default Header;
