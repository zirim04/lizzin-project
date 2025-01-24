import React from "react";
import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="main-container">
      <div className="container">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
