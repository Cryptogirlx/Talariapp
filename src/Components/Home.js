import React, { Component } from "react";
import { Link } from "react-router-dom";
import bg from "../Images/bg.png";

import styled from "styled-components";

const Description = styled.div`
  margin-bottom: 90px;
`;
const Title = styled.h1`
  font-family: cinzel;
  border-bottom: solid 1px #9effea;
  padding: 0 30px;
  font-size: 58px;
  margin: 0 auto;
`;

const Button = styled.input`
  font-family: cinzel;
  font-weight: bolder;
  font-size: 16px;
  background-color: transparent;
  border: none;
  margin-top: 16px;
  padding: 8px 16px;
  cursor: pointer;
  color: #9effea;
  border: solid 1px #9effea;
  &:hover {
    background: #9effea;
    border: solid 1px #9effea;
    color: #1f2322;
  }
  &:focus {
    outline: none;
  }
`;

const HomeBgWrap = styled.div`
  background-color: #100019;
  height: 100vh;
  color: white;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  //align-items: flex-end;
`;

const Li = styled.li`
  margin: 6px auto;
`;

export class Home extends Component {
  render() {
    return (
      <HomeBgWrap>
        <Title>TalariApp</Title>
        <Description>
          <h2 style={{ margin: "13px auto 20px auto" }}>
            Making a request to the gods is easier than ever!
          </h2>{" "}
          <p>All it takes is 3 simple steps:</p>
          <ul style={{ listStyleType: "none" }}>
            <Li>1. Select the nature of your request.</Li>
            <Li>
              2. We will match you with the perfect god or goddess for your
              unique needs!
            </Li>
            <Li>
              3. Simply write a message to your god or goddess, select an
              optional sacrifice, and we will take care of the rest!
            </Li>
          </ul>
          <Link to="/select">
            <Button type="submit" value="Pray Now" />{" "}
          </Link>
        </Description>
      </HomeBgWrap>
    );
  }
}

export default Home;
