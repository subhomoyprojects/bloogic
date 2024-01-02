import { Box, IconButton } from "@mui/material";
import { DetailsHolder } from "../style/DetailsHolderStyle";
import CommonHeaderComponent from "./CommonHeaderComponent";
import { Textsms } from "@mui/icons-material";
import assets from "../assets";
import PropTypes from "prop-types";
import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";

export default function BlogDetailsComponent({ title, image, imageType, date, description }) {
  const [afterFormatDate, setAfterFormatDate] = useState(null);
  useEffect(() => {
    const dateToFormat = parseISO(date);
    const dateFormat = format(dateToFormat, "MMMM, dd yyyy");
    setAfterFormatDate(dateFormat);
  }, [date]);
  return (
    <>
      <DetailsHolder>
        <CommonHeaderComponent title={title} variant="h2" />
        <Box className="abaterDetails">
          <figure className="avatarHolder">
            <img src={assets.noImage} alt="" />
          </figure>
          <ul>
            <li>Author</li>
            <li>{afterFormatDate}</li>
            <li>
              <IconButton aria-label="visibility" target="_blank" href="https://api.whatsapp.com/send?text=https://www.bloggic.com/10-best-foods-for-high-blood-pressure/">
                <Textsms />
              </IconButton>
            </li>
          </ul>
        </Box>
        <figure className="mainImage">{<img src={image ? `data:${imageType};base64,${image}` : `${assets.noImage}`} alt="" />}</figure>
        <Box className="blogDetailsHolder" dangerouslySetInnerHTML={{ __html: description }}></Box>
      </DetailsHolder>
    </>
  );
}

BlogDetailsComponent.propTypes = {
  title: PropTypes.string,
  imageType: PropTypes.string,
  image: PropTypes.node,
  date: PropTypes.string,
  description: PropTypes.string,
};
