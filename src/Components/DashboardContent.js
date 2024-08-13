import React, { useEffect, useState } from "react";
import CareerContent from "./CareerContent";
import { Outlet } from "react-router-dom";

const DashBoardContent = ({ state }) => {

  const [name, setName] = useState("Prudhvi");

  const onClick = () => {
    setName((switchName) =>
      switchName === "Prudhvi" ? "Prudhvi Raj" : "Prudhvi"
    );
  };

  const [count, setCount] = useState(0);
  const onInput = () => {
    setCount(count + 1);
  };
// const onReset = ()=>{
// setCount(count)
// }

  return (
    <div className="DashBoardcontent">
      {!state ? (
        <div>
          <h1>useState Example:</h1>
          <div>
            <h3>
              <CareerContent name1={name} />
            </h3>
            <button onClick={onClick}>click here</button>
          </div>
          <br></br>
          <div>
            <input type="number" value={count} readOnly />
            <span> Count: {count}</span>
            <br></br>
            <button onClick={onInput}>click here</button>
            {/* <button onClick={onReset}>Reset</button> */}
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default DashBoardContent;
