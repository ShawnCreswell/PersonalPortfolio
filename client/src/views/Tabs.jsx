import React, { useEffect, useState } from "react";
import axios from "axios";

import StatusP from "./Status";
const Tabs = (props) => {
  const [currentTab, setCurrentTab] = useState();

  const [team, setTeam] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/team")
      .then((res) => {
        setTeam(res.data.team);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [team]);

  const removeFromDom = (teamId) => {
    setTeam(team.filter((team) => team._id !== teamId));
  };

  const tabs = [
    {
      tabHeader: "Game 1",
      content: "",
    },
    {
      tabHeader: "Game 2",
      content: "Second Tab",
    },
    {
      tabHeader: "Game 3",
      content: "Third Tab",
    },
  ];

  const handleTabClick = (e) => {
    e.preventDefault();
    setCurrentTab(e.target.value);
  };

  return (
    <div className="container">
      <div className="card m-5">
        <div className="card-header">
          <div className="tab-btn">
            <div className="d-flex justify-content-evenly nav-tabs">
              <h1>Game 1</h1>
              {tabs.map((tab, index) => (
                <button
                  value={index}
                  className="btn btn-primary"
                  key={index}
                  disabled={currentTab === String(index)}
                  onClick={handleTabClick}
                >
                  {" "}
                  {tab.tabHeader}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="tabBody">
            {tabs.map((tab, index) => (
              <div key={index}>
                {currentTab === String(index) && (
                  <div>
                      <div
                        className="card-header text-center"
                        style={{ width: "100%" }}
                      >
                        <h1>Player Status - {tab.tabHeader}</h1>
                      </div>
    
                        {loaded && (
                          <StatusP team={team} removeFromDom={removeFromDom} />
                        )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
