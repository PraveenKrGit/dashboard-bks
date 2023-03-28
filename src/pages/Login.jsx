import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import dashboardIcon from '../assets/monitor.png'

const Login = () => {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navigate("/")
      })
      .catch((error) => {
        setError(true)
      });
  };

  return (
    <div className="login">
      <img src={dashboardIcon} alt=""/>
      <form onSubmit={handleLogin}>
      <label htmlFor="startDate">USERNAME</label>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="startDate">PASSWORD</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>

      <p>
        Do not have account? <Link to="/SignUp">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
