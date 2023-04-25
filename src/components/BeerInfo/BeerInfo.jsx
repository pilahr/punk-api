import React from "react";
import "./BeerInfo.scss";
import { useParams } from "react-router-dom";

const BeerInfo = (props) => {
  const { beerArr } = props;
  const { beerId } = useParams();

  const getBeers = beerArr.find((beer) => beer.id == beerId);

  const {
    name,
    tagline,
    description,
    image_url,
    abv,
    ibu,
    food_pairing,
    brewers_tips,
  } = getBeers;

  return (
    <article className="beer-info">
      <div>
        <img className="beer-info__image" src={image_url} alt={name} />
      </div>
      <div className="beer-info__wrap">
        <h2 className="beer-info__heading">{name}</h2>
        <p className="beer-info__tag">{tagline}</p>
        <ul className="beer-info__items">
          <li className="beer-info__items--abv">ABV: {abv}%</li>
          <li className="beer-info__items--ibu">IBU: {ibu}</li>
        </ul>
        <div className="beer-info__content-container">
          <p className="beer-info__abv">ABV: Alcohol By Volume</p>
          <p className="beer-info__ibu">IBU: International Bitterness Units</p>
          <p className="beer-info__content">{description}</p>
          <h4 className="beer-info__food-pairing">Food pairing</h4>
          <p className="beer-info__food-pairing--text">{food_pairing}</p>
          <h4 className="beer-info__tip">Brewers tips</h4>
          <p className="beer-info__tip--text">{brewers_tips}</p>
        </div>
      </div>
    </article>
  );
};

export default BeerInfo;