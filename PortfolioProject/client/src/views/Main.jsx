import React, { useEffect, useState } from "react";
import axios from "axios";
import PortfolioList from "../components/PortfolioList";

const Main = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/portfolio")
      .then((res) => {
        setPortfolio(res.data.portfolios);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [portfolio]);

  const removeFromDom = (portfolioId) => {
    setPortfolio(portfolio.filter((portfolio) => portfolio._id !== portfolioId));
  };
  
  return (
    <div className="table">
      {loaded && (
        <PortfolioList portfolio={portfolio} removeFromDom={removeFromDom} />
      )}
    </div>
  );
};

export default Main;
