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
    & > p {
      width: 100%;
    }
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
  .sliderCourseItem {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    & > * {
      &:first-of-type {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
      }
      &:nth-of-type(2) {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
      }
      &:nth-of-type(3) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
      .commonCard {
        background-color: ${ColorPalette.lightSky};
        img {
          min-height: 50rem;
          max-height: 50rem;
          object-fit: contain;
        }
        .latestContent {
          strong {
            display: block;
          }
        }
      }
      .sliderRight {
        & > * {
          height: 100%;
        }
      }
      .commonCard,
      .sliderRight {
        width: 100%;
      }
    }
  }
`;

export const CommonCardTwo = styled(Box)`
  display: flex;
  &.editorPicks {
    padding: 1px;
    & > * {
      &.imgHolderTwo {
        width: 100%;
        line-height: 0;
        border-radius: 1.5rem 1.5rem 0 0;
        overflow: hidden;
      }
      &.cardContentTwo {
        padding: 2rem;
        width: 100%;
        border-radius: 0 0 1.5rem 1.5rem;
        overflow: hidden;
        border: 1px solid ${ColorPalette.lightBlueBorder};
      }
    }
  }
  &.teamCard {
    border: 1px solid ${ColorPalette.lightBlueBorder};
    border-radius: 1.5rem;
    flex-wrap: wrap;
    overflow: hidden;
    transition: all 0.3s;
    width: calc((100% / 4) - (2rem - (2rem / 4))) !important;
    & > * {
      &.imgHolderTwo {
        width: 100%;
        line-height: 0;
        overflow: hidden;
      }
      &.cardContentTwo {
        padding: 2rem;
        width: 100%;
        background-color: ${ColorPalette.lightSky};
      }
    }
    &:hover {
      box-shadow: 0 0 1rem ${ColorPalette.shadowColor};
      transform: translateY(-1rem);
    }
  }
  &.mostView {
    .imgHolderTwo {
      border: 1px solid ${ColorPalette.inputBorderColor};
      background-color: ${ColorPalette.offWhite};
      box-shadow: 0.4rem 0.4rem 0.1rem ${ColorPalette.shadowColor};
      padding: 2rem;
      border-radius: 1rem;
    }
    .cardContentTwo {
      .description {
        font-weight: 600;
        color: ${ColorPalette.blackColor};
      }
    }
  }
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
      button,
      a {
        &:not(.applyCourse) {
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
        &.applyCourse {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
