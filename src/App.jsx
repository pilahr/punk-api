import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { React, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import beers from "../src/assets/data/beers.js";
import SearchBox from "./components/SearchBox/SearchBox";
import FilterList from "./components/FilterList/FilterList";
import BeerInfo from "./components/BeerInfo/BeerInfo";

const App = () => {
  // const [beers, SetBeers] = useState();

  // const getBeersData = async () => {
  //   const url = "https://api.punkapi.com/v2/beers";
  //   const response = await fetch(url);
  //   const data = await response.json();

  //   console.log(data[0]);
  // };
  const [searchTerm, setSearchTerm] = useState("");
  const [showABV, setShowABV] = useState(false);
  const [showClassicRange, setShowClassicRange] = useState(false);
  const [showAcidic, setShowAcidic] = useState(false);

  const filteredBeers = beers.filter(
    (beer) => beer.image_url && beer.description
  );

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

  const firstBrewed = beers.filter((beer) => beer.first_brewed);

  console.log(firstBrewed);
  const filterFirstBrewed = new Date(firstBrewed);

  console.log(filterFirstBrewed);
  // ACIDIC FILTER
  const handleShowAcidic = () => {
    setShowAcidic(!showAcidic);
  };

  const filterAcidicBeer = beers.filter(
    (beer) => beer.ph != null && beer.ph < 4
  );

  return (
    <Router>
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
            {showABV ? (
              <Main beerArr={filterHighABV} />
            ) : (
              <Main beerArr={filteredBeers} />
            )}

            {/* {showClassicRange && (
            <Main
              beerArr={
                handleShowClassicRange ? filterClassicRange : searchedBeers
              }
            />
          )} */}

            {showAcidic ? (
              <Main beerArr={filterAcidicBeer} />
            ) : (
              <Main beerArr={filteredBeers} />
            )}
          </section>
        </div>

        <Routes>
          <Route
            path="/beer/:beerId"
            element={<BeerInfo beerArr={filteredBeers} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
