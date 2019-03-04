import React from 'react';
import MediaQuery from 'react-responsive';
import logo from '../../resources/svgs/name.svg';
import logoAlt from '../../resources/svgs/bryanpickeringlogoalt.svg';

function Header() {
    return (
        <header>
            <div id="name-logo">
                <MediaQuery query="(min-width: 1001px)">
                    <img src={logo} alt={mainLogoAlt}/>
                </MediaQuery>
                <MediaQuery query="(max-width: 1000px)">
                    <img src={logoAlt} alt={mainLogoAlt}/>
                </MediaQuery>
            </div>
            <MediaQuery query="(max-width: 1100px)">
                <hr/>
            </MediaQuery>
            <div id="main-nav">
                <ul>
                    <li><a className="main-nav-link" href="#about">A B O U T  <span id="word-me">M E</span></a></li>
                    <li><a className="main-nav-link" href="#skills">S K I L L S</a></li>
                    <li><a className="main-nav-link" href="#experience">E X P E R I E N C E</a></li>
                    <li><a className="main-nav-link" href="#projects">P R O J E C T S</a></li>
                    <li><a className="main-nav-link" href="#contact">C O N T A C T</a></li>
                </ul>
            </div>
        </header>
    );
}

const mainLogoAlt = "Main logo";

export default Header;