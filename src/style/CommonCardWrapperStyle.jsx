import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const CommonCardWrapper = styled(Box)`
  background-color: ${ColorPalette.whiteColor};
  border: 1px solid ${ColorPalette.primaryColor};
  box-shadow: 0px 3px 6px ${ColorPalette.shadowColor};
  padding: 2rem;
  .sliderItemHolder {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    & > * {
      flex: 0 0 auto;
      width: calc((100% / 2) - (2rem - (2rem / 2)));
    }
    .sliderRight {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      & > * {
        flex: 0 0 auto;
        height: calc((100% / 2) - (2rem - (2rem / 2)));
      }
    }
  }
`;

export const CommonCardTwo = styled(Box)`
  display: flex;
  & > * {
    flex: 0 0 auto;
    &.imgHolderTwo {
      width: 40%;
      display: flex;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    &.cardContentTwo {
      display: flex;
      flex-direction: column;
      padding-left: 2rem;
      width: 60%;
      h3 {
        text-transform: capitalize;
        font-weight: 400;
      }
      h4 {
        margin-bottom: 1.5rem;
      }
      p {
        font-size: 1.4rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 1.5rem;
      }
    }
  }
  figure {
    line-height: 0;
  }
  .dataCategory {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    strong {
      font-weight: 600;
      width: 100%;
    }
    span {
      font-size: 1.3rem;
      flex: 1;
    }
  }
  .dateView {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  ul {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
    width: auto;
    flex: 0 0 auto;
    li {
      button {
        color: ${ColorPalette.textColor};
        font-size: clamp(1.4rem, 1vw, 1.8rem);
        display: inline-flex;
        align-items: center;
        gap: 5px;
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
`;
