import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { IconClose, IconMenu } from "../icons";
import logo from '../../assets/Logo.svg';
import "./mobile-navigation.css";

export default function MobileNabigation () {
    const [isOpen, setIsOpen] = useState(false);

    const toogleVisibility = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const lockedCssClass = 'scroll-locked';

        if (isOpen) {
            document.body.classList.add(lockedCssClass);
            document.documentElement.classList.add(lockedCssClass);
        } else {
            document.body.classList.remove(lockedCssClass);
            document.documentElement.classList.remove(lockedCssClass);
        }

        return () => {
            document.body.classList.remove(lockedCssClass);
            document.documentElement.classList.remove(lockedCssClass);
        }
    }, [isOpen]);

    const location = useLocation();

    useEffect(() => {
        setIsOpen(io => io && !io);
    }, [location]);

    return (
        <nav aria-label="Main Navigation" className="mobile-menu">
            <button
                id="menu-button"
                aria-expanded={String(isOpen)}
                aria-controls="menu-list"
                aria-label="Toggle navigation menu"
                className={`mobile-menu__button ${isOpen ? 'active' : ''}`}
                onClick={toogleVisibility}
            >
                <span className="mobile-menu__icon" aria-hidden="true">
                    <IconMenu />
                </span>
            </button>

            <div
                id="menu-list"
                className={`mobile-menu__container ${isOpen ? 'active' : ''}`}
                inert={!isOpen}
            >
                <div className="mobile-menu__header">
                    <Link to="/" title="Little Lemon" className="logo">
                        <img src={logo} alt="Little Lemon" />
                    </Link>

                    <button
                        className="mobile-menu__close"
                        onClick={toogleVisibility}
                    >
                        <IconClose />
                    </button>
                </div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/reserve-a-table">Reservations</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order-online">Order Online</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}