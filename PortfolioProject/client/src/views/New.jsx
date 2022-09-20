import React, { useEffect, useState } from "react";
import axios from "axios";
import PortfolioForm from "../components/PortfolioForm";

const New = () => {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/portfolio")
      .then((res) => {
        setPortfolio(res.data.portfolio);
      })
      .catch((err) => console.error(err));
  }, [portfolio]);

  return (
    <div>
      <PortfolioForm />
    </div>
  );
};

export default New;
