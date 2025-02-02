import React from "react";
import "./app.css";
import Sidebar from "./components/Sidebar_Components/Sidebar";
import Player from "./components/Player_Components/Player";
import Navbar from "./components/Navbar_Components/Navbar";
import MainBody from "./components/Main_Body/MainBody";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Sidebar />
        <MainBody />
      </div>
      <Player />
    </div>
  );
};

export default App;
