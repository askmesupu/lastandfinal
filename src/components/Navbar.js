import React from "react";

export default function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      <button onClick={() => onNavigate("/")}>Home</button>
      <button onClick={() => onNavigate("/english")}>My love in English</button>
      <button onClick={() => onNavigate("/bangla")}>My love in Bangla</button>
      <button onClick={() => onNavigate("/hindi")}>My love in Hindi</button>
      <button onClick={() => onNavigate("/myheart")}>My heart</button>
      <button onClick={() => onNavigate("/questionanswer")}>Answer my question</button>
    </nav>
  );
  }
