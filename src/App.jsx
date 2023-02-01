import StartPage from "./StartPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import ScorePage from "./ScorePage";
import Register from "./Register";
import Game from "./Game";

export default function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="/quizzical-game" element={<Layout />}>
          <Route index element={<StartPage />} />
          <Route path="game" element={<Game />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="score-page" element={<ScorePage />} />
        </Route>
      </Routes>
    </main>
  );
}
