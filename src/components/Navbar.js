import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ triggerHeart }) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    triggerHeart(() => navigate(path));
  };

  return (
    <div className="navbar">
      <button onClick={() => handleClick("/")}>Home</button>
      <button onClick={() => handleClick("/english")}>My Love in English</button>
      <button onClick={() => handleClick("/bangla")}>My Love in Bangla</button>
      <button onClick={() => handleClick("/hindi")}>My Love in Hindi</button>
      <button onClick={() => handleClick("/myheart")}>My Heart</button>
      <button onClick={() => handleClick("/question")}>Answer Question</button>
    </div>
  );
    }
