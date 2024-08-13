import React from "react";
import logo from "../logo.svg";
import {ThemeContext} from "./ThemeProvider";
import { useNavigate } from "react-router-dom";

const NavBar = ({ state }) => {

  const nav = useNavigate();

  const navToLogin = ()=>{
  if(!state) {nav("/Login")}
  }
  
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        const themeStyle = {
          light: { backgroundColor: "white", color: "black" },
          dark: { backgroundColor: "black", color: "white" },
        };

        return (
          <nav className="navbar">
            <div className="navContent">
              <img
                className="App-logo"
                src={logo}
                alt="logo"
                width="60"
                height="50"
              />
              <span>React Application</span>
            </div>
            <div className="navbar-search">
              <input type="text" placeholder="Search..." />
            </div>
            <div className="navbar-buttons">
              <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </button>
              <button className="login-button" onClick={navToLogin}>Login</button>
            </div>
          </nav>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default NavBar;
