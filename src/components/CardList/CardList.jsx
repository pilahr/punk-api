import React from "react";
import "./CardList.scss";

const CardList = (props) => {
  const { beerImage, beerName, beerDescription } = props;

  return (
    <div className="card">
      <img className="card__image" src={beerImage} alt="beer image" />
      <h2 className="card__content--heading">{beerName}</h2>
      <div className="card__content">
        <p className="card__content--text">{beerDescription}</p>
      </div>
    </div>
  );
};

export default CardList;
