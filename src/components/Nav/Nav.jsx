import "./Nav.scss";
import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";

const Nav = () => {
  return (
    <div className="nav">
      <SearchBox />
      <FilterList />
    </div>
  );
};

export default Nav;
