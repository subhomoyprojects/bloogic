import { Box, IconButton, Typography } from "@mui/material";
import assets from "../assets";
import { CommonCardTwo } from "../style/CommonCardWrapperStyle";
import { Textsms, Visibility } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";

export default function CommonCardTwoComponent({ className, title, description, image, imageType, date, category, id, dataType }) {
  const { categoryItems } = useSelector((state) => state.Blog);
  const [timeReceive, setTimeReceive] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/blog/details/${id}`);
  };

  useEffect(() => {
    const manageItems = categoryItems.find((item) => item._id === category);
    if (manageItems) {
      setCategoryName(manageItems.category);
    }
    if (date !== undefined && date !== "" && date !== null) {
      const parsedDate = parseISO(date);
      setTimeReceive(format(parsedDate, "MMMM dd, yyyy"));
    }
  }, [category, categoryItems, date, categoryName]);

  return (
    <CommonCardTwo className={className}>
      <figure className="imgHolderTwo">
        <img src={image ? `data:${imageType};base64,${image}` : dataType === "Buffer" ? `data:${imageType};base64,${dataType}` : assets.noImage} alt="" />
      </figure>
      <Box className="cardContentTwo">
        <Typography variant="h4">{title}</Typography>
        <Box variant="body1" className="description" dangerouslySetInnerHTML={{ __html: description?.trim()?.split(" ")?.slice(0, 5)?.join(" ") }}></Box>
        <Box className="dataCategory">
          <strong>{categoryName}</strong>
          <Box className="dateView">
            <span>{timeReceive}</span>
            <ul>
              <li>
                <IconButton aria-label="visibility" onClick={navigateTo}>
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
CommonCardTwoComponent.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageType: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  comment_count: PropTypes.number,
  id: PropTypes.string,
  dataType: PropTypes.node,
  wholeItem: PropTypes.node,
};
