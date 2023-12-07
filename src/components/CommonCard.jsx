import { Box, IconButton, Typography } from "@mui/material";
import assets from "../assets";
import { Textsms, Visibility } from "@mui/icons-material";
import PropTypes from "prop-types";
import { CustomCard } from "../style/CustomCardStyle";
export default function CommonCard({ image, catagories, title, description }) {
  return (
    <>
      <CustomCard className="item commonCard">
        <figure>
          <img src={image ? image : assets.noImage} alt="" />
          <Typography variant="h4" className="cardCatagories">
            {catagories ? catagories : "no catagories"}
          </Typography>
        </figure>
        <Box className="cardContent">
          <Typography variant="h3">{title}</Typography>
          {description ? <Typography variant="body1">{description}</Typography> : null}
          <Box className="commentSection">
            <p>
              <span>November 25, 2023</span> | <span>6 min read</span>
            </p>
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
      </CustomCard>
    </>
  );
}
CommonCard.propTypes = {
  image: PropTypes.string,
  catagories: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
