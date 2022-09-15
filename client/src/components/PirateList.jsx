import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PirateList = (props) => {
  const { removeFromDom } = props;

  const deletePirate = (pirateId) => {
    axios
      .delete("http://localhost:8000/api/pirate/" + pirateId)
      .then((res) => {
        removeFromDom(pirateId);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="container">
        <div
          className="card text-center text-white border border-dark border-5"
          style={{ backgroundColor: "rgb(120,63,4)" }}
        >
          <div className="card-body d-flex justify-content-center me-5">
            <div>
              <h1>Pirate Crew</h1>
            </div>
            <div>
              <Link
                className="btn text-white ms-5"
                style={{
                  fontSize: "10px",
                  width: "120px",
                  height: "50px",
                  backgroundColor: "darkblue",
                  borderBoxShadow: "3px, 3px, 3px",
                }}
                to={`/new`}
              >
                <p>Add Pirate</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="card border border-dark border-5"
          style={{ backgroundColor: "orange" }}
        >
          {props.pirate &&
            props.pirate.map((pirate, i) => {
              return (
                <div>
                  <div className="card-header bg-dark text-white text-center">
                    <h1>{pirate.name}</h1>
                  </div>
                  <div
                    className="card-body mb-3"
                    style={{ backgroundColor: "white" }}
                  >
                    <div key={i} className="d-flex "></div>
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="me-5 border border-dark border-3 text-center" style={{height: "125px", width: "200px", backgroundColor: "white" }}>
                        <img
                          src={`${pirate.imgUrl}`}
                          alt=""
                          style={{ width: "100px", height:"100px" }}
                        />
                      </div>

                      <div className="d-flex">
                        <Link
                          className="btn btn-warning me-2 text-center"
                          style={{ width: "200px", height: "50px" }}
                          to={`/pirate/edit/${pirate._id}`}
                        >
                          <p>View Pirate</p>
                        </Link>
                        <button
                          className="btn btn-danger"
                          style={{ width: "200px", height: "50px" }}
                          onClick={(e) => deletePirate(pirate._id)}
                        >
                          Walk the Plank
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PirateList;
