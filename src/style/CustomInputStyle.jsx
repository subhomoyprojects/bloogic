import styled from "@emotion/styled";
import { FormControl } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const CustomInputHolder = styled(FormControl)`
  width: 100%;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  label {
    color: ${ColorPalette.textColor};
    font-size: 1.6rem;
  }
  input,
  textarea {
    font-size: 1.6rem;
  }
  fieldset {
    border-color: ${ColorPalette.inputBorderColor};
    border-radius: 0.5rem;
    font-size: 1.6rem;
  }
  .css-i4bv87-MuiSvgIcon-root {
    width: 2em;
    height: 2em;
  }
  .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 0.5rem;
  }
  .css-1wc848c-MuiFormHelperText-root {
    color: ${ColorPalette.errorColor};
  }
`;
