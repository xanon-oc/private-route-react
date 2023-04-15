import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Mama</a>
        <NavLink className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </NavLink>
        <NavLink className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </NavLink>
        <NavLink className="btn btn-ghost normal-case text-xl" to="/register">
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
