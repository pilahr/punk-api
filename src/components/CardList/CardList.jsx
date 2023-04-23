import React from "react";
import "./CardList.scss";

const CardList = (props) => {
  const { beerImage, beerName, beerDescription, beerABV } = props;

  return (
    <div className="flipbox">
      
      <div className="card">
        <div className="card__font">
          <img className="card__image" src={beerImage} alt="beer image" />
          <h2 className="card__content--heading">{beerName}</h2>
          <p className="card__content--abv">ABV {beerABV}%</p>
        </div>

        <div className="card__content">
          <p className="card__content--text">{beerDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default CardList;
