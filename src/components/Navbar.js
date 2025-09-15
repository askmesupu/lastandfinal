import React from "react";

export default function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      <button onClick={() => onNavigate("/")} className="nav-btn">Home</button>
      <button onClick={() => onNavigate("/english")} className="nav-btn">My Love in English</button>
      <button onClick={() => onNavigate("/bangla")} className="nav-btn">My Love in Bangla</button>
      <button onClick={() => onNavigate("/hindi")} className="nav-btn">My Love in Hindi</button>
      <button onClick={() => onNavigate("/myheart")} className="nav-btn">My Heart</button>
      <button onClick={() => onNavigate("/questionanswer")} className="nav-btn">Answer My Question</button>
    </nav>
  );
    }
