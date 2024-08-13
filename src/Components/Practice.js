import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { firstCounter: state.firstCounter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Practice() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{margin:"5px",justifyContent:"space-evenly",display:"flow"}}>
      <h1>useReducer Example:</h1>
      <h2>Count: {count.firstCounter}</h2>
      <div style={{margin:"5px"}}>
        <button className="button" onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button className="button" onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        <button className="button" onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default Practice;
