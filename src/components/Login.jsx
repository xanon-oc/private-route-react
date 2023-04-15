import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    setSuccess("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setSuccess("Successfully Logged In");
        setError("");
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setSuccess("");
        setError("Something Wrong With Your Account");
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center text-blue-500 lg:text-left">
            <h1 className="text-2xl mb-4  font-bold">Please Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-sm text-green-500 text-center">{success}</p>
            <p className="text-sm text-red-500 text-center">{error}</p>
            <div className="flex justify-center ">
              <Link to="/register">
                <button className="btn btn-link">New to Auth Mama</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
