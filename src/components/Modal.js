import React from "react";

export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h2 onClick={() => window.location.reload()} className="close">
            X
          </h2>
          <h1>You Win!</h1>
          <p className="solution correct">{solution}</p>
          <p>
            You found the solution{" "}
            {turn === 1 ? `on your first try` : `in ${turn} guesses`}
          </p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h2 onClick={() => window.location.reload()} className="close">
            X
          </h2>
          <h1>Nevermind</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time :)</p>
        </div>
      )}
    </div>
  );
};
