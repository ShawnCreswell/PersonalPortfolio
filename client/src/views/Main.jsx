import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorList from "../components/AuthorList";

const Main = () => {
  const [author, setAuthor] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((res) => {
        setAuthor(res.data.author);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [author]);

  const removeFromDom = (authorId) => {
    setAuthor(author.filter((author) => author._id !== authorId));
  };
  
  return (
    <div className="table">
      {loaded && (
        <AuthorList author={author} removeFromDom={removeFromDom} />
      )}
    </div>
  );
};

export default Main;
