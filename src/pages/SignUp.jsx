import "./login.scss";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth, db } from "../../firebase";
import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { doc, setDoc } from "firebase/firestore";

import dashboardIcon from '../assets/monitor.png'

const SignUp = () => {
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const res = await createUserWithEmailAndPassword(auth, email, password);

    try {
      await updateProfile(res.user, {
        displayName,
      });

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
      });

      navigate("/login");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="login">
      <img src={dashboardIcon} alt=""/>
      <form onSubmit={handleSignUp}>
      <label htmlFor="startDate">NAME</label>
        <input type="text" placeholder="name" />
        <label htmlFor="startDate">EMAIL</label>
        <input type="email" placeholder="email" />
        <label htmlFor="startDate">PASSWORD</label>
        <input type="password" placeholder="password" />
        <button type="submit">Sign Up</button>
        {error && <span>Please try another credentials!</span>}
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
