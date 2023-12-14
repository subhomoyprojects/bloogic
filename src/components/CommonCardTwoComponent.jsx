import { Box, IconButton, Typography } from "@mui/material";
import assets from "../assets";
import { CommonCardTwo } from "../style/CommonCardWrapperStyle";
import { Textsms, Visibility } from "@mui/icons-material";
import PropTypes from "prop-types";

export default function CommonCardTwoComponent({ className }) {
  return (
    <CommonCardTwo className={className}>
      <figure className="imgHolderTwo">
        <img src={assets.noImage} alt="" />
      </figure>
      <Box className="cardContentTwo">
        <Typography variant="h4">Top 10 Free Android Games Download 2024</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, qui soluta eligendi veniam itaque veritatis. Sunt labore animi, quaerat cumque minus illo? Dicta adipisci explicabo eveniet qui voluptatibus illo quaerat!</Typography>
        <Box className="dateCategory">
          <strong>Health</strong>
          <Box className="dateView">
            <span>September 3, 2023 | 4 min read</span>
            <ul>
              <li>
                <IconButton aria-label="visibility">
                  <Visibility />
                </IconButton>
              </li>
              <li>
                <IconButton aria-label="visibility">
                  <Textsms />
                </IconButton>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </CommonCardTwo>
  );
}
CommonCardTwoComponent.propTypes = {
  className: PropTypes.string,
};
