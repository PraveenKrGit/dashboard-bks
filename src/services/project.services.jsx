import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const projectCollenctionRef = collection(db, "projects");

class ProjectDataService {
  addProject = (newProject) => {
    return addDoc(projectCollenctionRef, newProject);
  };

  updateProject = (id, updatedProject) => {
    const projectDoc = doc(db, "projects", id);
    return updateDoc(projectDoc, updatedProject);
  };

  deleteProject = (id) => {
    const projectDoc = doc(db, "projects", id);
    return deleteDoc(projectDoc);
  };

  getAllProjects = () => {
    return getDocs(projectCollenctionRef);
  };

  getProject = (id) => {
    const projectDoc = doc(db, "projects", id);
    return getDoc(projectDoc);
  };
}

export default new ProjectDataService()