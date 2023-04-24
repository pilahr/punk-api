import "./App.scss";
import { React, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import beers from "../src/assets/data/beers.js";
import SearchBox from "./components/SearchBox/SearchBox";
import FilterList from "./components/FilterList/FilterList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showABV, setShowABV] = useState(false);
  const [showClassicRange, setShowClassicRange] = useState(false);
  const [showAcidic, setShowAcidic] = useState(false);

  // SEARCH BAR
  const handleInput = (event) => {
    const lowerCaseSearchedResult = event.target.value.toLowerCase();
    setSearchTerm(lowerCaseSearchedResult);
  };

  const searchedBeers = beers.filter((beer) => {
    const beerNameLowerCase = beer.name.toLowerCase();
    return beerNameLowerCase.includes(searchTerm);
  });

  // ABV FILTER
  const handleShowABV = () => {
    setShowABV(!showABV);
  };

  const filterHighABV = beers.filter(
    (beer) => beer.abv != null && beer.abv >= 6
  );

  // CLASSIC RANGE FILTER
  const handleShowClassicRange = () => {
    setShowClassicRange(!showClassicRange);
  };

  const classicDate = new Date("2010");

  const filterFirstBrew = beers.filter((beer) => beer.first_brewed);

  // moment(filterFirstBrew).isBefore(classicDate);

  // ACIDIC FILTER
  const handleShowAcidic = () => {
    setShowAcidic(!showAcidic);
  };

  const filterAcidicBeer = beers.filter(
    (beer) => beer.ph != null && beer.ph < 4
  );

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

          <FilterList label={"High ABV ( > 6.0%)"} onChange={handleShowABV} />
          <FilterList
            label={"Classic Range"}
            onChange={handleShowClassicRange}
          />
          <FilterList label={"Acidic (ph < 4)"} onChange={handleShowAcidic} />
        </section>

        <section className="app__main">
          {showABV && (
            <Main beerArr={handleShowABV ? filterHighABV : <Main />} />
          )}

          {/* {showClassicRange && (
            <Main
              beerArr={
                handleShowClassicRange ? filterClassicRange : searchedBeers
              }
            />
          )} */}

          {showAcidic && (
            <Main
              beerArr={handleShowAcidic ? filterAcidicBeer : searchedBeers}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default App;
