import React from "react";
import styled from "styled-components";
import "../index.css";

function GetADuck(props) {
  const StyleDiv = styled.div`
    background-color: #131515;
    color: #fff;
  `;

  const H3 = styled.h3`
    font-family: cinzel;
    font-size: 50px;
    letter-spacing: 0.16px;
    margin: 20% auto 0px;
    text-align: center;
    color: #9effea;
  `;

  const RuningText = styled.p`
    max-width: 450px;
    margin: auto;
    font-family: raleway;
    font-size: 23px;
  `;
  console.log("answer here?", props.answer.magic.answer);

  return (
    <StyleDiv>
      <H3>
        Congrats, your request has been heard by the gods, and they have
        replied:{" "}
      </H3>
      <br></br>
      <RuningText>
        <br></br>"{props.answer.magic.answer}."
      </RuningText>
    </StyleDiv>
  );
}

export default GetADuck;
