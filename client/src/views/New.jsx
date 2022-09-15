import React, { useEffect, useState } from "react";
import axios from "axios";
import PirateForm from "../components/PirateForm";

const New = () => {
  const [pirate, setPirate] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pirate")
      .then((res) => {
        setPirate(res.data.pirate);
      })
      .catch((err) => console.error(err));
  }, [pirate]);

  return (
    <div>
      <PirateForm />
    </div>
  );
};

export default New;
