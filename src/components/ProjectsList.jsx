import { doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectDataService from "../services/project.services";
import "./project.scss";

import editing from "../assets/editing.png";
import deleteIcon from "../assets/garbage.png";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const data = await ProjectDataService.getAllProjects();
    console.log(data.docs);
    setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await ProjectDataService.deleteProject(id);
    getProjects();
  };

  return (
    <div>
      <div className="projectList">
        <div className="projects">
          {projects.map((doc, index) => {
            return (
              <div className="project" key={doc.id}>
                <div className="projectTitle">
                  <div className="name">{doc.name}</div>
                  <Link to={`/form/${doc.id}`}>
                    <img src={editing} className="editIcon" alt="" />
                  </Link>
                </div>
                
                
                <div className="desc">{doc.description}</div>
                <div className="dates">
                  <div className="startdate">Start: {doc.startDate}</div>
                  <div className="enddate">End: {doc.endDate}</div>
                </div>
                <div className="bottom">
                <div className="status">{doc.status}</div>
                  <img
                    src={deleteIcon}
                    className="deleteIcon"
                    onClick={(e) => deleteHandler(doc.id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
