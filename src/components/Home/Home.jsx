import "./Home.scss";
import { React, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";
import RangeInput from "../RangeInput/RangeInput";

const Home = ({
  beers,
  beersRange,
  handleRangeChange,
  abv,
  handleABVChange,
  ebc,
  handleEBCChange,
  ibu,
  handleIBUChange,
}) => {
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
            label={`Page: ${beersRange}`}
            min={1}
            max={5}
            value={beersRange}
            onChange={handleRangeChange}
            beers={beersRange}
          />

          <RangeInput
            id={"abv range"}
            label={`Min ABV: ${abv}%`}
            title={"ABV: Alcohol By Volume"}
            min={1}
            max={55}
            value={abv}
            onChange={handleABVChange}
            beers={abv}
          />

          <RangeInput
            id={"ibu range"}
            label={`Min IBU: ${ibu}`}
            title={"IBU: International Bitterness Units scale"}
            min={1}
            max={100}
            value={ibu}
            onChange={handleIBUChange}
            beers={ibu}
          />

          <RangeInput
            id={"ebc range"}
            label={`Min EBC: ${ebc}`}
            title={"EBC: European Brewery Convention"}
            min={1}
            max={500}
            value={ebc}
            onChange={handleEBCChange}
            beers={ebc}
          />
        </section>

        <section className="app__main">
          <Main beers={filteredResults} />
        </section>
      </div>
    </div>
  );
};

export default Home;
