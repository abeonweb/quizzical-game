import { useState } from "react";
import StartPage from "./StartPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import ScorePage from "./ScorePage";
import Register from "./Register";
import Game from "./Game";
import { GameContext } from "./GameContext";

export default function App() {
  const [mode, setMode] = useState("easy");

  return (
    <GameContext.Provider value={mode}>
      <main className="main">
        <Routes>
          <Route path="/quizzical-game" element={<Layout />}>
            <Route index element={<StartPage setMode={setMode} />} />
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
