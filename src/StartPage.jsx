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

const GameMode = styled.div`
  margin: 0.5em;
`

const GameModeTitle = styled.p`
  margin-bottom: 0.8em;
`

// const ModeButton = styled.button`
//   border: none;
//   background-color: transparent;
//   padding: 0.5em 1em;
//   margin: 0.5em 0;
//   cursor: pointer;
//   border-radius: 8px;
// `
const ModeButtonEasy = styled.button`
  border: none;
  background-color: ${({mode}) => mode == "easy"? "#4d5b9e": "transparent"};
  color: ${({mode}) => mode == "easy"? "#DBDEF0": "black"};
  padding: 0.5em 1em;
  margin: 0.5em 0;
  cursor: pointer;
  border-radius: 8px;
`
const ModeButtonMedium = styled.button`
  border: none;
  background-color: ${({mode}) => mode == "medium"? "#4d5b9e": "transparent"};
  color: ${({mode}) => mode == "medium"? "#DBDEF0": "black"};
  padding: 0.5em 1em;
  margin: 0.5em 0;
  cursor: pointer;
  border-radius: 8px;
`
const ModeButtonHard = styled.button`
  border: none;
  background-color: ${({mode}) => mode == "hard"? "#4d5b9e": "transparent"};
  color: ${({mode}) => mode == "hard"? "#DBDEF0": "black"};
  padding: 0.5em 1em;
  margin: 0.5em 0;
  cursor: pointer;
  border-radius: 8px;
`

export default function StartPage({ mode, start, dispatch }) {
  return (
    <StartPageContainer>
      <Title>quizzical</Title>
      <Tagline>
        A fun trivia game you can enjoy with friends!
      </Tagline>
      <GameMode>
        <GameModeTitle>Select a play mode</GameModeTitle>
        <ModeButtonEasy
          mode = {mode}
          onClick={() => dispatch({ type: "mode", value: "easy" })}
        >
          Easy
        </ModeButtonEasy>
        <ModeButtonMedium
          mode = {mode}
          onClick={() => dispatch({ type: "mode", value: "medium" })}
        >
          Medium
        </ModeButtonMedium>
        <ModeButtonHard
          mode = {mode}
          onClick={() => dispatch({ type: "mode", value: "hard" })}
        >
          Hard
        </ModeButtonHard>
      </GameMode>

      {mode? <StyledLink start={start} link={"game"} text={"Start quiz"} />: <StyledLink start={false} link={""} text={"Start quiz"} />}
    </StartPageContainer>
  );
}
