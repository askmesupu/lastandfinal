import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeartBlast from "./components/HeartBlast";

import Home from "./pages/Home";
import English from "./pages/English";
import Bangla from "./pages/Bangla";
import Hindi from "./pages/Hindi";
import MyHeart from "./pages/MyHeart";
import QuestionAnswer from "./pages/QuestionAnswer";

function AppContent() {
  const [showBlast, setShowBlast] = useState(false);
  const [targetPath, setTargetPath] = useState("/");
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setShowBlast(true);
    setTargetPath(path);
    setTimeout(() => {
      setShowBlast(false);
      navigate(path);
    }, 1200); // HeartBlast duration
  };

  return (
    <div className="app-wrapper">
      {showBlast && <HeartBlast />}
      <Navbar onNavigate={handleNavClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
        <Route path="/bangla" element={<Bangla />} />
        <Route path="/hindi" element={<Hindi />} />
        <Route path="/myheart" element={<MyHeart />} />
        <Route path="/questionanswer" element={<QuestionAnswer />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
  }
