import React, { useState, useEffect } from "react";
import axios from "axios";

const StatusList = ({ num }) => {

  const [pirate, setPirate] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [pirates, setPirates] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pirate")
      .then((response) => {
        console.log("useEffect -->", response.data.pirates);
        setPirates(response.data.pirates);
        setLoaded(true);
      })
      .catch((error) => console.error(error));
  }, [pirate]);
  const updateStatus = (pirateId, status) => {
    setPirate(pirates.filter((p) => p._id === pirateId));
    axios
      .put("http://localhost:8000/api/pirate/" + pirateId, {
        ...pirate,
        ["status" + num]: status,
      })
      .then((response) => {
        console.log("updateStatus -->", response.data.status3);
        setPirate(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="card m-3">
      <div className="card-body">
        <h4>Pirates</h4>
        <table className="table table-bordered table-striped table-hover m-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loaded &&
              pirates.map((pirate) => {
                return (
                  <tr key={pirate._id} className="align-baseline">
                    <td>{pirate.name}</td>
                    <td>
                      <button
                        className={
                          "btn " +
                          (pirate[`status${num}`] === "playing"
                            ? "btn-success"
                            : "btn-secondary")
                        }
                        onClick={() => updateStatus(pirate._id, "playing")}
                      >
                        Playing
                      </button>
                      <button
                        className={
                          "btn " +
                          (pirate[`status${num}`] === "not playing"
                            ? "btn-danger"
                            : "btn-secondary")
                        }
                        onClick={() => updateStatus(pirate._id, "not playing")}
                      >
                        Not Playing
                      </button>
                      <button
                        className={
                          "btn " +
                          (pirate[`status${num}`] === "undecided"
                            ? "btn-warning"
                            : "btn-secondary")
                        }
                        onClick={() => updateStatus(pirate._id, "undecided")}
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
