import React, { useEffect, useState } from "react";

export default function MyHeart() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const newWords = [];
    for (let i = 0; i < 100; i++) {
      newWords.push({
        id: i,
        left: Math.random() * 90 + "vw",
        delay: Math.random() * 10 + "s",
        size: Math.random() * 1.2 + 0.8 + "rem",
      });
    }
    setWords(newWords);
  }, []);

  return (
    <section className="page">
      <h1>My Heart 💖</h1>
      <div className="shiropa-container">
        {words.map((w) => (
          <span
            key={w.id}
            className="shiropa-word"
            style={{
              left: w.left,
              animationDelay: w.delay,
              fontSize: w.size,
            }}
          >
            Shiropa
          </span>
        ))}
      </div>
    </section>
  );
    }
