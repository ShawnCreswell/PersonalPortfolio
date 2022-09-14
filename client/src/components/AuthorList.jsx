import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AuthorList = (props) => {
  const { removeFromDom } = props;

  const deleteAuthor = (authorId) => {
    axios
      .delete("http://localhost:8000/api/author/" + authorId)
      .then((res) => {
        removeFromDom(authorId);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-header text-center">
            <h1>All Authors</h1>
          </div>
        </div>
      <p>We have quotes by:</p>
      </div>




      <div className="container">
        <table className="table table-striped table-hover table-bordered border-primary">
                      <thead className="bg-dark text-white">
                        <tr>
                          <th>Author</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
          {props.author &&
            props.author.map((author, i) => {
              return (
                      <tbody>
                      <div key={i} className="d-flex"></div>
                        <tr>
                          <td>{author.name}</td>
                          <td>
                          <div className="d-flex">
                            <Link className="btn btn-warning me-2 text-center"  style={{width:"100px", height:"50px"}} to={`/author/edit/${author._id}`}><p>Edit</p></Link>
                            <button className="btn btn-danger"  style={{width:"100px", height:"50px"}} onClick={(e) => deleteAuthor(author._id)}>Delete</button>
                          </div>
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

export default AuthorList;
