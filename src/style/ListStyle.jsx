import styled from "@emotion/styled";
import { ListItem } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const ListItemStyle = styled(ListItem)`
  padding-inline: 0;
  .MuiTypography-body1 {
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 500;
    color: ${ColorPalette.blackColor};
  }
  .MuiAvatar-circular {
    background-color: ${ColorPalette.primaryColor};
    color: ${ColorPalette.whiteColor};
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
  .css-16ac5r2-MuiButtonBase-root-MuiListItemButton-root {
    padding: 0;
    background-color: transparent;
  }
`;
