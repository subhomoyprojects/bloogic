import { Container, Typography } from "@mui/material";
import { FooterBottom } from "../style/FooterStyle";
import { Link } from "react-router-dom";

export default function AuthFooter() {
  return (
    <footer className="footerWrapper">
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
