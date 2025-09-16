import React, { useState } from "react";

export default function QuestionAnswer() {
  const [answer, setAnswer] = useState(null);

  const closePopup = () => setAnswer(null);

  return (
    <div className="page answer-container">
      <h1 className="question-text">
        Will you stay with me forever my cutie pie?
      </h1>

      <div className="button-group">
        <button className="yes-btn" onClick={() => setAnswer("yes")}>
          Yes
        </button>
        <button className="no-btn" onClick={() => setAnswer("no")}>
          No
        </button>
      </div>

      {answer && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>
              ×
            </button>
            {answer === "yes" ? (
              <>
                <img
                  className="popup-img"
                  src="https://i.imgur.com/nXvrTyh.jpeg"
                  alt="Happy Dudu"
                />
                <p className="popup-text">I love you baby ❤️ ummah 💋</p>
              </>
            ) : (
              <>
                <img
                  className="popup-img"
                  src="https://i.imgur.com/tpIx24B.png"
                  alt="Sad Dudu"
                />
                <p className="popup-text">Dudu is sad 😢</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
    }
