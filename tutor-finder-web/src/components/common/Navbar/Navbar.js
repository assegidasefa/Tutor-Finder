import React from "react";
import { Link } from "react-router-dom";
import Tutorimg from "../../../assets/images/bicon.png";
import { useStyles } from "./navbar_style";

const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className="navbar">
      <img className="bicon" src={Tutorimg} alt="" />
      <h1> Tutor Finder </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Student</Link>
        <Link to="/buy">Teacher </Link>
        <Link to="/auth/login"> <button>Login</button></Link>
        <Link to="/auth/signup">
        <button>Sign up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
