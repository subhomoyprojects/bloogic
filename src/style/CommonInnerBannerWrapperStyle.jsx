import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const CommonInnerBannerWrapper = styled(Box)`
  background-color: ${ColorPalette.secondaryColor};
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    color: ${ColorPalette.whiteColor};
    font-weight: 600;
  }
`;
