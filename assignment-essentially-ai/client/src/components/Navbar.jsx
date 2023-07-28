import React from 'react';
import Logo from '../img/logo.png';
import '../css/Navbar.css';
const Navbar = () => {
    return (
        <div data-scroll-section>
            <nav className="navbar">
                <button className="navbar__img">
                    <img src={Logo} alt="logo" />
                </button>

                <ul className="navbar__items">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="https://github.com/ayush1337">Github →</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
