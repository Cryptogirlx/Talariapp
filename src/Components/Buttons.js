import styled, { css } from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { colors } from "../utils/colors";

const BUTTON_MODIFIERS = {
  opposite: () => css`
    background: ${colors.green};
    color: ${colors.darkText};
    border: solid 1px ${colors.green};
    &:hover {
      background-color: transparent;
      border: solid 1px ${colors.green};
      color: ${colors.green};
    }
  `,
};

export const Button = styled.input`
  font-family: cinzel;
  font-weight: bolder;
  font-size: 16px;
  background-color: transparent;
  border: none;
  margin-top: 16px;
  padding: 8px 16px;
  cursor: pointer;
  color: ${colors.green};
  border: solid 1px ${colors.green};
  &:hover {
    background: ${colors.green};
    border: solid 1px ${colors.green};
    color: ${colors.darkText};
  }
  &:focus {
    outline: none;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
