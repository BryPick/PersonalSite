import React from "react";
import { Link } from 'react-router-dom';
import { push as Menu } from "react-burger-menu";
import Logo from '../../resources/svgs/bryanpickeringlogo.svg';

export default props => {
    return (
        <Menu {...props}>
            <a className="menu-item" href="#home">
                Home
            </a>
            <a className="menu-item" href="#about">
                About Me
            </a>
            <a className="menu-item" href="#skills">
                Skills
            </a>
            <a className="menu-item" href="#experience">
                Experience
            </a>
            <a className="menu-item" href="#projects">
                Projects
            </a>
            <a className="menu-item" href="#contact">
                Contact
            </a>
            <Link className="menu-item" to="/credits">
                Credits
            </Link>
            <div id="nav-bar-logo">
                <img src={Logo} alt="Logo"/>
            </div>
        </Menu>
    );
};