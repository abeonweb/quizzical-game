import { useReducer } from "react";
import StartPage from "./StartPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./Login";
import ScorePage from "./ScorePage";
import Register from "./Register";
import Game from "./Game";
import { GameContext } from "./context/GameContext";
import styled from "styled-components"

const StyledMain = styled.main`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: relative;
`

function reducer(state, action){
  if(action.type === "mode"){
    return {
      ...state,
      mode: action.value,
      start: "true"
    }
  }
}

const initialState = {
  mode: "",
  start: "false"
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={state}>
      <StyledMain>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<StartPage mode={state.mode} start={state.start} dispatch={dispatch} />} />
            <Route path="game" element={<Game start={state.start}/>} />
          </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="score-page" element={<ScorePage />} />
        </Routes>
      </StyledMain>
    </GameContext.Provider>
  );
}
