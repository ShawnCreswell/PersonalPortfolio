import React, { useEffect, useState } from "react";
import axios from "axios";
import TeamForm from "../components/TeamForm";

const New = () => {
  const [team, setTeam] = useState([]);
  // const [loaded, setLoaded] = useState(false);

  // const navigate = useNavigate;
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/team")
      .then((res) => {
        setTeam(res.data.team);
        // setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [team]);

  return (
    <div>
      <TeamForm />
    </div>
  );
};

export default New;
