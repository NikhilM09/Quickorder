import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  const styleObj = {
    color: "black",
    backgroundColor: "white",
    border: "2px solid yellow",
    borderRadius: "5px",
  };

  const element = (
    <>
      <h1 className="text-red-400 bg-amber-400 text-7xl ">this is react element</h1>
      <h2>This is second react element</h2>
    </>
  );

  const Component = () =>{
    return(
      <>
        This is my first function based component
      </>
    )
  }

    // const Component = () =>
    // (
    //   <>
    //     This is my first function based component
    //     <div>Second component</div>
    //   </>
    // )

    
  

  // function Component(){
  //   return(
  //     <>
  //       This is my first function based component
  //     </>
  //   )
  // }

  // function Component(){
  //   return(
  //     <>
  //       This is my first function based component
  //     </>
  //   )
  // }

  return (
    <>
      <div>
        {element}
        {/* <Component></Component> */}
        <Component/>
        {/* {Component()} */}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div style={{ color: "black" }} className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to see HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export function App2() {
  return <div>This is second component</div>;
}

export default App;
