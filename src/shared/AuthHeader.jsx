import { Link } from "react-router-dom";
import { HeaderHolder } from "../style/HeaderStyle";
import assets from "../assets";
import { Box, Container } from "@mui/material";
import { Social } from "../json/Menu";
import { Group, Logout } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/AuthSlice";

export default function AuthHeader() {
  const { isLogin } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
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
    </>
  );
}
