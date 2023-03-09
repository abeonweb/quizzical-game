import React from "react";
import styled from "styled-components";

export default function Option(props) {
  let styles = {};

  if (props.option.isHeld && !props.checked) {
    //selected style
    styles = {
      backgroundColor: "#D6DBF5",
      border: "none",
      color: "rgba(77,91,158,1)",
    };
  } else if (props.option.isCorrect) {
    styles = {
      backgroundColor: "#94D7A2",
      border: "none",
    };
  } else if (props.option.isWrong) {
    styles = {
      backgroundColor: "#F8BCBC",
      border: "none",
    };
  } else if (props.checked) {
    styles = {
      backgroundColor: "#FFFFFF",
      border: "1px solid rgba(77,91,158,0.5)",
      color: "rgba(77,91,158,0.5)",
    };
  }

  const Option = styled.span`
    border: 1px solid #4d5b9e;
    border-radius: 15px;
    padding: 0.625em 1.5em;
    margin: 0.75em;
    cursor: pointer;
    font-weight: 500;
    text-align: center;
  `;
  
  return (
    <Option
      key={props.option.id}
      className="option"
      style={styles}
      onClick={() => props.toggleOption(props.option.id, props.qId)}
    >
      {props.option.value}
    </Option>
  );
}
