import React from "react";
import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Player from "./components/Player";

const App = () => {
  return (
    <div className="main-container">
      <div className="container">
        <Sidebar />
      </div>
      <Player />
    </div>
  );
};

export default App;
