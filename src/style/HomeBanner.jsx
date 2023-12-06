import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const BannerHolder = styled(Box)`
  .bannerItem {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 2rem;
    & > * {
      &:first-child {
        grid-row: 1 / 3;
        grid-column: 1 / 2;
      }
      &:nth-child(2) {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
      }
      &:nth-child(3) {
        grid-row: 1 / 2;
        grid-column: 3 / 4;
      }
      &:nth-child(4) {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
      }
      &:nth-child(5) {
        grid-row: 2 / 3;
        grid-column: 3 / 4;
      }
    }
    & > * {
    }
  }
`;
