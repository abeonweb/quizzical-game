import { Link } from "react-router-dom";

export default function StartPage(props) {
  const {setMode}= props
  
  return (
    
      <div className="start-page">
        <h1 className="start-page--title">quizzical</h1>
        <p className="start-page--tagline">
          A fun trivia game you can enjoy with friends!
        </p>
        <div className="game-mode">
          <p>Select a play mode</p>
          <button className="btn-mode" onClick={() => setMode("easy")}>
            Easy
          </button>
          <button className="btn-mode" onClick={() => setMode("medium")}>
            Medium
          </button>
          <button className="btn-mode" onClick={() => setMode("hard")}>
            Hard
          </button>
        </div>
        {
          <Link className="btn btn--start" to="game">
            Start quiz
          </Link>
        }
      </div>
  );
}
