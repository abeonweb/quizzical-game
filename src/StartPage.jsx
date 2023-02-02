import { useState } from "react";
import { Link } from "react-router-dom";

export default function StartPage() {
  const [mode, setMode] = useState("easy");

  return (
    <>
      <div className="start-page">
        <h1 className="start-page--title">quizzical</h1>
        <p className="start-page--tagline">
          A fun trivia game you can enjoy with friends!
        </p>
        <button className="btn-mode" onClick={()=> setMode("easy")}>Easy</button>
        <button className="btn-mode" onClick={()=> setMode("medium")}>Medium</button>
        <button className="btn-mode" onClick={()=> setMode("hard")}>Hard</button>
        {(
          <Link className="btn btn--start" to="game">
            Start quiz
          </Link>
        )}
      </div>
    </>
  );
}
