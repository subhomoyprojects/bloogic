import { Box, IconButton, Typography } from "@mui/material";
import assets from "../assets";
import { Textsms, Visibility } from "@mui/icons-material";
import PropTypes from "prop-types";
import { CustomCard } from "../style/CustomCardStyle";
import { courseImage } from "../redux/Helper";
import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";

export default function CourseFirstCard({ id, name, requirement, duration, fees, date }) {
  const [dateFormat, setDateFormat] = useState(null);
  useEffect(() => {
    let dateFormat = parseISO(date);
    let dateFormatFinal = format(dateFormat, "MMMM, dd yyyy");
    setDateFormat(dateFormatFinal);
  }, [date]);
  return (
    <>
      <CustomCard className="item commonCard">
        <figure>
          <img src={id ? courseImage(id) : assets.noImage} alt="" />
          <Typography variant="h4" className="cardCatagories">
            {name}
          </Typography>
        </figure>
        <Box className="cardContent">
          <Typography variant="h3">{requirement}</Typography>
          {duration ? (
            <Box className="latestContent">
              {duration} <strong>{fees}</strong>
            </Box>
          ) : null}
          <Box className="commentSection">
            <p>
              <span>{dateFormat}</span> | <span>6 min read</span>
            </p>
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
      </CustomCard>
    </>
  );
}
CourseFirstCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  requirement: PropTypes.string,
  duration: PropTypes.string,
  date: PropTypes.string,
  fees: PropTypes.number,
};
