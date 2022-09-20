import React, { useState, useEffect } from "react";
import axios from "axios";

const StatusList = ({ num }) => {

  const [portfolio, setPortfolio] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/portfolio")
      .then((response) => {
        console.log("useEffect -->", response.data.portfolios);
        setPortfolios(response.data.portfolios);
        setLoaded(true);
      })
      .catch((error) => console.error(error));
  }, [portfolio]);
  const updateStatus = (portfolioId, status) => {
    setPortfolio(portfolios.filter((p) => p._id === portfolioId));
    axios
      .put("http://localhost:8000/api/portfolio/" + portfolioId, {
        ...portfolio,
        ["status" + num]: status,
      })
      .then((response) => {
        console.log("updateStatus -->", response.data.status3);
        setPortfolio(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="card m-3">
      <div className="card-body">
        <h4>Portfolios</h4>
        <table className="table table-bordered table-striped table-hover m-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loaded &&
              portfolios.map((portfolio) => {
                return (
                  <tr key={portfolio._id} className="align-baseline">
                    <td>{portfolio.name}</td>
                    <td>
                      <button
                        className={
                          "btn " +
                          (portfolio[`status${num}`] === "playing"
                            ? "btn-success"
                            : "btn-secondary")
                        }
                        onClick={() => updateStatus(portfolio._id, "playing")}
                      >
                        Playing
                      </button>
                      <button
                        className={
                          "btn " +
                          (portfolio[`status${num}`] === "not playing"
                            ? "btn-danger"
                            : "btn-secondary")
                        }
                        onClick={() => updateStatus(portfolio._id, "not playing")}
                      >
                        Not Playing
                      </button>
                      <button
                        className={
                          "btn " +
                          (portfolio[`status${num}`] === "undecided"
                            ? "btn-warning"
                            : "btn-secondary")
                        }
                        onClick={() => updateStatus(portfolio._id, "undecided")}
                      >
                        Undecided
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatusList;
