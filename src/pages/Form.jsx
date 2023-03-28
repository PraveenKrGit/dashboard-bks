import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./form.scss";
import ProjectDataService from "../services/project.services";

import glass from "../assets/glass.jpg";

const Form = (props) => {
  const { id } = useParams();

  const navigate = useNavigate();
  console.log(id);

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProject = {
      name,
      startDate,
      endDate,
      status,
      description,
    };

    console.log(newProject);

    try {
      if (id !== undefined && id !== "") {
        await ProjectDataService.updateProject(id, newProject);
        // setProjectId("");
        console.log("Project updated..");
      } else {
        await ProjectDataService.addProject(newProject);
        console.log("New Project added..");
      }

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const editHandler = async () => {
    try {
      const docSnap = await ProjectDataService.getProject(id);
      console.log("The project is : ", docSnap.data());
      setName(docSnap.data().name);
      setStartDate(docSnap.data().startDate);
      setEndDate(docSnap.data().endDate);
      setStatus(docSnap.data().status);
      setDescription(docSnap.data().description);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("id is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  return (
    <div className="form">
      <img id="main-back" src={glass} alt="" />
      <p className="create-new">Create New Project</p>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label className="project-title" htmlFor="startDate">
            Project Title
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />

          <div className="dates">
            <label className="date-title" htmlFor="startDate">
              Start: {" "}
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="start date"
            />
            <label className="date-title" htmlFor="startDate">
              End: {" "}
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="end date"
            />
          </div>

          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="status"
          />

          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
          />

          <button type="submit">Submit</button>
        </form>
      </div>

      <Link to="/">Go back</Link>
    </div>
  );
};

export default Form;
