import { Link } from "react-router-dom";
import { HeaderHolder, LatestPost } from "../style/HeaderStyle";
import assets from "../assets";
import { Box, Button, Container, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Navigation, Social } from "../json/Menu";
import { useState } from "react";
import { ArrowDropDown, ArrowDropUp, Group, Logout, Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/AuthSlice";
import { CustomInputHolder } from "../style/CustomInputStyle";
import { debounce } from "lodash";
import CommonCardTwoComponent from "../components/CommonCardTwoComponent";

export default function Header() {
  const [subMenu, setSubMenu] = useState(false);
  const [viewSearch, setViewSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOutput, setSearchOutput] = useState([]);

  const { isLogin } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();

  const searchItemFunction = async (value) => {
    try {
      let url = `https://restapinodejs.onrender.com/api/search/${value}`;
      const response = await fetch(url);
      const data = await response.json();
      setSearchOutput(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const debouncedSearchItemFunction = debounce(searchItemFunction, 1000);

  console.log(searchOutput);

  return (
    <>
      <header className="headerWrapper">
        <Container maxWidth="xl">
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
                  <IconButton aria-label="search" onClick={() => setViewSearch((value) => !value)}>
                    <Search />
                  </IconButton>
                  <Box className={`searchFieldHolder ${viewSearch ? "active" : ""}`}>
                    <CustomInputHolder variant="outlined">
                      <InputLabel>Search</InputLabel>
                      <OutlinedInput
                        type="search"
                        label="Search"
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          debouncedSearchItemFunction(e.target.value);
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <Search />
                          </InputAdornment>
                        }
                      />
                    </CustomInputHolder>
                    <Box className="searchResultShow">{Array.isArray(searchOutput) && searchOutput.map((item) => <CommonCardTwoComponent key={item._id} id={item._id} className="latestArticlesItem" title={item.title} description={item.postText} category={item.category} image={item.photo.data.data} imageType={item.photo.contentType} date={item.createdAt} dataType={item.photo.data.type} wholeItem={item} />)}</Box>
                  </Box>
                </li>
                <li className="abater">
                  {isLogin ? (
                    <button
                      type="button"
                      onClick={() => {
                        dispatch(logout());
                      }}
                    >
                      <Logout />
                    </button>
                  ) : (
                    <Link to="/login">
                      <Group />
                    </Link>
                  )}
                </li>
              </ul>
            </Box>
          </HeaderHolder>
        </Container>
      </header>
      <LatestPost>
        <Container maxWidth="xl">
          <span>Latest Post:</span>
          <p>
            <strong>10 Best Podcast Tips For Beginners 2024 </strong>
          </p>
        </Container>
      </LatestPost>
    </>
  );
}
