import React, { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";

const Hooks = () => {
  const [color, setColor] = useState("");
  useEffect(() => {
    console.log("useEffect");
    setColor("green");
  }, []);
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    setColor("red");
  }, []);
  return (
    <div className="div1" style={{ flex: 1, backgroundColor: color }}>
      <h1>..Hooks..</h1>
    </div>
  );
};

export default Hooks;
