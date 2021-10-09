import React, { useEffect, useState } from "react";
import "../navbar/navbar.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Student() {
  const [students, setStudents] = useState([]);

  function getStudents() {
    // function to get all students using get method
    fetch("https://mentor-student-back.herokuapp.com/students", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setStudents(res))
      .then((res) => console.log(res));
  }
  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="divcenter">
      <ul className="studentsList">
        <h3 className="headul">Students</h3>
        {students.map((e, idx) => (
          <div key={idx}>
            <li type="1" className="liststu">
              <p>
                {e.name} {e.surname}
              </p>
            </li>
          </div>
        ))}
        <Link className="link" to="/add-student">
          <Button variant="contained" color="primary">
            Add Student
          </Button>
        </Link>
      </ul>
    </div>
  );
}
