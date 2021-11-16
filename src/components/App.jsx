import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMousedOver] = useState(false);

  function buttonHover() {
    setMousedOver(true);
  }

  function buttonLeave() {
    setMousedOver(false);
  }

  function handleClick() {
    setHeadingText("Submitted");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />

      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={buttonHover}
        onMouseOut={buttonLeave}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
