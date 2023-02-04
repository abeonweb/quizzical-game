import { useReducer } from "react";
import StartPage from "./StartPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import ScorePage from "./ScorePage";
import Register from "./Register";
import Game from "./Game";
import { GameContext } from "./GameContext";

function reducer(state, action){
  if(action.type === "mode"){
    return {
      ...state,
      mode: action.value,
      start: true
    }
  }
}

const initialState = {
  mode: "easy",
  start: false
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={state}>
      <main className="main">
        <Routes>
          <Route path="/quizzical-game" element={<Layout />}>
            <Route index element={<StartPage state={state} dispatch={dispatch} />} />
            <Route path="game" element={<Game />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="score-page" element={<ScorePage />} />
          </Route>
        </Routes>
      </main>
    </GameContext.Provider>
  );
}
