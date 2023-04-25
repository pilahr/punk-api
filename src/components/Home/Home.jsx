import "./Home.scss";
import { React, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";

const Home = ({ beers }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showABV, setShowABV] = useState(false);
  const [showClassicRange, setShowClassicRange] = useState(false);
  const [showAcidic, setShowAcidic] = useState(false);

  const [showHome, setShowHome] = useState(false);

  const toggleHome = () => {
    setShowHome(!showHome);
  };

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

  const filterFirstBrewed = new Date(firstBrewed);

  // ACIDIC FILTER
  const handleShowAcidic = () => {
    setShowAcidic(!showAcidic);
  };

  const filterAcidicBeer = beers.filter(
    (beer) => beer.ph != null && beer.ph < 4
  );

  //   const getFiltered = () => {
  //     if (showABV) {
  //       return <Main beerArr={filterHighABV} />;
  //     } else if (showAcidic) {
  //       return <Main beerArr={filterAcidicBeer} />;
  //     } else {
  //       return <Main beerArr={searchedBeers} />;
  //     }
  //   };

  return (
    <div className="app">
      <section className="app__heading">
        <Header toggleHome={toggleHome} />
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
          {/* <Main beerArr={searchedBeers} /> */}
          {/* <Main beerArr={getFiltered()} /> */}

          {/* {showABV ? (
            <Main beerArr={filterHighABV} />
          ) : (
            <Main beerArr={searchedBeers} />
          )} */}

          {showAcidic ? (
            <Main beerArr={filterAcidicBeer} />
          ) : (
            <Main beerArr={searchedBeers} />
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
