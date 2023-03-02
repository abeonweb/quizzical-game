import { useReducer } from "react";
import StartPage from "./StartPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./Login";
import ScorePage from "./ScorePage";
import Register from "./Register";
import Game from "./Game";
import { GameContext } from "./context/GameContext";

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
  mode: "",
  start: false
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={state}>
      <main className="main">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<StartPage start={state.start} dispatch={dispatch} />} />
            <Route path="game" element={<Game start={state.start}/>} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="score-page" element={<ScorePage />} />
          </Route>
        </Routes>
      </main>
    </GameContext.Provider>
  );
}
