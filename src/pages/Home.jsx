import React, { useContext } from "react";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <Main/>
      <Sidebar />
    </div>
  );
};

export default Home;
