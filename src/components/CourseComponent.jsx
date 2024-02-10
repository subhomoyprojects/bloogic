import { Box, IconButton, Typography } from "@mui/material";
import { CommonCardTwo } from "../style/CommonCardWrapperStyle";
import { Textsms, Visibility } from "@mui/icons-material";
import PropTypes from "prop-types";
import assets from "../assets";
import { courseImage } from "../redux/Helper";

export default function CourseComponent({ name, requirement, duration, fees, date, className, id }) {
  return (
    <CommonCardTwo className={className}>
      <figure className="imgHolderTwo">
        <img src={id ? courseImage(id) : assets.noImage} alt="" />
      </figure>
      <Box className="cardContentTwo">
        <Typography variant="h4">{name}</Typography>
        <Box variant="body1" className="description">
          {fees}
        </Box>
        <Box className="dataCategory">
          <strong>{requirement}</strong>
          <Box className="dateView">
            <span>
              <strong>{duration}</strong> {date}
            </span>
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
CourseComponent.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  requirement: PropTypes.string,
  duration: PropTypes.string,
  fees: PropTypes.string,
  date: PropTypes.string,
};
