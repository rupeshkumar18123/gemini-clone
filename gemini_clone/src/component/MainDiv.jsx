import React, { useState } from "react";
import "../style.css";
import PromptBar from "./PromptBar";

import ReactMarkdown from "react-markdown";

function MainDiv() {
  const [answer, setAnswer] = useState('');

  return (
    <div className="main_div">
      <div className="main_div_p1">
        <ReactMarkdown>{answer}</ReactMarkdown>
      </div>
      <div className="main_div_p2">
        <PromptBar setAnswer={setAnswer} />
      </div>
    </div>
  );
}

export default MainDiv;