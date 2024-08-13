import React, { useEffect } from "react";
import Logger from "./Logger";

function HomeContent() {
  const users = [
    { id: 5267, name: "Prudhvi", age: 25 },
    { id: 5268, name: "Raju", age: 24 },
    { id: 5269, name: "Guru", age: 27 },
    { id: 5277, name: "Shiva", age: 26 },
    { id: 5297, name: "Mani", age: 24 },
    { id: 5287, name: "Sanjeev", age: 27 },
  ];
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  return (
    <div>
      <h2>Props Example:</h2>
      <p>Passing users data from "Home component" to "Logger component"
      </p>
      <Logger userdata={users} />
    </div>
  );
}

export default HomeContent;
