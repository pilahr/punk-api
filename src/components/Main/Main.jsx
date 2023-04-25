import React from "react";
import "./Main.scss";
import CardList from "../CardList/CardList";
import { Link } from "react-router-dom";

const Main = (props) => {
  const { beerArr } = props;

  return (
    <div className="main">
      {beerArr.map((beer) => {
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
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Main;
