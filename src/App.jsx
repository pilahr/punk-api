import "./App.scss";
import { React, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import beers from "../src/assets/data/beers.js";
import SearchBox from "./components/SearchBox/SearchBox";
import FilterList from "./components/FilterList/FilterList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const lowerCaseSearchedResult = event.target.value.toLowerCase();
    setSearchTerm(lowerCaseSearchedResult);
  };

  const searchedBeers = beers.filter((beer) => {
    const beerNameLowerCase = beer.name.toLowerCase();
    return beerNameLowerCase.includes(searchTerm);
  });

  return (
    <div className="app">
      <section className="app__heading">
        <Header />
      </section>

      <div className="app__container">
        <section className="app__nav">
          <SearchBox
            label="explore our varieties of beers.."
            searchTerms={searchTerm}
            handleInput={handleInput}
          />

          <FilterList label={"High ABV ( > 6.0%)"} />
          <FilterList label={"Classic Range"} />
          <FilterList label={"Acidic (ph < 4)"} />
        </section>

        <section className="app__main">
          <Main beerArr={searchedBeers} />
        </section>
      </div>
    </div>
  );
};

export default App;
