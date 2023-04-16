import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-around">
      <div className="navbar bg-primary text-primary-content flex justify-around">
        <div>
          <a className="btn btn-ghost normal-case text-xl">Auth Mama</a>
        </div>
        <div>
          <NavLink className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </NavLink>
          <NavLink className="btn btn-ghost normal-case text-xl" to="/orders">
            Orders
          </NavLink>
          <NavLink className="btn btn-ghost normal-case text-xl" to="/profile">
            Profile
          </NavLink>
          <NavLink className="btn btn-ghost normal-case text-xl" to="/login">
            Login
          </NavLink>
          <NavLink className="btn btn-ghost normal-case text-xl" to="/register">
            Sign Up
          </NavLink>
        </div>

        {user ? (
          <div className="gap-8 flex items-center">
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-xs">
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-xs">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
