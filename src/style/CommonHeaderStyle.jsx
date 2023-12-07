import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const CommonHeader = styled(Typography)`
  text-transform: uppercase;
  color: ${ColorPalette.primaryColor};
  font-weight: 400;
`;

export const HeaderHolder = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0;
  }
`;
