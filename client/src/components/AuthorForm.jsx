import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const AuthorForm = () => {
  const [name, setName] = useState("");

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/author", {
        name,
      })

      .then(() => navigate("/author"))

      .catch(err => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
      })
    
      .finally(() => {
        setName("");
      });
  };

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header text-center">
          <h1>Add a new Author</h1>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>)}
            <p>
              <label>Name:</label>
              <br />
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </p>
            <input className="btn btn-success btn-sm me-1" style={{width:"100px"}} type="submit" />
            <Link className='btn btn-warning btn-sm' style={{width:"100px", height:"40px"}} to={`/author`}><p>Cancel</p></Link>
          </form>
        </div>
      </div>
    </div>
  );
};


export default AuthorForm;