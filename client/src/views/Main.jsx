import React, { useEffect, useState } from "react";
import axios from "axios";
import PirateList from "../components/PirateList";

const Main = () => {
  const [pirate, setPirate] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pirate")
      .then((res) => {
        setPirate(res.data.pirates);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [pirate]);

  const removeFromDom = (pirateId) => {
    setPirate(pirate.filter((pirate) => pirate._id !== pirateId));
  };
  
  return (
    <div className="table">
      {loaded && (
        <PirateList pirate={pirate} removeFromDom={removeFromDom} />
      )}
    </div>
  );
};

export default Main;
