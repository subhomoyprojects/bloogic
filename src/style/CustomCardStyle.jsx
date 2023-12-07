import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const CustomCard = styled(Box)`
  position: relative;
  &::after {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, ${ColorPalette.primaryColor} 0%, rgba(0, 136, 255, 0.01) 50%);
    position: absolute;
    z-index: 1;
  }
  figure {
    line-height: 0;
    position: relative;
    z-index: 0;
    &::before {
      content: "";
      height: 0.5em;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      background-color: ${ColorPalette.primaryColor};
      z-index: 1;
    }
    .cardCatagories {
      position: absolute;
      top: 0;
      right: 1em;
      background-color: ${ColorPalette.primaryColor};
      color: ${ColorPalette.whiteColor};
      padding: 1em 1em 0.8em;
      font-size: clamp(1.4rem, 0.9vw, 2rem);
      text-transform: uppercase;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      z-index: 2;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .cardContent {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    padding: 2rem;
    color: ${ColorPalette.whiteColor};
    z-index: 2;
    h3 {
      color: ${ColorPalette.whiteColor};
      font-size: clamp(1.6rem, 1.5vw, 2.5rem);
      margin-bottom: 1rem;
    }
    p {
      font-size: clamp(1.4rem, 0.5vw, 1.8rem);
      font-weight: 600;
    }
    .commentSection {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;
      p {
        margin-bottom: 0;
        font-weight: 400;
        flex: 1;
      }
      ul {
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        li {
          button {
            color: ${ColorPalette.whiteColor};
            font-size: clamp(1.4rem, 1vw, 1.8rem);
            &:hover {
              opacity: 0.7;
            }
            svg {
              width: 1.2em;
              height: 1.2em;
              transition: all 0.3s;
            }
          }
        }
      }
    }
  }
`;
