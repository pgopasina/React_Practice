import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoardContent from "./DashboardContent";

const SideBarData = [
  "Dashboard",
  "Home",
  "VideoPlayer",
  "UserRegistration",
  "User Data",
  "Practice",
  "Search",
  "About",
];
const SideBar = () => {
  const [state, setState] = useState(false);

  const nav = useNavigate();

  const navHandler = (item) => {
    console.log(item);
    if (item === "Dashboard") {
      nav("/");
      setState(false);
    } else if (item === "User Data") {
      nav("/UserData");
      setState(true);
    } else if (item === "About") {
      nav("/About");
      setState(true);
    } else if (item === "Home") {
      nav("/Home");
      setState(true);
    } else if (item === "Practice") {
      nav("/Practice");
      setState(true);
    } else if (item === "VideoPlayer") {
      nav("/VideoPlayer");
      setState(true);
    } else if (item === "Search") {
      nav("/Search");
      setState(true);
    } else if (item === "UserRegistration") {
      nav("/UserRegistration");
      setState(true);
    } else {
      nav("/");
      setState(false);
    }
  };
  return (
    <div className="container">
      <div className="sidebar">
        {SideBarData.map((item, index) => (
          <button className="list" key={index} onClick={() => navHandler(item)}>
            {item}
          </button>
        ))}
      </div>
      <DashBoardContent state={state} />
    </div>
  );
};

export default SideBar;
