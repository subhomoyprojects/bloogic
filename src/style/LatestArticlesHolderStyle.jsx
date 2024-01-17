import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ColorPalette } from "../assets/scss/ThemePalet";

export const LatestArticlesHolder = styled(Box)`
  position: sticky;
  top: 0;
  .latestArticlesItem {
    background-color: ${ColorPalette.lightSky};
    box-shadow: 2px 2px 5px ${ColorPalette.shadowColor};
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
  .imgHolderTwo {
    width: 30%;
  }
  .cardContentTwo {
    width: 70%;
    padding: 1.5rem;
    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .description {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: 1.6rem;
        border: none;
      }
    }
  }
  h2 {
    border-bottom: 1px solid ${ColorPalette.primaryColor};
    flex: 1;
  }
`;

export const EditorPicks = styled(Box)`
  flex-direction: column;
  padding: 2rem;
  border: 1px solid ${ColorPalette.lightBlueBorder};
  .editorPicks {
    flex-wrap: wrap;
    & > * {
      width: 100%;
    }
    .imgHolderTwo {
      img {
        max-height: 40rem;
        min-height: 40rem;
        object-fit: cover;
        object-position: top;
      }
    }
    .cardContentTwo {
      padding: 1.5rem;
    }
  }
  .swiperContainer {
    position: relative;
  }
`;
export const Categories = styled(Box)`
  margin-top: 3rem;
  padding: 2rem;
  border: 1px solid ${ColorPalette.lightBlueBorder};
  position: sticky;
  top: 3rem;
`;
