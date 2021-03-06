import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/style.css";
import UserContext from "../utils/UserContext";

function NavBar() {
  const user = useContext(UserContext);
  const history = useHistory();

  function handleLogout() {
    // console.log("handle logout")
    user.handleLogin("");
    history.push("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark secondary-color lighten-1">
      <Link to="/" className="navbar-brand">
        PlayDate
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#basicExampleNav"
        aria-controls="basicExampleNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="basicExampleNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              href="/"
            >
              Account
            </a>
            <div
              className="dropdown-menu dropdown-primary"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link to="/profile" className="dropdown-item">
                Profile
              </Link>
              <Link to="/addprofile" className="dropdown-item">
                Add Profile
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/playdate" className="nav-link">
              PlayDates
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/newplaydate" className="nav-link">
              New PlayDate
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item" onClick={handleLogout}>
            <Link to="/" className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
