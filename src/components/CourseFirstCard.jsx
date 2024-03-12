import { Box, Typography } from "@mui/material";
import assets from "../assets";
import PropTypes from "prop-types";
import { CustomCard } from "../style/CustomCardStyle";
import { courseImage } from "../redux/Helper";
import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import { CommonBtn } from "../style/CommonBtnStyle";
import { Link, useNavigate } from "react-router-dom";

export default function CourseFirstCard({ courseId, name, requirement, duration, fees, date, slug }) {
  const [dateFormat, setDateFormat] = useState(null);
  useEffect(() => {
    let dateFormat = parseISO(date);
    let dateFormatFinal = format(dateFormat, "MMMM, dd yyyy");
    setDateFormat(dateFormatFinal);
  }, [date]);
  const navigate = useNavigate();
  return (
    <>
      <CustomCard className="item commonCard">
        <figure>
          <img src={courseId ? courseImage(courseId) : assets.noImage} alt="" />
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
                {/* <CommonBtn type="submit" variant="contained" onClick={() => navigate(`/course/${slug}`)}>
                  Apply Course
                </CommonBtn> */}
                <Link to={`/course/${courseId}`}>Apply Course</Link>
              </li>
            </ul>
          </Box>
        </Box>
      </CustomCard>
    </>
  );
}
CourseFirstCard.propTypes = {
  courseId: PropTypes.string,
  slug: PropTypes.string,
  name: PropTypes.string,
  requirement: PropTypes.string,
  duration: PropTypes.string,
  date: PropTypes.string,
  fees: PropTypes.string,
};
