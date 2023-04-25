import React from "react";
import "./Header.scss";
import beer from "../../assets/images/beer.png";
import home from "../../assets/images/home.svg";

const Header = () => {
  return (
    <div className="heading">
      <img src={beer} alt="web icon" />
      <h2 className="heading__text">Craft Beer Breweries</h2>
      <img className="heading__home" src={home} alt="home icon" />
    </div>
  );
};

export default Header;
