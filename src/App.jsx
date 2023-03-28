import { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthContext } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import Form from "./pages/Form";
import "firebase/firestore";

function App() {

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({children})=>{
    return currentUser ? children : <Navigate to="/login"/>
  }

  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/form/:id" element={<RequireAuth><Form /></RequireAuth>} />
          <Route path="/form/" element={<RequireAuth><Form /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
