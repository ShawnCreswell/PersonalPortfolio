import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const Edit = (props) => {
  // const { id } = useParams();
  // const [name, setName] = useState("");
  // const [imgUrl, setImgUrl] = useState("");
  // const [crewPosition, setCrewPosition] = useState("");
  // const [treasure, setTreasure] = useState("");
  // const [portfolioPhrase, setPortfolioPhrase] = useState("");
  // const [pegLeg, setPegLeg] = useState("yes");
  // const [eyePatch, setEyePatch] = useState("yes");
  // const [hookHand, setHookHand] = useState("yes");
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/portfolio/" + id)
      .then((res) => {
        setPortfolio(res.data);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [portfolio]);


  return (
    <div className="container">
      {portfolio && (
        <div className="card border border-dark border-5">
          <div className=" d-flex card-header text-center text-white justify-content-center border-bottom border-dark" style={{backgroundColor: "rgb(120,63,4)"}} >
            <div>
              <h1>{portfolio.name}</h1>
            </div>
            <div className="ms-5">
              <Link
                className="btn text-white me-1"
                style={{
                  fontSize: "10px",
                  width: "100px",
                  height: "50px",
                  backgroundColor: "darkblue",
                }}
                to={`/portfolio`}
              >
                <p>Home</p>
              </Link>
            </div>
          </div>
          <div className="card-body d-flex justify-content-center align-items-center" style={{backgroundColor: "orange"}}>
            <div className="text-center">
              <div className="border border-dark border-5" style={{backgroundColor: "white"}}>
                <img src={`${portfolio.imgUrl}`} alt="" style={{width:"200px"}}/>
                </div>
              <h3 className="text-black mt-2">"{portfolio.portfolioPhrase}"</h3>
            </div>
            <div className="border border-dark ms-5 ps-2" style={{width: "50%", backgroundColor: "white"}}>
              <h3 className="text-center">About</h3>
              <p>Position: {portfolio.crewPosition}</p>
              <p>Treasure: {portfolio.treasure}</p>
              <p>Peg Leg: {portfolio.pegLeg}</p>
              <p>Eye Patch: {portfolio.eyePatch}</p>
              <p>Hook Hand: {portfolio.hookHand}</p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
export default Edit;
