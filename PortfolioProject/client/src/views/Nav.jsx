import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div
      className="bg-primary d-flex align-items-center justify-content-between"
      style={{ height: "75px" }}
    >
      <div>
        <Link to={`/home`}>
        <h1 className="text-white ms-5">Shawn Creswell</h1>
        </Link>
      </div>
      <div className="justify-self-end align-items-end me-3">
        <Link
          className="btn text-black me-1"
          style={{
            fontSize: "10px",
            width: "150px",
            height: "50px",
            backgroundColor: "white",
          }}
          to={`/portfolio`}
        >
          <p>About Me</p>
        </Link>
        <Link
          className="btn text-black me-1"
          style={{
            fontSize: "10px",
            width: "150px",
            height: "50px",
            backgroundColor: "white",
          }}
          to={`/new`}
        >
          <p>Projects</p>
        </Link>
        <Link
          className="btn text-black me-1"
          style={{
            fontSize: "10px",
            width: "150px",
            height: "50px",
            backgroundColor: "white",
          }}
          to={`/portfolio`}
        >
          <p>Contact Me</p>
        </Link>
      </div>
    </div>
  );
};
export default Nav;
