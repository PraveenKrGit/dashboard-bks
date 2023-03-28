import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { AuthContext } from "../context/AuthContext";
import "../App.css";
import manIcon from "../assets/man.png";

const Sidebar = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const userSignOut = async () => {
    await signOut(auth)
      .then(() => {
        localStorage.clear();
        console.log("Signed out successful..");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <span className="welcome">Welcome Back!</span>
        <img src={manIcon} className="manIcon" alt="" />
        <p className="userName">{currentUser.displayName}</p>

        <button onClick={userSignOut} className="logoutBtn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
