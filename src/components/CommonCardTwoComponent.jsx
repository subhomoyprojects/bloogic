import { Box, IconButton, Typography } from "@mui/material";
import assets from "../assets";
import { CommonCardTwo } from "../style/CommonCardWrapperStyle";
import { Textsms, Visibility } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function CommonCardTwoComponent({ className, title, description, image, imageType, date, category }) {
  const { categoryItems } = useSelector((state) => state.Blog);

  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const manageItems = categoryItems.find((item) => item._id === category);
    if (manageItems) {
      setCategoryName(manageItems.category);
    }
  }, [category, categoryItems]);

  return (
    <CommonCardTwo className={className}>
      <figure className="imgHolderTwo">
        <img src={image ? `data:${imageType};base64,${image}` : assets.noImage} alt="" />
      </figure>
      <Box className="cardContentTwo">
        <Typography variant="h4">{title}</Typography>
        <Box variant="body1" className="description" dangerouslySetInnerHTML={{ __html: description?.trim()?.split(" ")?.slice(0, 5)?.join(" ") }}></Box>
        <Box className="dataCategory">
          <strong>{categoryName}</strong>
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
CommonCardTwoComponent.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageType: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  comment_count: PropTypes.number,
};
