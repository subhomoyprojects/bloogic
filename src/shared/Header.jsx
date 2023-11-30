import { Link } from "react-router-dom";
import { HeaderHolder } from "../style/HeaderStyle";
import assets from "../assets";

export default function Header() {
  return (
    <>
      <header className="headerWrapper">
        <HeaderHolder>
          <Link to="/">
            <img src={assets.logo} alt="" />
          </Link>
        </HeaderHolder>
      </header>
    </>
  );
}
