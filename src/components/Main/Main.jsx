import React from "react";
import "./Main.scss";
import CardList from "../CardList/CardList";
import { Link } from "react-router-dom";

const Main = ({ beers }) => {
  return (
    <div className="main">
      {beers.map((beer) => {
        return (
          <Link to={`/beer/${beer.id}`}>
            <CardList
              key={beer.id}
              beerImage={beer.image_url}
              beerName={beer.name}
              beerDescription={beer.description}
              beerABV={beer.abv}
              beerBrewed={beer.first_brewed}
              beerAcidic={beer.ph}
              beerIBU={beer.ibu}
              beerEBC={beer.ebc}
            />
          </Link>
          
        );
      })}
    </div>
  );
};

export default Main;
