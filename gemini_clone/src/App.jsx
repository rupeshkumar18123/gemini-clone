import React from "react";
import { useEffect } from "react";
import MainDiv from "./component/MainDiv";
import "./app.css"
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
