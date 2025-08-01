import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body"
import Footer from "./components/Footer";
import { Outlet } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </>
  );
}


export default App;
