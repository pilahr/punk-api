import React from "react";
import "./Header.scss";
import beer from "../../assets/images/beer.png";
import home from "../../assets/images/home.svg";
import { Link } from "react-router-dom";

const Header = ({ toggleHome }) => {
  return (
    <div className="heading">
      <img src={beer} alt="web icon" />
      <h2 className="heading__text">Craft Beer Breweries</h2>
      <Link to="/">
        <img
          className="heading__home"
          src={home}
          alt="home icon"
          onClick={toggleHome}
        />
      </Link>
    </div>
  );
};

export default Header;
