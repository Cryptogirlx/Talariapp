import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

function GodCard(props) {
  const [isOver, setIsOver] = useState(false);
  const [move, setMove] = useState("350px");

  const BgDarken = keyframes`
    from {
        background-image: linear-gradient(
            to bottom,
            rgba(19, 21, 21, 0) 0%,
            rgba(19, 21, 21, 0) 50%,
            rgba(19, 21, 21, 0.9) 100%
          ),
          url(${props.img});
    }
    
    to {
        background-image: linear-gradient(
              to bottom,
              rgba(19, 21, 21, 0) 0%,
              rgba(19, 21, 21, 0.9) 50%,
              rgba(19, 21, 21, 0.9) 100%
            ),
            url(${props.img});
    }
    `;
  const BgLighten = keyframes`
    from {
        background-image: linear-gradient(
              to bottom,
              rgba(19, 21, 21, 0) 0%,
              rgba(19, 21, 21, 0.9) 50%,
              rgba(19, 21, 21, 0.9) 100%
            ),
            url(${props.img});
    }
    
    to {
        background-image: linear-gradient(
            to bottom,
            rgba(19, 21, 21, 0) 0%,
            rgba(19, 21, 21, 0) 50%,
            rgba(19, 21, 21, 0.9) 100%
          ),
          url(${props.img});

    }
    `;

  const CardImage = styled.div`
    background-image: linear-gradient(
        to bottom,
        rgba(19, 21, 21, 0) 0%,
        rgba(19, 21, 21, 0) 50%,
        rgba(19, 21, 21, 0.9) 100%
      ),
      url(${props.img});
    background-size: cover;
    height: 400px;
    width: 300px;
    border: none;
    margin: 16px;
    padding: 16px;
    text-decoration: none;
    cursor: pointer;
    //animation: example 5s linear 2s infinite alternate;
    animation: ${(props) => props.isOver && `${BgDarken} 1s ease-out`};
    //${BgDarken} 1s ease-out;
    &:hover {
      background-image: linear-gradient(
          to bottom,
          rgba(19, 21, 21, 0) 0%,
          rgba(19, 21, 21, 0.9) 50%,
          rgba(19, 21, 21, 0.9) 100%
        ),
        url(${props.img});
    }
  `;

  const CardTitle = styled.h2`
    font-family: cinzel;
    letter-spacing: 0.3px;
    color: #fff;
    margin: auto;
  `;

  const PowerText = styled.p`
    font-family: raleway;
    color: #fff;
    margin: 0px auto;
    font-weight: 500;
  `;

  const triggerOn = () => {
    console.log(`${props.name} on`);
    // setIsOver(true);
    setMove("300px");
  };
  const triggerOff = () => {
    console.log(`${props.name} off`);
    // setIsOver(false);
    setMove("350px");
  };

  return (
    <div className="GodCard">
      <Link to={`/contact/${props.name}`} style={{ textDecoration: "none" }}>
        <CardImage
          //   isOver={isOver}
          onMouseEnter={triggerOn}
          onMouseLeave={triggerOff}
        >
          <div style={{ marginTop: `${move}` }}>
            <CardTitle>{props.name}</CardTitle>
            <PowerText>{props.power}</PowerText>
          </div>
        </CardImage>
      </Link>
    </div>
  );
}

export default GodCard;
