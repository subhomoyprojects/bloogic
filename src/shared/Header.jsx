import { Link } from "react-router-dom";
import { HeaderHolder, LatestPost } from "../style/HeaderStyle";
import assets from "../assets";
import { Box, Button, Container, IconButton } from "@mui/material";
import { Navigation, Social } from "../json/Menu";
import { useState } from "react";
import { ArrowDropDown, ArrowDropUp, Group, Search } from "@mui/icons-material";

export default function Header() {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <>
      <header className="headerWrapper">
        <Container>
          <HeaderHolder>
            <Link to="/" className="logo">
              <img src={assets.logo} alt="" />
            </Link>
            <nav className="navigationHolder">
              <ul>
                {Navigation.map((item) => (
                  <li key={item.id} className={item.subLink && subMenu ? "subMenu active" : "subMenu"}>
                    {item.subLink ? (
                      <Button onClick={() => setSubMenu(!subMenu)} variant="text">
                        {item.label} {subMenu ? <ArrowDropUp /> : <ArrowDropDown />}
                      </Button>
                    ) : (
                      <Link to={item.link}>{item.label}</Link>
                    )}
                    {item.subLink && (
                      <ul className="subLink">
                        {item.subLink.map((subItem) => (
                          <li key={subItem.id}>
                            <Link to={subItem.link}>{subItem.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
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
                <li>
                  <IconButton aria-label="search">
                    <Search />
                  </IconButton>
                </li>
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
      <LatestPost>
        <Container>
          <span>Latest Post:</span>{" "}
          <p>
            <strong>10 Best Podcast Tips For Beginners 2024 </strong>
          </p>
        </Container>
      </LatestPost>
    </>
  );
}
