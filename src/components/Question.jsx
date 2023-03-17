import React from "react";
import styled from "styled-components";
import Option from "./Option";

  const QuestionOptionsContainer = styled.div`
    border-bottom: 1px solid #dbdef0;
  `;

  const QuestionElement = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;
    padding: 1em 1.2em;
    @media (min-width: 400px){ 
      /* margin: 2em 4em; */
      padding: 0 2em;
    }
  `;

  const Options = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 0.625rem;
    margin-bottom: 1em;
    padding: 0 1em;

    @media (min-width: 400px){ 
      margin: 2em 4em;
      padding: 0 1em;
    }
  `;

export default function Question(props) {
  const options = props.options.map((option) => {
    return (
      <Option
        key={option.id}
        qId={props.id}
        checked={props.checked}
        toggleOption={props.toggleOption}
        option={option}
      />
    );
  });


  return (
    <QuestionOptionsContainer>
      <QuestionElement>{props.question}</QuestionElement>
      <Options>{options}</Options>
    </QuestionOptionsContainer>
  );
}
