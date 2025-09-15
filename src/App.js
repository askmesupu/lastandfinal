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

// App content
function AppContent() {
  const [blastVisible, setBlastVisible] = useState(false);
  const [navigateTo, setNavigateTo] = useState("/");
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setBlastVisible(true);
    setNavigateTo(path);
    setTimeout(() => {
      setBlastVisible(false);
      navigate(path);
    }, 1200); // HeartBlast duration
  };

  return (
    <>
      {blastVisible && <HeartBlast />}
      <Navbar onNavigate={handleNavClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
        <Route path="/bangla" element={<Bangla />} />
        <Route path="/hindi" element={<Hindi />} />
        <Route path="/myheart" element={<MyHeart />} />
        <Route path="/questionanswer" element={<QuestionAnswer />} />
      </Routes>
    </>
  );
}

// Wrap AppContent with Router
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
    }
