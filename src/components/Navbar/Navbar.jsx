import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">STAGE</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Domaines
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Partenaires
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Témoignages
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Soutenir</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
