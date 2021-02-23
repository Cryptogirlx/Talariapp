import React, { Component } from "react";
import { Link } from "react-router-dom";
import bg from "../Images/bg.png";
import { colors } from "../utils/colors";
import styled from "styled-components";
import { Button } from "../Components/Buttons";
import { MainTitle } from "../Components/Typography";

const Description = styled.div`
  margin-bottom: 90px;
`;

const HomeBgWrap = styled.div`
  background-color: ${colors.homeBg};
  height: 100vh;
  color: white;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Li = styled.li`
  margin: 6px auto;
`;

export class Home extends Component {
  render() {
    return (
      <HomeBgWrap>
        <MainTitle>TalariApp</MainTitle>
        <Description>
          <h2 style={{ margin: "13px auto 20px auto" }}>
            Asking the gods is easier than ever!
          </h2>{" "}
          <p>All it takes is 3 simple steps:</p>
          <ul style={{ listStyleType: "none" }}>
            <Li>1. Select the nature of your request.</Li>
            <Li>
              2. We will match you with the perfect god or goddess for your
              unique needs!
            </Li>
            <Li>
              3. Simply write a message to your god or goddess and we will take
              care of the rest!
            </Li>
          </ul>
          <Link to="/select">
            <Button type="submit" value="Ask a question" />{" "}
          </Link>
        </Description>
      </HomeBgWrap>
    );
  }
}

export default Home;
