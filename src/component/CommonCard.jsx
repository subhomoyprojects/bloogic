import { Box, IconButton, Typography } from "@mui/material";
import assets from "../assets";
import { Textsms, Visibility } from "@mui/icons-material";
export default function CommonCard() {
  return (
    <>
      <Box className="item commonCard">
        <figure>
          <img src={assets.podcast} alt="" />
          <Typography variant="h4" className="cardCatagories">
            Marketing
          </Typography>
        </figure>
        <Box className="cardContent">
          <Typography variant="h3">10 Best Podcast Tips For Beginners 2024</Typography>
          <Typography variant="body1">Successful podcast tips for beginners are a long game if you want to start a podcast in 2024. Today&</Typography>
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
      </Box>
    </>
  );
}
