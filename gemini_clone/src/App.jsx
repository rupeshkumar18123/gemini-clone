import React from "react";
import { useEffect } from "react";
import MainDiv from "./component/MainDiv";
import "./App.css"
import Head from "./component/Head";

function App() {
  return (
    <div className="app_main">
      <Head/>
      <MainDiv />
    </div>
  );
}

export default App;
