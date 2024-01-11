import { Box, IconButton, Typography } from "@mui/material";
import assets from "../assets";
import { CommonCardTwo } from "../style/CommonCardWrapperStyle";
import { Textsms, Visibility } from "@mui/icons-material";
import PropTypes from "prop-types";

export default function TestimonialsCardComponent({ className, name, talk, position, date, image, id }) {
  return (
    <CommonCardTwo className={className}>
      <figure className="imgHolderTwo">
        <img src={image ? image : assets.noImage} alt="" />
      </figure>
      <Box className="cardContentTwo">
        <Typography variant="h4">{name}</Typography>
        <Box variant="body1" className="description" dangerouslySetInnerHTML={{ __html: talk?.trim()?.split(" ")?.slice(0, 5)?.join(" ") }}></Box>
        <Box className="dataCategory">
          <strong>{position}</strong>
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
TestimonialsCardComponent.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  talk: PropTypes.string,
  image: PropTypes.string,
  imageType: PropTypes.string,
  date: PropTypes.string,
  position: PropTypes.string,
  id: PropTypes.string,
};
