import React, { Component } from "react";
import "./Main.scss";
import CardList from "../CardList/CardList";

const Main = (props) => {
  const { beerArr } = props;

  return (
    <div className="main">
      {beerArr.map((beer) => {
        return (
          <>
            <CardList
              key={beer.id}
              beerImage={beer.image_url}
              beerName={beer.name}
              beerDescription={beer.description}
              beerABV={beer.abv}
            />
          </>
        );
      })}
    </div>
  );
};

export default Main;
