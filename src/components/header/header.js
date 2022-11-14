import React from 'react';
import './header.css';
import headerImage from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header__main">
        <div className="header__image__wrapper">
            <img src={headerImage} className="header__image" alt="header__image"></img>
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__list__item">
              <a className="header__list__item__link" href="#">Start</a>
            </li>
            <li className="header__list__item">
              <a className="header__list__item__link" href="#">Öffnungszeiten</a>
            </li>
            <li className="header__list__item">
              <a className="header__list__item__link" href="#">Tattoo-Service</a>
            </li>
            <li className="header__list__item">
              <a className="header__list__item__link" href="#">Piercing-Service</a>
            </li>
            <li className="header__list__item">
              <a className="header__list__item__link" href="#">Kontakt</a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Header;