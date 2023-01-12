import React from "react";
import './header.scss';
import headerImage from "../../assets/images/logo.png";
import { HiLocationMarker } from "react-icons/hi";

const Header = () => {
  return (
    <div className="header">
      <div className="header__image__wrapper">
        <img src={headerImage} className="header__image" alt="header__image"></img>
      </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a className="header__link" href="#start">Start</a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#zeiten">Öffnungszeiten</a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#tattoo">Tattoo-Service</a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#piercing">Piercing-Service</a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#kontakt">Kontakt</a>
            </li>
            <li className="header link-location-wrapper">
              <a className="header__link " href="#maps"><HiLocationMarker /></a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Header;