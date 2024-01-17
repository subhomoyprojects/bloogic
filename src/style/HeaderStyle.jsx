import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const HeaderHolder = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  .logo {
    img {
      max-height: 8rem;
    }
  }
  .socialHolder {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      align-items: center;
      gap: 1rem;
      li {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        a,
        button {
          &:not(.MuiIconButton-edgeEnd) {
            display: inline-flex;
            width: 4.4rem;
            height: 4.4rem;
            align-items: center;
            justify-content: center;
            border: 1px solid ${ColorPalette.primaryColor};
            border-radius: 100%;
            color: ${ColorPalette.primaryColor};
            font-size: 2.2rem;
            &:hover {
              background-color: ${ColorPalette.primaryColor};
              img {
                filter: brightness(0) invert(1);
              }
            }
            img,
            svg {
              max-width: 4rem;
              transition: all 0.3s;
            }
            svg {
              width: 3rem;
              height: 3rem;
            }
          }
        }
      }
      &.searchAbater {
        li {
          button {
            &:hover {
              color: ${ColorPalette.whiteColor};
            }
          }
          &.abater {
            a,
            button {
              background-color: ${ColorPalette.primaryColor};
              color: ${ColorPalette.whiteColor};
              &:hover {
                background-color: transparent;
                color: ${ColorPalette.primaryColor};
              }
            }
          }
        }
        .searchFieldHolder {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: ${ColorPalette.whiteColor};
          padding: 2rem;
          border-radius: 1.5rem;
          box-shadow: 0 0 1rem ${ColorPalette.shadowColor};
          transition: all 0.3s;
          transform-origin: bottom;
          & > * {
            width: 100%;
          }
          &:not(.active) {
            transform: translateY(-100%) scaleY(0);
          }
        }
      }
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
  .navigationHolder {
    flex: 1;
    padding-inline: 1.5rem;
    .subMenu {
      &.active {
        & > ul {
          display: flex;
        }
      }
      & > ul {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        min-width: 200px;
        background-color: ${ColorPalette.whiteColor};
        box-shadow: 0 0 10px ${ColorPalette.shadowColor};
        left: 0;
        right: 0;
        margin-inline: auto;
        margin-top: 1.5rem;
        gap: 0;
        border: 1px solid ${ColorPalette.shadowColor};
        &::before {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 1.2rem 1.2rem;
          border-color: transparent transparent ${ColorPalette.whiteColor};
          bottom: 100%;
          filter: drop-shadow(-2px -4px 4px ${ColorPalette.shadowColor});
          left: 3rem;
          z-index: 2;
          margin-bottom: -1px;
        }
        li {
          width: 100%;
          padding: 0;
          a {
            padding: 1.2rem 2rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            border-bottom: 1px solid ${ColorPalette.inputBorderColor};
            font-size: 1.6rem;
            color: ${ColorPalette.textColor};
            &::after {
              display: none;
            }
          }
        }
      }
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      position: relative;
      li {
        padding-inline: 1rem;
        position: relative;
        a,
        button {
          font-size: 1.6rem;
          font-weight: 400;
          text-transform: capitalize;
          color: ${ColorPalette.blackColor};
          background-color: transparent;
          padding: 0 0 2px;
          position: relative;
          svg {
            font-size: 2.2rem;
          }
          &::after {
            content: "";
            width: auto;
            transform: scaleX(0);
            height: 2px;
            background-color: ${ColorPalette.primaryColor};
            position: absolute;
            bottom: 0;
            left: 0;
            transition: all 0.3s;
            display: inline-flex;
          }
          &:hover {
            color: ${ColorPalette.primaryColor};
            &::after {
              transform: scaleX(1);
            }
          }
        }
      }
    }
  }
`;

export const LatestPost = styled(Box)`
  background-color: ${ColorPalette.primaryColor};
  color: ${ColorPalette.whiteColor};
  padding-block: 1rem;
  .MuiContainer-root {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
  }
  span {
    text-transform: uppercase;
    font-weight: 300;
    flex: 0 0 auto;
  }
  p {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
    font-size: 1.8rem;
    strong {
      flex: 0 0 auto;
      width: 100%;
      display: inline-flex;
      font-weight: 500;
      text-transform: uppercase;
      text-shadow: 0 0 0.2rem ${ColorPalette.shadowColor};
      animation: marquee 20s linear infinite;
    }
    &:hover {
      animation-play-state: paused;
    }
  }
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
