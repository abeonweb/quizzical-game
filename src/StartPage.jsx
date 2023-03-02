import Button from "./components/ButtonLink";

export default function StartPage({start, dispatch}) {
  return (
    <div className="start-page">
      <h1 className="start-page--title">quizzical</h1>
      <p className="start-page--tagline">
        A fun trivia game you can enjoy with friends!
      </p>
      <div className="game-mode">
        <p>Select a play mode</p>
        <button
          className="btn-mode"
          onClick={() => dispatch({ type: "mode", value: "easy" })}
        >
          Easy
        </button>
        <button
          className="btn-mode"
          onClick={() => dispatch({ type: "mode", value: "medium" })}
        >
          Medium
        </button>
        <button
          className="btn-mode"
          onClick={() => dispatch({ type: "mode", value: "hard" })}
        >
          Hard
        </button>
      </div>

      <Button start={start} link={"game"} text={"Start quiz"} />
    </div>
  );
}
