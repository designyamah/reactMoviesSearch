import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/LOGO.png";

function Navbar() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="log" />
        <h2>MOV search</h2>
      </div>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/findmovie"}>Find Movie</NavLink>
        <Link to={"mailto:thismanthisman619@gmail.com"} className="btn-contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
