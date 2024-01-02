import { Box, IconButton, Typography } from "@mui/material";
import assets from "../assets";
import { Textsms, Visibility } from "@mui/icons-material";
import PropTypes from "prop-types";
import { CustomCard } from "../style/CustomCardStyle";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function CommonCard({ image, imageType, catagories, title, description, createDate }) {
  const { categoryItems } = useSelector((state) => state.Blog);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const matchedCategory = categoryItems.find((category) => category._id === catagories);
    if (matchedCategory) {
      setCategoryName(matchedCategory.category);
    }
  }, [catagories, categoryItems]);
  return (
    <>
      <CustomCard className="item commonCard">
        <figure>
          <img src={image ? `data:${imageType};base64,${image}` : `${assets.noImage}`} alt="" />
          <Typography variant="h4" className="cardCatagories">
            {categoryName}
          </Typography>
        </figure>
        <Box className="cardContent">
          <Typography variant="h3">{title}</Typography>
          {description ? <Box className="latestContent" dangerouslySetInnerHTML={{ __html: description.trim().split(" ").slice(0, 20).join(" ") }}></Box> : null}
          <Box className="commentSection">
            <p>
              <span>{createDate}</span> | <span>6 min read</span>
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
  imageType: PropTypes.string,
  catagories: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  createDate: PropTypes.string,
};
