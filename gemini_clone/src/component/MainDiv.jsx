import React, { useState } from "react";
import "../style.css";
import PromptBar from "./PromptBar";

function MainDiv() {
  const [answer, setAnswer] = useState('');

  return (
    <div className="main_div">
      <div className="main_div_p1">
        {answer && <p>{answer}</p>} {/* Show answer here */}
      </div>
      <div className="main_div_p2">
        <PromptBar setAnswer={setAnswer} />
      </div>
    </div>
  );
}

export default MainDiv;
