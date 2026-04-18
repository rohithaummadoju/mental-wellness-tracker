import React from "react";
import "./AppLayout.css";

const AppLayout = ({ children }) => {
  return (
    <div className="app">
      <header className="header">
        <h1>🧠 Mental Wellness Tracker</h1>
      </header>

      <main className="main">{children}</main>
    </div>
  );
};

export default AppLayout;