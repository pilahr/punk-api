import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { React, useState, useEffect } from "react";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import Home from "./components/Home/Home";

const App = () => {
  const [beers, setBeers] = useState([]);

  const [beersRange, setBeersRange] = useState(1);
  const [abv, setAbv] = useState(1);
  const [ebc, setEbc] = useState(1);
  const [ibu, setIbu] = useState(1);

  const getBeersData = async (page, abvResult, ebcResult, ibuResult) => {
    const url = `https://api.punkapi.com/v2/beers`;
    let pageURL = url + `?page=${page}&per_page=80`;

    if (abvResult > 1) {
      pageURL = url + `?abv_gt=${abvResult}`;
    } else if (ebcResult > 1) {
      pageURL = url + `?ebc_gt=${ebcResult}`;
    } else if (ibuResult > 1) {
      pageURL = url + `?ibu_gt=${ibuResult}`;
    }

    const response = await fetch(pageURL);
    const data = await response.json();

    console.log(data);
    setBeers(data);
  };

  useEffect(() => {
    getBeersData(beersRange, abv, ebc, ibu);
  }, [beersRange, abv, ebc, ibu]);

  const handleRangeChange = (event) => {
    setBeersRange(event.target.value);
  };

  const handleABVChange = (event) => {
    setAbv(event.target.value);
  };

  const handleEBCChange = (event) => {
    setEbc(event.target.value);
  };

  const handleIBUChange = (event) => {
    setIbu(event.target.value);
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
                ebc={ebc}
                handleEBCChange={handleEBCChange}
                ibu={ibu}
                handleIBUChange={handleIBUChange}
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
