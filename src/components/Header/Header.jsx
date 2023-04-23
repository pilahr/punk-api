import React from "react";
import "./Header.scss";
import beer from "../../assets/images/beer.png";

const Header = () => {
  return (
    <div className="heading">
      <img src={beer} alt="web icon" />
      <h2 className="heading__text">Craft Beer Breweries</h2>
      <p></p>
    </div>
  );
};

export default Header;
