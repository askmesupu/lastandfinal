import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeartBlast from "./components/HeartBlast";
import Home from "./pages/Home";
import English from "./pages/English";
import Bangla from "./pages/Bangla";
import Hindi from "./pages/Hindi";
import MyHeart from "./pages/MyHeart";
import QuestionAnswer from "./pages/QuestionAnswer";

export default function App() {
  const [showBlast, setShowBlast] = useState(false);
  const [afterBlast, setAfterBlast] = useState(null);

  const triggerHeart = (callback) => {
    setShowBlast(true);
    setAfterBlast(() => callback);
    setTimeout(() => {
      setShowBlast(false);
      if (afterBlast) afterBlast();
    }, 1000);
  };

  return (
    <>
      {showBlast && <HeartBlast />}
      <Navbar triggerHeart={triggerHeart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
        <Route path="/bangla" element={<Bangla />} />
        <Route path="/hindi" element={<Hindi />} />
        <Route path="/myheart" element={<MyHeart />} />
        <Route path="/question" element={<QuestionAnswer />} />
      </Routes>
    </>
  );
                            }
