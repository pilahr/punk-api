import React from "react";
import "./CardList.scss";

const CardList = (props) => {
  const {
    beerImage,
    beerName,
    beerDescription,
    beerABV,
    beerBrewed,
    beerAcidic,
    beerIBU,
  } = props;

  return (
    <div className="card">
      <img className="card__image" src={beerImage} alt="beer image" />
      <h2 className="card__content--heading">{beerName}</h2>
      <div className="hilight">
        <p className="card__content--abv">ABV {beerABV}%</p>
        <p className="card__content--acidic">pH {beerAcidic}</p>
        <p className="card__content--ibu">IBU {beerIBU}</p>
      </div>
      <p className="card__content--brewed">first Brewed: {beerBrewed}</p>
      <p className="card__content--hidden">Click Me!</p>
    </div>
  );
};

export default CardList;
