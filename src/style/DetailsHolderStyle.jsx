import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const DetailsHolder = styled(Box)`
  .abaterDetails {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    padding-block: 1rem;
    border-block: 1px solid ${ColorPalette.offWhite};
    width: 100%;
    figure {
      width: 5rem;
      height: 5rem;
      border-radius: 100%;
      margin-right: 2rem;
      display: inline-flex;
      overflow: hidden;
      flex: 0 0 auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    ul {
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;
      flex: 1;
      li {
        font-size: 1.4rem;
        font-weight: 500;
        &:first-of-type {
          font-weight: 600;
          color: ${ColorPalette.secondaryColor};
          font-size: 1.5rem;
        }
        &:last-of-type {
          margin-left: auto;
        }
      }
    }
  }
  .blogDetailsHolder {
    li {
      margin-bottom: 1.5rem;
    }
  }
  .mainImage {
    padding-block: 3rem;
    display: block;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: inherit;
    }
  }
`;
