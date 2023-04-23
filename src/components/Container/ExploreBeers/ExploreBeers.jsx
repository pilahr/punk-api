import { React, useState } from "react";
import "./ExploreBeers.scss";
import SearchBox from "../../SearchBox/SearchBox";
import Main from "../../Main/Main";

const ExploreBeers = (props) => {
  const { beerArr } = props;

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const lowerCaseSearchedResult = event.target.value.toLowerCase();
    setSearchTerm(lowerCaseSearchedResult);
  };

  const searchedBeers = beerArr.filter((beer, index) => {
    const beerNameLowerCase = beer.name.toLowerCase();
    return beerNameLowerCase.includes(searchTerm);
  });

  return (
    <>
      <SearchBox
        label="search for our varieties of beers.."
        searchTerms={searchTerm}
        handleInput={handleInput}
      />
      <Main beerArr={searchedBeers} />
    </>
  );
};

export default ExploreBeers;
