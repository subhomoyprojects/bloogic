import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const FooterTop = styled(Box)`
  background-color: ${ColorPalette.primaryColor};
  padding-block: 4rem;
  h1 {
    img {
      filter: brightness(0) invert(1);
    }
  }
  p {
    font-size: 1.4rem;
    color: ${ColorPalette.whiteColor};
  }
  h4 {
    color: ${ColorPalette.whiteColor};
    font-weight: 600;
    margin-bottom: 2rem;
  }
  .quickLinks {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    li {
      flex: 0 0 auto;
      width: calc((100% / 2) - (1rem - (1rem / 2)));
      &.active {
        a {
          opacity: 0.7;
        }
      }
      a {
        color: ${ColorPalette.whiteColor};
        font-size: 1.6rem;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
  .footerInputHolder {
    label {
      color: ${ColorPalette.whiteColor};
    }
    input,
    textarea,
    fieldset,
    .MuiIconButton-edgeEnd {
      color: ${ColorPalette.whiteColor};
    }
    fieldset,
    .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${ColorPalette.whiteColor};
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
          display: inline-flex;
          width: 4.4rem;
          height: 4.4rem;
          align-items: center;
          justify-content: center;
          border: 1px solid ${ColorPalette.whiteColor};
          border-radius: 100%;
          color: ${ColorPalette.whiteColor};
          font-size: 2.2rem;
          &:hover {
            background-color: ${ColorPalette.whiteColor};
            img,
            svg {
              filter: inherit;
            }
          }
          img,
          svg {
            max-width: 4rem;
            filter: brightness(0) invert(1);
            transition: all 0.3s;
          }
          svg {
            width: 3rem;
            height: 3rem;
          }
        }
      }
    }
  }
`;
export const FooterBottom = styled(Box)`
  background-color: ${ColorPalette.secondaryColor};
  padding-block: 1.5rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    font-size: 1.4rem;
    li {
      display: inline-flex;
      align-items: center;
      gap: 2rem;
      p {
        color: ${ColorPalette.whiteColor};
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        a {
          margin-inline: 5px;
        }
      }
      a {
        color: ${ColorPalette.whiteColor};
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
