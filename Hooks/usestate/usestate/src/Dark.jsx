import React, { useState } from "react";
import "./dark.css";

const Dark = () => {
  const [mode, setMode] = useState("light");

  function toggle() {
    setMode(mode === "light" ? "dark" : "light");
  }

  return (
    <div className={mode}>
      <button onClick={toggle}>
        {mode === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Dark;