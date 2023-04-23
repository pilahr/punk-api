import "./Nav.scss";
import { React, useState } from "react";
import FilterList from "../FilterList/FilterList";
import ExploreBeers from "../Container/ExploreBeers/ExploreBeers";
import beers from "../../assets/data/beers.js";
import SearchBox from "../SearchBox/SearchBox";

const Nav = (props) => {
  const { searchTerm, handleInput } = props;
  const [highABV, setHighABV] = useState(false);

  const handleChange = () => {
    setHighABV(!highABV);
  };

  return (
    <>
      <div className="nav">
        <SearchBox
          label="Search for our varieties of beers.."
          searchTerms={searchTerm}
          handleInput={handleInput}
        />
        <FilterList label={"High ABV ( > 6.0%)"} handleChange={handleChange} />
        <FilterList label={"Classic Range"} />
        <FilterList label={"Acidic (ph < 4)"} />
      </div>
      <section>
        <ExploreBeers beerArr={beers} />
      </section>
    </>
  );
};

export default Nav;
