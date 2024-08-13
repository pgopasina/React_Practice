import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import HomeContent from "./Components/HomeContent";
import Login from "./Components/Login";
import VideoPlayer from "./Components/VideoPlayer";
import UserData from "./Components/UserData";
import Practice from "./Components/Practice";
import Search from "./Components/Search";
import AboutContent from "./Components/AboutContent";
import UserRegistration from "./Components/UserRegistration";
import { ThemeProvider, ThemeContext } from "./Components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => {
          const themeStyle = {
            light: { backgroundColor: "white", color: "#2b2b2c" },
            dark: { backgroundColor: "#2b2b2c", color: "white" },
          };

          return (
            <div className="app" style={themeStyle[theme]}>
              <NavBar />
              <Routes>
                <Route path="/" element={<SideBar />}>
                  <Route path="Home" element={<HomeContent />} />
                  <Route path="VideoPlayer" element={<VideoPlayer />} />
                  <Route path="UserData" element={<UserData />} />
                  <Route path="Practice" element={<Practice />} />
                  <Route path="Search" element={<Search />} />
                  <Route path="About" element={<AboutContent />} />
                  <Route path="UserRegistration" element={<UserRegistration />} />
                </Route>
                <Route path="Login" element={<Login />} />
              </Routes>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;
