import { Box, Typography } from "@mui/material";
import { CommonCardTwo } from "../style/CommonCardWrapperStyle";
import PropTypes from "prop-types";
import assets from "../assets";
import { courseImage } from "../redux/Helper";
import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import { CommonBtn } from "../style/CommonBtnStyle";
import { useNavigate } from "react-router-dom";

export default function CourseComponent({ name, requirement, duration, fees, date, className, courseId }) {
  const [dateFormat, setDateFormat] = useState(null);
  useEffect(() => {
    let dateFormat = parseISO(date);
    let dateFormatFinal = format(dateFormat, "MMMM, dd yyyy");
    setDateFormat(dateFormatFinal);
  }, [date]);
  const navigate = useNavigate();
  return (
    <CommonCardTwo className={className}>
      <figure className="imgHolderTwo">
        <img src={courseId ? courseImage(courseId) : assets.noImage} alt="" />
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
              <strong>{duration}</strong> {dateFormat}
            </span>
            <ul>
              <li>
                <CommonBtn className="applyCourse" type="submit" variant="contained" onClick={() => navigate(`/course/${courseId}`)}>
                  Apply Course
                </CommonBtn>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </CommonCardTwo>
  );
}
CourseComponent.propTypes = {
  courseId: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  requirement: PropTypes.string,
  duration: PropTypes.string,
  fees: PropTypes.string,
  date: PropTypes.string,
};
