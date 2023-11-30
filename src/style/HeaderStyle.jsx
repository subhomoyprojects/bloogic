import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const HeaderHolder = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
        a {
          display: inline-flex;
          width: 4.7rem;
          height: 4.7rem;
          align-items: center;
          justify-content: center;
          border: 1px solid ${ColorPalette.primaryColor};
          border-radius: 100%;
          &:hover {
            background-color: ${ColorPalette.primaryColor};
            img {
              filter: brightness(0) invert(1);
            }
          }
          img {
            max-width: 4rem;
            transition: all 0.3s;
          }
        }
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
      justify-content: center;
      gap: 2rem;
      position: relative;
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
        padding-inline: 1rem;
        position: relative;
        a,
        button {
          font-size: 1.8rem;
          font-weight: 400;
          text-transform: capitalize;
          color: ${ColorPalette.blackColor};
          background-color: transparent;
          padding: 0 0 2px;
          position: relative;
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

export const NavButton = styled(Button)``;