import { Link } from "react-router-dom";

export default function StartPage(props) {
  const {state, dispatch}= props
  
  return (
    
      <div className="start-page">
        <h1 className="start-page--title">quizzical</h1>
        <p className="start-page--tagline">
          A fun trivia game you can enjoy with friends!
        </p>
        <div className="game-mode">
          <p>Select a play mode</p>
          <button className="btn-mode" onClick={() => dispatch({type:"mode", value: "easy"})}>
            Easy
          </button>
          <button className="btn-mode" onClick={() => dispatch({type:"mode", value: "medium"})}>
            Medium
          </button>
          <button className="btn-mode" onClick={() => dispatch({type:"mode", value: "hard"})}>
            Hard
          </button>
        </div>
        
          <Link 
          className={`btn ${!state.start? "btn--disabled": null}`} 
          to="game"
          >
            Start quiz
          </Link>
        
      </div>
  );
}
