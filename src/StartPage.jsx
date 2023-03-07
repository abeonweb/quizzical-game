import StyledLink from "./components/StyledLink";

export default function StartPage({mode, start, dispatch}) {
  return (
    <div className="start-page">
      <h1 className="start-page--title">quizzical</h1>
      <p className="start-page--tagline">
        A fun trivia game you can enjoy with friends!
      </p>
      <div className="game-mode">
        <p>Select a play mode</p>
        <button
          className={`"btn-mode" ${mode == "easy"? "highlight": ""}`}
          onClick={() => dispatch({ type: "mode", value: "easy" })}
        >
          Easy
        </button>
        <button
          className={`"btn-mode" ${mode == "medium"? "highlight": ""}`}
          onClick={() => dispatch({ type: "mode", value: "medium" })}
        >
          Medium
        </button>
        <button
          className={`"btn-mode" ${mode == "hard"? "highlight": ""}`}
          onClick={() => dispatch({ type: "mode", value: "hard" })}
        >
          Hard
        </button>
      </div>

      <StyledLink start={start} link={"game"} text={"Start quiz"} />
    </div>
  );
}
