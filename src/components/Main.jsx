import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "../App.css";
import Form from "../pages/Form";
import ProjectsList from "./ProjectsList";
import glass from "../assets/glass.jpg";

import plusIcon from "../assets/add.png";

const Main = () => {
  const [projectId, setProjectId] = useState("");

  const getProjectIdHandler = (id) => {
    console.log("id of document to be edited: ", id);
    setProjectId(id);
  };

  var today = new Date();

  const date =
    today.getDate() +
    " - " +
    (today.getMonth() + 1) +
    " - " +
    today.getFullYear();

  return (
    <div className="main">
      <img id="main-back" src={glass} alt="" />
      <p className="date"><span>Dashboard</span> <br/>{date}</p>

      <Link to="/form">
        <img src={plusIcon} className="plusicon" alt="" />
      </Link>

      <ProjectsList />
    </div>
  );
};

export default Main;
