// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import English from "./pages/English";
import Bangla from "./pages/Bangla";
import Hindi from "./pages/Hindi";
import MyHeart from "./pages/MyHeart";
import QuestionAnswer from "./pages/QuestionAnswer";
import HeartBlast from "./components/HeartBlast";
import "./index.css";

function AnimatedRoute({ element: Element }) {
  const navigate = useNavigate();
  const [showBlast, setShowBlast] = useState(false);

  const handleClick = (path) => {
    setShowBlast(true);
    setTimeout(() => {
      setShowBlast(false);
      navigate(path);
    }, 1200); // heart animation duration
  };

  return (
    <>
      {showBlast && <HeartBlast />}
      <Element navigateWithBlast={handleClick} />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimatedRoute element={Home} />} />
        <Route path="/english" element={<AnimatedRoute element={English} />} />
        <Route path="/bangla" element={<AnimatedRoute element={Bangla} />} />
        <Route path="/hindi" element={<AnimatedRoute element={Hindi} />} />
        <Route path="/myheart" element={<AnimatedRoute element={MyHeart} />} />
        <Route path="/questionanswer" element={<AnimatedRoute element={QuestionAnswer} />} />
      </Routes>
    </Router>
  );
       }
