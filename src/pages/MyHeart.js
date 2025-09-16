import React, { useEffect, useState } from "react";
import "../index.css";

export default function MyHeart() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    // 200টা "Shiropa" তৈরি করব
    const temp = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: 12 + Math.random() * 20, // বিভিন্ন গতি
      delay: Math.random() * 5,
      rotate: Math.random() * 360,
    }));
    setWords(temp);
  }, []);

  return (
    <main className="page">
      <div className="floating-container">
        {words.map((word) => (
          <span
            key={word.id}
            className="floating-word"
            style={{
              left: word.x,
              top: word.y,
              animationDuration: `${word.duration}s`,
              animationDelay: `${word.delay}s`,
              transform: `rotate(${word.rotate}deg)`,
            }}
          >
            Shiropa
          </span>
        ))}
      </div>

      <div className="glow-text">
        In my heart beats there is only one name – Shiropa
      </div>
    </main>
  );
              }
