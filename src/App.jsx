import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { React, useState, useEffect } from "react";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import Home from "./components/Home/Home";

const App = () => {
  const [beers, setBeers] = useState([]);
  // const [highABV, setHighABV] = useState(6);
  const [beersPerPage, setBeersPerPage] = useState(40);

  const getBeersData = async (resultNumber) => {
    const url = "https://api.punkapi.com/v2/beers";
    

    let urlToShowBeer = url + `?per_page=${resultNumber}`;

    const response = await fetch(urlToShowBeer);
    const data = await response.json();

    console.log(data);
    setBeers(data);
  };

  // https://api.punkapi.com/v2/beers?abv_gt=6
  //https://api.punkapi.com/v2/beers?per_page=80
  //https://api.punkapi.com/v2/beers?page=5&per_page=80

  useEffect(() => {
    getBeersData(beersPerPage);
  }, [beersPerPage]);

  const handleRangeChange = (event) => {
    setBeersPerPage(event.target.value);
  };

  const filteredBeers = beers.filter(
    (beer) => beer.image_url && beer.description
  );

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                beers={beers}
                handleRangeChange={handleRangeChange}
                beersPerPage={beersPerPage}
              />
            }
          />
          <Route
            path="/beer/:beerId"
            element={<BeerInfo beers={filteredBeers} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
