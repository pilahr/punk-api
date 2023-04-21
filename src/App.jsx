import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import beers from "../src/assets/data/beers.js";

const App = () => {
  const filteredBeers = [...beers].filter((beer) => beer.name);

  return (
    <div className="app">
      <section className="app__heading">
        <Header />
      </section>

      <section className="app__searching">
        <div className="app__nav">
          <Nav beerArr={filteredBeers} />
        </div>

        <section className="app__main">
          <Main title={"Our Main Beers"} beerArr={filteredBeers} />
        </section>
      </section>
    </div>
  );
};

export default App;
