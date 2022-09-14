import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Edit = (props) => {
  const { id } = useParams();
  const [name, setName] = useState("");

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/author/" + id).then((res) => {
      setName(res.data.name);
    });
  }, [id]);

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/author/" + id, {
        name,
      })
      // .then((res) => console.log(res))
      .then(() => navigate("/author"))

      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
    // .finally(() => navigate("/author/edit/" + id));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header text-center">
          <h1>Edit Author</h1>
        </div>
        <div className="card-body">
          <form onSubmit={updateProduct}>
          {errors.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>)}

            <p>
              <label>Name:</label>
              <br />
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </p>
            <input className="btn btn-primary" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Edit;
