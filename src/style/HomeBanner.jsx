import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const BannerHolder = styled(Box)`
  .bannerItem {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 2rem;
    & > * {
      &:first-of-type {
        grid-row: 1 / 3;
        grid-column: 1 / 2;
        .cardCatagories {
          font-size: clamp(1.4rem, 1.125vw, 2rem);
        }
        .cardContent {
          .latestContent {
            display: block;
          }
          h3 {
            font-size: clamp(2rem, 1.875vw, 3.5rem);
          }
          p {
            font-size: clamp(1.4rem, 1vw, 1.8rem);
          }
          .commentSection {
            ul {
              li {
                button {
                  svg {
                    width: 1.7em;
                    height: 1.7em;
                  }
                }
              }
            }
          }
        }
      }
      &:nth-of-type(2) {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
      }
      &:nth-of-type(3) {
        grid-row: 1 / 2;
        grid-column: 3 / 4;
      }
      &:nth-of-type(4) {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
      }
      &:nth-of-type(5) {
        grid-row: 2 / 3;
        grid-column: 3 / 4;
      }
    }
    & > * {
      .latestContent {
        display: none;
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: 1.6rem;
          font-weight: 500;
          color: ${ColorPalette.textColor};
          display: none;
        }
      }
      .item {
        height: 100%;
        display: flex;
      }
      h3 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: clamp(1.6rem, 1.6vw, 2rem);
        text-shadow: 1px 2px 2px ${ColorPalette.textShadowColor};
      }
      p {
        text-shadow: 1px 2px 2px ${ColorPalette.shadowColor};
      }
    }
  }
`;
