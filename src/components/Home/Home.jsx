import "./Home.scss";
import { React, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";
import RangeInput from "../RangeInput/RangeInput";

const Home = ({ beers, beersPerPage, handleRangeChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showABV, setShowABV] = useState(false);
  const [showClassicRange, setShowClassicRange] = useState(false);
  const [showAcidic, setShowAcidic] = useState(false);
  const [showHome, setShowHome] = useState(false);

  // SEARCH BAR
  const handleInput = (event) => {
    const lowerCaseSearchedResult = event.target.value.toLowerCase();
    setSearchTerm(lowerCaseSearchedResult);
  };

  // const searchedBeers = beers.filter((beer) => {
  //   const beerNameLowerCase = beer.name.toLowerCase();
  //   return beerNameLowerCase.includes(searchTerm);
  // });

  //CHECK BOX
  const handleCheckBox = (event) => {
    switch (event.target.value) {
      case "showABV":
        setShowABV(!showABV);
        return;
      case "showClassicRange":
        setShowClassicRange(!showClassicRange);
        return;
      case "showAcidic":
        setShowAcidic(!showAcidic);
        return;
    }
  };

  const filteredResults = beers.filter((beer) => {
    const lowerCaseBeer = beer.name.toLowerCase();
    if (!lowerCaseBeer.includes(searchTerm)) {
      return false;
    } else if (beer.abv === null) {
      return false;
    } else if (showABV && beer.abv < 6) {
      return false;
    } else if (beer.first_brewed === null) {
      return false;
    } else if (showClassicRange && beer.first_brewed.slice(-4) >= 2010) {
      return false;
    } else if (beer.ph === null) {
      return false;
    } else if (showAcidic && beer.ph > 4) {
      return false;
    }
    return true;
  });

  const toggleHome = () => {
    setShowHome(!showHome);
  };

  // ABV FILTER
  // const handleShowABV = () => {
  //   setShowABV(!showABV);
  // };

  // const filterHighABV = beers.filter(
  //   (beer) => beer.abv != null && beer.abv >= 6
  // );

  // CLASSIC RANGE FILTER
  // const handleShowClassicRange = () => {
  //   setShowClassicRange(!showClassicRange);
  // };

  // const filterFirstBrewed = beers.filter(
  //   (beer) => beer.first_brewed != null && beer.first_brewed.slice(-4) < 2010
  // );

  // ACIDIC FILTER
  // const handleShowAcidic = () => {
  //   setShowAcidic(!showAcidic);
  // };

  // const filterAcidicBeer = beers.filter(
  //   (beer) => beer.ph != null && beer.ph < 4
  // );

  // const results = beers
  //   .filter((beer) =>
  //     beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  //   .filter((beer) => (beer.abv != null ? beer.abv >= 6 : beer))
  //   .filter((beer) =>
  //     beer.first_brewed != null ? beer.first_brewed.slice(-4) < 2010 : beer
  //   )
  //   .filter((beer) => (beer.ph != null ? beer.ph < 4 : beer))
  //   .map((beer) => <Main beer={beer} />); //map through all that pass criteria above

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

          <FilterList
            filterOption="showABV"
            label={"High ABV ( > 6.0%)"}
            handleCheckBox={handleCheckBox}
          />

          <FilterList
            filterOption="showClassicRange"
            label={"Classic Range"}
            handleCheckBox={handleCheckBox}
          />
          <FilterList
            filterOption="showAcidic"
            label={"Acidic (ph < 4)"}
            handleCheckBox={handleCheckBox}
          />

          <RangeInput
            id={"beer range"}
            label={`Number of beers: ${beersPerPage}`}
            min={1}
            max={80}
            value={beersPerPage}
            onChange={handleRangeChange}
          />
        </section>

        <section className="app__main">
          <Main beers={filteredResults} />
          {/* <Main beerArr={searchedBeers} /> */}

          {/* {showABV ? (
            <Main beerArr={filterHighABV} />
          ) : (
            <Main beerArr={searchedBeers} />
          )} */}

          {/* {showAcidic ? (
            <Main beerArr={filterAcidicBeer} />
          ) : (
            <Main beerArr={searchedBeers} />
          )} */}
        </section>
      </div>
    </div>
  );
};

export default Home;
