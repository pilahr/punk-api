import "./Nav.scss";
import { React, useState } from "react";
import FilterList from "../FilterList/FilterList";
import ExploreBeers from "../Container/ExploreBeers/ExploreBeers";
import beers from "../../assets/data/beers.js";
import SearchBox from "../SearchBox/SearchBox";

const Nav = (props) => {
  const { searchTerm, handleInput } = props;

  return (
    <>
      <div className="nav">
        <SearchBox
          label="Search for our varieties of beers.."
          searchTerms={searchTerm}
          handleInput={handleInput}
        />
        <FilterList />
      </div>
      <section>
        <ExploreBeers beerArr={beers} />
      </section>
    </>
  );
};

export default Nav;
