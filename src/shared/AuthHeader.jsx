import { Link } from "react-router-dom";
import { HeaderHolder } from "../style/HeaderStyle";
import assets from "../assets";
import { Box, Container } from "@mui/material";
import { Social } from "../json/Menu";
import { Group } from "@mui/icons-material";

export default function AuthHeader() {
  return (
    <>
      <header className="headerWrapper">
        <Container>
          <HeaderHolder>
            <Link to="/" className="logo">
              <img src={assets.logo} alt="" />
            </Link>
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
              <ul className="searchAbater">
                <li className="abater">
                  <Link to="/login">
                    <Group />
                  </Link>
                </li>
              </ul>
            </Box>
          </HeaderHolder>
        </Container>
      </header>
    </>
  );
}
