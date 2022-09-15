import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AuthorForm = () => {
  const [name, setName] = useState("");
  // const [imgUrl, setImgUrl] = useState("https://media.istockphoto.com/vectors/pirate-skull-emblem-illustration-with-crossed-sabers-vector-id1159854564?k=20&m=1159854564&s=612x612&w=0&h=0ODLCtqr5t-1TKWVh9Rj-EvQXAA67hWYoaUaQ6LvGJA=");
  const [imgUrl, setImgUrl] = useState("https://tinyurl.com/4v38j37p");
  const [crewPosition, setCrewPosition] = useState("");
  const [treasure, setTreasure] = useState("");
  const [piratePhrase, setPiratePhrase] = useState("");
  const [pegLeg, setPegLeg] = useState("yes");
  const [eyePatch, setEyePatch] = useState("yes");
  const [hookHand, setHookHand] = useState("yes");

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/pirate", {
        name,
        imgUrl,
        crewPosition,
        treasure,
        piratePhrase,
        pegLeg,
        eyePatch,
        hookHand,
      })

      .then(() => navigate("/pirate"))

      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      })

      .finally(() => {
        setName("");
        setImgUrl("");
        setCrewPosition("");
        setTreasure();
        setPiratePhrase("");
        setPegLeg("yes");
        setEyePatch("yes");
        setHookHand("yes");
      });
  };

  return (
    <div className="container">
      <div className="card mt-5 border border-dark border-5">
        <div
          className="card-header border-bottom border-dark text-center text-white d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgb(120,63,4)" }}
        >
          <div className="me-5">
            <h1>Add a Pirate</h1>
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
              to={`/pirate`}
            >
              <p>Home</p>
            </Link>
          </div>
        </div>
        <div className="card-body" style={{ backgroundColor: "orange" }}>
          <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => (
              <p style={{ color: "red" }} key={index}>
                {err}
              </p>
            ))}
            <p>
              <label>Pirate Name:</label>
              <br />
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </p>
            <p>
              <label>Image Url:</label>
              <br />
              <input
                type="text"
                onChange={(e) => setImgUrl(e.target.value)}
                value={imgUrl}
              />
            </p>
            <p>
              <label>Crew Position:</label>
              <br />
              <select onChange={(e) => setCrewPosition(e.target.value)}>
                <option Selected value="Click to see options"></option>
                <option value="Captian">Captian</option>
                <option value="First Mate">First Mate</option>
                <option value="Quater Master">Quater Master</option>
                <option value="BootSwain">Bootswain</option>
                <option value="Powder Monkey">Powder Monkey</option>
              </select>
            </p>
            <p>
              <label># of Treasure Chests</label>
              <br />
              <input
                type="number"
                onChange={(e) => setTreasure(e.target.value)}
                value={treasure}
              />
            </p>
            <p>
              <label>Pirate Catch Phrase: </label>
              <br />
              <input
                type="text"
                onChange={(e) => setPiratePhrase(e.target.value)}
                value={piratePhrase}
              />
            </p>

            <div>
              <input
                className="form-check-input"
                type={"checkbox"}
                value={pegLeg}
                id={"flexCheckChecked"}
                checked
              />
              <label className="form-check-label" for="flexCheckChecked">
                {" "}
                Peg Leg
              </label>
            </div>
            <div>
              <input
                className="form-check-input"
                type={"checkbox"}
                value={eyePatch}
                id={"flexCheckChecked"}
                checked
              />
              <label className="form-check-label" for="flexCheckChecked">
                {" "}
                Eye Patch
              </label>
            </div>
            <div>
              <input
                className="form-check-input"
                type={"checkbox"}
                value={hookHand}
                id={"flexCheckChecked"}
                checked
              />
              <label className="form-check-label" for="flexCheckChecked">
                {" "}
                Hook Hand
              </label>
            </div>

            <input
              className="btn btn-success btn-sm me-1"
              style={{ width: "100px" }}
              type="submit"
              value="Add Pirate"
            />
            <Link
              className="btn btn-warning btn-sm"
              style={{ width: "100px", height: "40px" }}
              to={`/pirate`}
            >
              <p>Cancel</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthorForm;
