import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body"
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import useOnline from "./hooks/useOnline";

function App() {
  const [count, setCount] = useState(0);
  const isOnline = useOnline()
  console.log("isOnline", isOnline)

  if(!isOnline){
    return(
      <div>
      <h1 className="text-3xl">You are offline</h1>
      </div>
    )
    
  }

  return (
    <>
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </>
  );
}


export default App;
