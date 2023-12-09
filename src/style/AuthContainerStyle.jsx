import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const AuthContainer = styled(Container)`
  .authHolder {
    max-width: 700px;
    margin-inline: auto;
    @media (max-width: 767px) {
      max-width: 100%;
    }
  }
  form {
    & > * {
      margin-bottom: 3rem;
    }
    button {
      width: 100%;
    }
  }
  .pageGo {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    a {
      color: ${ColorPalette.primaryColor};
      margin-inline: 5px;
    }
  }
`;
