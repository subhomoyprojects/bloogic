import { Box, Container, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { FooterBottom, FooterTop } from "../style/FooterStyle";
import { Link } from "react-router-dom";
import assets from "../assets";
import CommonHeaderComponent from "../components/CommonHeaderComponent";
import { Navigation, Social } from "../json/Menu";
import { Send } from "@mui/icons-material";
import { CustomInputHolder } from "../style/CustomInputStyle";

export default function Footer() {
  return (
    <footer className="footerWrapper">
      <FooterTop>
        <Container>
          <Grid container spacing={5}>
            <Grid item sm={12} md={4}>
              <h1>
                <img src={assets.logo} alt="Bloggic" />
              </h1>
              <Typography variant="body1">Bloggic is a guest post platform where we bring daily fresh and premium content (such as news, magazine, personal blog, etc.) for you. You can also contribute here.</Typography>
            </Grid>
            <Grid item sm={6} md={3}>
              <CommonHeaderComponent variant="h4" title="Quick Links" />
              <ul className="quickLinks">
                {Navigation.map((item) =>
                  item.subLink && Array.isArray(item.subLink)
                    ? item.subLink.map((subItem) => (
                        <li key={subItem.id || subItem.label}>
                          <Link to={subItem.link}>{subItem.label}</Link>
                        </li>
                      ))
                    : null
                )}
              </ul>
            </Grid>
            <Grid item sm={6} md={5}>
              <CommonHeaderComponent variant="h4" title="Subscribe Us For More Updates" />
              <Box>
                <CustomInputHolder variant="outlined" className="footerInputHolder">
                  <InputLabel htmlFor="outlined-adornment-password">Enter Your Email</InputLabel>
                  <OutlinedInput
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="submit" edge="end">
                          <Send />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Enter Your Email"
                  />
                </CustomInputHolder>
              </Box>
              <Box className="mt-20">
                <CommonHeaderComponent variant="h4" title="Follow us" />
                <Box className="socialHolder">
                  <ul>
                    {Social.map((item, index) => (
                      <li key={index * 4}>
                        <a href={item.link} target="_blank" rel="noreferrer noopener">
                          <img src={item.img} alt="" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </FooterTop>
      <FooterBottom>
        <Container>
          <ul>
            <li>
              <Typography variant="body1">
                Copyright &copy; 2023 <Link to="/">Bloggic.</Link> All Rights Reserved.
              </Typography>
            </li>
            <li>
              <Link to="/terms-and-condition">Terms and Conditions</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </Container>
      </FooterBottom>
    </footer>
  );
}
