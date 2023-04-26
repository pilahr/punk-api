import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { React, useState, useEffect } from "react";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import Home from "./components/Home/Home";

const App = () => {
  const [beers, setBeers] = useState([]);

  const [beersRange, setBeersRange] = useState(1);
  const [abv, setAbv] = useState(1);

  const getBeersData = async (page, abvResult) => {
    const url = `https://api.punkapi.com/v2/beers`;
    let pageURL = url + `?page=${page}&per_page=80`;

    if (abvResult > 1) {
      pageURL = url + `?abv_gt=${abvResult}`;
    }

    const response = await fetch(pageURL);
    const data = await response.json();
    console.log(pageURL);
    setBeers(data);
  };

  // https://api.punkapi.com/v2/beers?abv_gt=6
  //https://api.punkapi.com/v2/beers?per_page=80
  //https://api.punkapi.com/v2/beers?page=5&per_page=80 //325total

  useEffect(() => {
    getBeersData(beersRange, abv);
  }, [beersRange, abv]);

  const handleRangeChange = (event) => {
    setBeersRange(event.target.value);
  };

  const handleABVChange = (event) => {
    setAbv(event.target.value);
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
                beers={filteredBeers}
                handleRangeChange={handleRangeChange}
                beersRange={beersRange}
                abv={abv}
                handleABVChange={handleABVChange}
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
