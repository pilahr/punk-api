import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { React, useState, useEffect } from "react";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import Home from "./components/Home/Home";

const App = () => {
  const [beers, setBeers] = useState([]);

  const getBeersData = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const response = await fetch(url);
    const data = await response.json();

    setBeers(data);
  };

  useEffect(() => {
    getBeersData();
  }, []);

  const filteredBeers = beers.filter(
    (beer) => beer.image_url && beer.description
  );

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home beers={beers}/>} />
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
