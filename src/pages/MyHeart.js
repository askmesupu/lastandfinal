import React, { useEffect, useState } from "react";

export default function MyHeart() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < 100; i++) {
      temp.push({
        id: i,
        left: Math.random() * 100 + "vw",
        delay: Math.random() * 5 + "s",
      });
    }
    setWords(temp);
  }, []);

  return (
    <div className="page" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {words.map((w) => (
        <span
          key={w.id}
          className="floating-word"
          style={{ left: w.left, animationDelay: w.delay }}
        >
          Shiropa
        </span>
      ))}
      <h2 style={{ marginTop: "60vh", fontSize: "1.5rem" }}>
        In my heart beats there is only one name - Shiropa
      </h2>
    </div>
  );
}
