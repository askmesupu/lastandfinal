import React, { useState } from "react";

export default function QuestionAnswer() {
  const [answer, setAnswer] = useState(null);

  return (
    <div className="page">
      <h1>Will you stay with me forever my cutie pie?</h1>
      <div className="q-buttons">
        <button onClick={() => setAnswer("yes")}>Yes</button>
        <button onClick={() => setAnswer("no")}>No</button>
      </div>

      {answer && (
        <div className="popup">
          {answer === "yes" ? (
            <>
              <h2>I love you baby ❤️</h2>
              <img src="https://i.imgur.com/nXvrTyh.jpeg" alt="Happy Dudu" />
            </>
          ) : (
            <>
              <h2>Oh no... 😢</h2>
              <img src="https://i.imgur.com/tpIx24B.png" alt="Crying Dudu" />
            </>
          )}
        </div>
      )}
    </div>
  );
        }
