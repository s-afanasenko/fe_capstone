import { Link } from "react-router";
import Navigation from "../Navigation/Navigation";
import { FooterFragment } from "./FooterFragment";
import { IconBluesky, IconInstagram } from "../icons";
import logo from "../../assets/Logo  (1).png";
import "./footer.css";

export default function Footer () {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col col-2">
            <Link to="/" className="main-footer__logo">
              <img src={logo} alt="Little Lemon" />
            </Link>
          </div>
          <div className="col col-10">
            <div className="row">
              <div className="col col-4 col-sm-12">
                <FooterFragment title="Doormat Navigation">
                  <Navigation className="footer-navigation" />
                </FooterFragment>
              </div>
              <div className="col col-4 col-sm-12">
                <FooterFragment title="Contact">
                  <address>
                    <p>9361 S Lawrence Ave</p>
                    <p>Chicago, Illinois(IL)</p>
                    <a href="mailto:little@lemon.com">jim@example.com</a><br />
                    <a href="tel:+14155550132">+1 (415) 555‑0132</a>
                  </address>
                </FooterFragment>
              </div>
              <div className="col col-4 col-sm-12">
                <FooterFragment title="Social Media Links">
                  <ul className="main-footer__socials">
                    <li>
                      <a href="#" title="Find Us on Bluesky">
                        <IconBluesky />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Find Us on Instagram">
                        <IconInstagram />
                      </a>
                    </li>
                  </ul>
                </FooterFragment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
