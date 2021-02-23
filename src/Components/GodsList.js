import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import GodCard from "./GodCard";

function GodsList(props) {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: ${colors.normalBg};
  `;

  return (
    <Container>
      {props.godattributes.map((god) => (
        <GodCard
          name={god.name}
          img={god.img}
          symbol={god.symbol}
          power={god.power}
          description={god.description}
        />
      ))}
    </Container>
  );
}

export default GodsList;
