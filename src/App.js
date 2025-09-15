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

function App() {
  const [showHeart, setShowHeart] = useState(false);
  const [nextPage, setNextPage] = useState("");
  const navigate = useNavigate();

  const handleSubpageClick = (path) => {
    setNextPage(path);
    setShowHeart(true);
    setTimeout(() => {
      setShowHeart(false);
      navigate(path);
    }, 1500); // 1.5s full screen heart animation
  };

  return (
    <div className="App">
      {showHeart && <HeartBlast />}

      <header className="header">
        <h1>Supto ❤️ Shiropa</h1>
        <nav className="navbar">
          <button onClick={() => handleSubpageClick("/")}>Home</button>
          <button onClick={() => handleSubpageClick("/english")}>My Love in English</button>
          <button onClick={() => handleSubpageClick("/bangla")}>My Love in Bangla</button>
          <button onClick={() => handleSubpageClick("/hindi")}>My Love in Hindi</button>
          <button onClick={() => handleSubpageClick("/myheart")}>My Heart</button>
          <button onClick={() => handleSubpageClick("/question-answer")}>Answer My Question</button>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/english" element={<English />} />
          <Route path="/bangla" element={<Bangla />} />
          <Route path="/hindi" element={<Hindi />} />
          <Route path="/myheart" element={<MyHeart />} />
          <Route path="/question-answer" element={<QuestionAnswer />} />
        </Routes>
      </main>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
