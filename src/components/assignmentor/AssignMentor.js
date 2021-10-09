import React, { useEffect, useState } from "react";
import "./assignMentor.css";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { Button, FormControlLabel } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

export default function AssignMentor() {
  const [students, setStudents] = useState([]);
  const [mentors, setMentors] = useState([]);

  function getStudents() {
    fetch("https://mentor-student-back.herokuapp.com/students", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => res.filter((e) => !e.mentorId))
      .then((res) => setStudents(res))
      .then((res) => console.log(res));
  }
  useEffect(() => {
    getStudents();
  }, []);

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

  const [mentorId, setMentorId] = useState("");
  const [studentId, setStudentId] = useState("");

  const handleChange = (event) => {
    setMentorId(event.target.value);
    console.log(event.target.value);
  };

  const handleCheck = (e) => {
    e.preventDefault();
    if (e.target.checked) {
      setStudentId(e.target.value);
      console.log(e.target.value);
    }
  };

  const assignStudents = async (e) => {
    e.preventDefault();
    if (mentorId === "") {
      alert("please select mentor");
    } else if (studentId === "") {
      alert("please select student");
    } else {
      const data = {
        id: studentId,
        mentorId: mentorId,
      };
      console.log("data is ", data);

      const request = await fetch(
        "https://mentor-student-back.herokuapp.com/students/assign-mentor",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!(request.status === 200)) {
        window.alert("assigning Failed..!");
      } else {
        window.alert("Mentor assigned Successfully");
      }
      setStudents(students.filter((e) => !e.mentorId));
    }
  };

  return (
    <>
      <div className="mentor-student-assign">
        <div className="students">
          <div className="row">
            <div className="col-md-3 col-sm-12"></div>
            <div className="col-md-6 col-sm-12">
              <h4>Students :</h4>
              {students.map((e, idx) => (
                <p key={idx}>
                  <FormControlLabel
                    onChange={handleCheck}
                    value={e._id}
                    control={<Checkbox color="primary" />}
                    label={`${e.name}${e.surname}`}
                    labelPlacement="end"
                  />
                </p>
              ))}
            </div>
            <div className="mentors">
              <FormControl style={{ width: "300px" }}>
                <InputLabel id="demo-simple-select-label">
                  Select Mentor
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={mentorId}
                  onChange={handleChange}
                >
                  {mentors.map((e, index) => (
                    <MenuItem key={index} value={e.mentorId}>
                      {e.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <Button
            id="assignButton"
            onClick={assignStudents}
            variant="outlined"
            color="primary"
          >
            Assign
          </Button>
        </div>
        <div className="col-md-3 col-sm-12"></div>
      </div>
    </>
  );
}
