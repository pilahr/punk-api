import "./Nav.scss";
import { React, useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";
import CardList from "../CardList/CardList";

const Nav = (props) => {
  const { beerArr } = props;

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const lowerCaseInput = event.target.value.toLowerCase();
    setSearchTerm(lowerCaseInput);
  };

  const searchedBeers = beerArr.filter((beer) => {
    return beer.name.includes(searchTerm) && beer.image_url;
  });

  return (
    <>
      <div className="nav">
        <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
        <FilterList />
      </div>
    </>
  );
};

export default Nav;
