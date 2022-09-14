import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import AuthorForm from "../components/AuthorForm";

const New = () => {
  const [author, setAuthor] = useState([]);
  // const [loaded, setLoaded] = useState(false);

  // const navigate = useNavigate;
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((res) => {
        setAuthor(res.data.author);
        // setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [author]);

  return (
    <div>
      <AuthorForm />
    </div>
  );
};

export default New;
