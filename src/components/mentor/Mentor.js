import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "../navbar/navbar.css";

import { Link } from "react-router-dom";

export default function Mentor() {
  const [mentors, setMentors] = useState([]);
  // function to get mentors suing get method
  function getMentors() {
    fetch("https://mentor-student-back.herokuapp.com/mentors", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setMentors(res))
      .then((res) => console.log(res));
  }
  useEffect(() => {
    getMentors();
  }, []);

  return (
    <div className="divcenter">
      <ul className="studentsList">
        <h3 className="headul">Mentors</h3>

        {mentors.map((e, idx) => (
          <div key={idx}>
            <li type="1" className="liststu">
              <p>{e.name}</p>
            </li>
          </div>
        ))}

        <Link className="link" to="/add-mentor">
          <Button id="addMentor" variant="contained" color="primary">
            Add Mentor
          </Button>
        </Link>
      </ul>
    </div>
  );
}
