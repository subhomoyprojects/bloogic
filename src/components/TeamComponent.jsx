import { Box, IconButton, Typography } from "@mui/material";
import assets from "../assets";
import { CommonCardTwo } from "../style/CommonCardWrapperStyle";
import { Textsms, Visibility } from "@mui/icons-material";
import PropTypes from "prop-types";
import { teamImage } from "../redux/Helper";

export default function TeamComponent({ className, name, possession, date, id }) {
  return (
    <CommonCardTwo className={className}>
      <figure className="imgHolderTwo">
        <img src={id ? teamImage(id) : assets.noImage} alt="" />
      </figure>
      <Box className="cardContentTwo">
        <Typography variant="h4">{name}</Typography>
        <Box className="dataCategory">
          <strong>{possession}</strong>
          <Box className="dateView">
            <span>{date}</span>
            <ul>
              <li>
                <IconButton aria-label="visibility">
                  <Visibility />
                </IconButton>
              </li>
              <li>
                <IconButton aria-label="visibility" target="_blank" href="https://api.whatsapp.com/send?text=https://www.bloggic.com/10-best-foods-for-high-blood-pressure/">
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
TeamComponent.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  possession: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string,
};
