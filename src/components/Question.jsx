import React from "react";
import styled from "styled-components";
import Option from "./Option";

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

  const QuestionOptionsContainer = styled.div`
    border-bottom: 1px solid #dbdef0;
  `;

  const Question = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;
    padding-right: 0.2em;
  `;

  const Options = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 0.625rem;
    margin-bottom: 1em;
  `;

  return (
    <QuestionOptionsContainer>
      <Question>{props.question}</Question>
      <Options>{options}</Options>
    </QuestionOptionsContainer>
  );
}
