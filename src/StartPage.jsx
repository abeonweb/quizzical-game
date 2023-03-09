import StyledLink from "./components/StyledLink";
import styled from "styled-components";

const StartPageContainer = styled.div`
  font-family: "Inter", sans-serif;
  background-color: transparent;
  color: #293264;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "Karla", sans-serif;
  color: #293264;
  text-transform: capitalize;
  margin-bottom: 0.5em;
`

const Tagline = styled.p`
  line-height: 1.5;
  margin-bottom: 2em;
`

export default function StartPage({ mode, start, dispatch }) {
  return (
    <StartPageContainer>
      <Title>quizzical</Title>
      <Tagline>
        A fun trivia game you can enjoy with friends!
      </Tagline>
      <div className="game-mode">
        <p>Select a play mode</p>
        <button
          className={`${mode == "easy" ? "highlight btn-mode" : "btn-mode"}`}
          onClick={() => dispatch({ type: "mode", value: "easy" })}
        >
          Easy
        </button>
        <button
          className={`${mode == "medium" ? "highlight btn-mode" : "btn-mode"}`}
          onClick={() => dispatch({ type: "mode", value: "medium" })}
        >
          Medium
        </button>
        <button
          className={`${mode == "hard" ? "highlight btn-mode" : "btn-mode"}`}
          onClick={() => dispatch({ type: "mode", value: "hard" })}
        >
          Hard
        </button>
      </div>

      <StyledLink start={start} link={"game"} text={"Start quiz"} />
    </StartPageContainer>
  );
}
