import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const CommonBtn = styled(Button)`
  font-size: 1.8rem;
  text-transform: uppercase;
  padding: 1rem 2rem;
  background-color: ${ColorPalette.primaryColor};
`;
