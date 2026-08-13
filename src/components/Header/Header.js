import { Link } from "react-router";
import useMatchMedia from "../../hooks/useMatchMedia";
import Navigation from '../Navigation/Navigation';
import MobileNabigation from "../Navigation/MobileNabigation";
import logo from '../../assets/Logo.svg';
import "./header.css";

export default function Header () {
  const isMobile = useMatchMedia("(max-width: 880px)");

  return (
    <header className="main-header">
      <div className="container">
        <Link to="/" title="Little Lemon" className="logo">
          <img src={logo} alt="Little Lemon" />
        </Link>
        { (typeof(isMobile) === 'boolean' && isMobile) && <MobileNabigation /> }
        { (typeof(isMobile) === 'boolean' && !isMobile) && <Navigation className="main-navigation" /> }
      </div>
    </header>
  );
}