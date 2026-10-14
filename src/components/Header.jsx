import { Link } from "react-router-dom";
import myImage from "../assets/kitty_logo2.jpeg";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home">
        <img
          src={myImage}
          alt="Little Darlin' logo"
          className="header-image"
        />

        <div className="brand-text">
          <h1>Little Darlin’</h1>
          <p>Boots, bows, and baby snuggles. ♡</p>
        </div>
      </a>

      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/our-story">Our Story</Link>
        <Link to="/registry">Registry</Link>
        <Link to="/contact" className="nav-button">
        Get in touch ↗
        </Link>
      </nav>
    </header>
  );
}

export default Header;

