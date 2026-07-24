import React, { useState } from "react";
import "./dark.css";
import Todolist from './Todolist'
import { IoMoon } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
const Dark = () => {
  const [mode, setMode] = useState("light");

  function toggle() {
    setMode(mode === "light" ? "dark" : "light");
  }

  return (
    <div className={mode}>
      <button onClick={toggle}>
        {mode === "light" ? <IoMoon /> : <IoSunnyOutline />}
      </button>
      <Todolist/>
    </div>
  );
};

export default Dark;