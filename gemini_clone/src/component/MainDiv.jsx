import React from "react";
import "../style.css";
import PromptBar from "./PromptBar";


function MainDiv() {
  return (
    <div className="main_div">
      <div className="main_div_p1">
        
      </div>
      <div className="main_div_p2">
        <PromptBar />
      </div>
    </div>
  );
}

export default MainDiv;
