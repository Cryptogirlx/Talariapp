import React from "react";
import styled from "styled-components";
import "../index.css";
import { colors } from "../utils/colors";
import { Title } from "./Typography";

function GetADuck(props) {
  const StyleDiv = styled.div`
    background-color: ${colors.normalBg};
    color: ${colors.light};
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
  `;

  //   const H3 = styled.h3`
  //     font-family: cinzel;
  //     font-size: 50px;
  //     letter-spacing: 0.16px;
  //     margin: 20% auto 0px;
  //     text-align: center;
  //     color: #9effea;
  //   `;

  const RuningText = styled.p`
    max-width: 450px;
    margin: auto;
    font-family: raleway;
    font-size: 23px;
  `;

  return (
    <StyleDiv>
      <Title>Congrats, you have received a reply: </Title>

      <RuningText>"{props.answer.magic.answer}."</RuningText>
    </StyleDiv>
  );
}

export default GetADuck;
