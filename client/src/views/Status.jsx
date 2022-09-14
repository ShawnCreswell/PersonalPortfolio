import React, {useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const StatusP = ({props }) => {
  const {teams, setTeams, setGameNum} = props
  const {id} = useParams()

  const handleClick = (index) => {

  }


  useEffect(() => {
    setGameNum(id)
  }, [id]);
  
  return (
    <div>
      <div className="container">
        <div className="card"></div>
      </div>

      <div className="container">
        <table className="table table-striped table-hover table-bordered border-primary">
          <thead className="bg-dark text-white">
            <tr>
              <th>Team Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          {
            teams.map((team, i) => {
              return (
                <tbody>
                  <div key={i} className="d-flex"></div>
                  <tr>
                    <td>
                      <Link to={`/team/edit/${team._id}`}>
                        <p>{team.name}</p>
                      </Link>
                    </td>
                    <td>
                      {team.gameStatus[id - 1] === "playing" && (
                        <div className="d-flex">
                          <button
                            onClick={() => handleClick(i)}
                            value="playing"
                            className="btn btn-success me-1"
                            style={{
                              width: "110px",
                              height: "50px",
                              fontSize: "10px",
                            }}
                          >
                            Playing
                          </button>
                          <button
                            onClick={() => handleClick(i)}
                            value="not_playing"
                            className="btn me-1"
                            style={{
                              width: "150px",
                              height: "50px",
                              fontSize: "10px",
                            }}
                          >
                            Not Playing
                          </button>
                          <button
                            onClick={() => handleClick(i)}
                            value="undecided"
                            className="btn"
                            style={{
                              width: "110px",
                              height: "50px",
                              fontSize: "10px",
                            }}
                          >
                            Undecided
                          </button>
                        </div>
                      )}
                      {team.gameStatus[id - 1] === "not_playing" && (
                        <div className="d-flex">
                          <button
                            onClick={() => handleClick(i)}
                            value="playing"
                            className="btn me-1"
                            style={{
                              width: "110px",
                              height: "50px",
                              fontSize: "10px",
                            }}
                          >
                            Playing
                          </button>
                          <button
                            onClick={() => handleClick(i)}
                            value="not_playing"
                            className="btn btn-danger me-1"
                            style={{
                              width: "150px",
                              height: "50px",
                              fontSize: "10px",
                            }}
                          >
                            Not Playing
                          </button>
                          <button
                            onClick={() => handleClick(i)}
                            value="undecided"
                            className="btn"
                            style={{
                              width: "110px",
                              height: "50px",
                              fontSize: "10px",
                            }}
                          >
                            Undecided
                          </button>
                        </div>
                      )}
                      {team.gameStatus[id - 1] === "playing" && (
                        <div className="d-flex">
                          <button
                            onClick={() => handleClick(i)}
                            value="playing"
                            className="btn me-1"
                            style={{
                              width: "110px",
                              height: "50px",
                              fontSize: "10px",
                            }}
                          >
                            Playing
                          </button>
                          <button
                            onClick={() => handleClick(i)}
                            value="not_playing"
                            className="btn me-1"
                            style={{
                              width: "150px",
                              height: "50px",
                              fontSize: "10px",
                            }}
                          >
                            Not Playing
                          </button>
                          <button
                            onClick={() => handleClick(i)}
                            value="undecided"
                            className="btn btn-warning"
                            style={{
                              width: "110px",
                              height: "50px",
                              fontSize: "10px",
                            }}
                          >
                            Undecided
                          </button>
                        </div>
                      )}
                      {/* <button className={"btn " + (team[`status${num}`] == "playing" ? "btn-success" : "btn-secondary")} onClick={() => updateStatus(team._id, "playing")}>Playing</button>
                            <button className={"btn " + (team[`status${num}`] == "not playing" ? "btn-danger" : "btn-secondary")} onClick={() => updateStatus(team._id, "not playing")}>Not Playing</button>
                            <button className={"btn " + (team[`status${num}`] == "undecided" ? "btn-warning" : "btn-secondary")} onClick={() => updateStatus(team._id, "undecided")}>Undecided</button> */}
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default StatusP;
