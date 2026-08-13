import { Link } from "react-router";
import Navigation from '../Navigation/Navigation';
import logo from '../../assets/Logo.svg';
import "./header.css";

export default function Header () {
  return (
    <header className="main-header">
      <div className="container">
        <Link to="/" title="Little Lemon" className="logo">
          <img src={logo} alt="Little Lemon" />
        </Link>
        <Navigation className="main-navigation" />
      </div>
    </header>
  );
}