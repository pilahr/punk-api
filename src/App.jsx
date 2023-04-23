import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import beers from "../src/assets/data/beers.js";

const App = () => {
  const filteredBeers = beers
    .filter((beer) => beer.name)
    .sort((beerA, beerB) => beerB.name - beerA.name);

  return (
    <div className="app">
      <section className="app__heading">
        <Header />
      </section>

      <div className="app__searching">
        <section className="app__nav">
          <Nav />
        </section>

        <section className="app__main">
          <Main beerArr={filteredBeers} />
        </section>
      </div>
    </div>
  );
};

export default App;
