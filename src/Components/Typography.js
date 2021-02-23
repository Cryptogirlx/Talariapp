import styled from "styled-components";
import { colors } from "../utils/colors";

export const MainTitle = styled.h1`
  font-family: cinzel;
  border-bottom: solid 1px ${colors.green};
  padding: 0 30px;
  font-size: 58px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-family: cinzel;
  font-size: 44px;
  letter-spacing: 0.16px;
  margin: auto;
  text-align: center;
  color: ${colors.green};
`;

// const H3 = styled.h3`
// font-family: cinzel;
// font-size: 50px;
// letter-spacing: 0.16px;
// margin: 20% auto 0px;
// text-align: center;
// color: #9effea;
// `;

export const Description = styled.p`
  max-width: 450px;
  margin: auto;
`;
export const Powers = styled.p`
  max-width: 450px;
  margin: 16px auto;
  font-weight: 700;
`;
