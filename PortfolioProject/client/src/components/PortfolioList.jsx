import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AboutMe = (props) => {
  const { removeFromDom } = props;

  const deletePortfolio = (portfolioId) => {
    axios
      .delete("http://localhost:8000/api/portfolio/" + portfolioId)
      .then((res) => {
        removeFromDom(portfolioId);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="container" style={{ height: "1000px", marginTop:"200px" }}>
        <div
          className="d-flex justify-content-start align-items-center mb-5"
          style={{ backgroundColor: "" }}>
          <img
            className="me-5"
            style={{ width: "500px", borderRadius:"50px"}}
            src={"https://avatars.githubusercontent.com/u/109317308?v=4"}
          />
          <div>
            <h1 className="text-white">
              I am Shawn, Software engineer located in Los Angeles
            </h1>
            <p className="text-black">
              Passionate engineer with 8+ years of experience in operations
              and management. Seeking to use proven skills in Full-Stack Development. Developed, programmed, and tested a new mobile application for private security companies to improve organization and structure, which has generated postive feedback from Blue diamond Co and helped garner over $500,000. 
            </p>
          </div>
        </div>
          <div className="d-flex justify-content-end">
          </div>
      </div>
    </div>
  );
};

export default AboutMe;
