import React from "react";
import "./header.scss";
import headerImage from "../../assets/images/logo.png";
import { HiLocationMarker } from "react-icons/hi";

const HeaderDesk = () => {
  return (
    <div className="headerDesk" id="start">
      <div className="headerDesk__image-wrapper">
        <img src={headerImage} className="headerDesk__image" alt="headerDesk__image"></img>
      </div>
        <nav className="headerDesk__nav">
          <ul className="headerDesk__list">
            <li className="headerDesk__item">
              <a className="headerDesk__link" href="#start">Start</a>
            </li>
            <li className="headerDesk__item">
              <a className="headerDesk__link" href="#about">Über uns</a>
            </li>
            <li className="headerDesk__item">
              <a className="headerDesk__link" href="#gallery-comp">Galerie</a>
            </li>
            <li className="headerDesk__item">
              <a className="headerDesk__link" href="#service-comp">Service</a>
            </li>
            <li className="headerDesk__item">
              <a className="headerDesk__link" href="#appointment-comp">Termin buchen</a>
            </li>
            <li className="headerDesk__item">
              <a className="headerDesk__link" href="#opening-hours">Öffnungszeiten</a>
            </li>
            <li className="headerDesk__item">
              <a className="headerDesk__link" href="https://maps.google.com/?cid=17786562329460158763" rel="noopener" target="_blank"><HiLocationMarker /></a>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default HeaderDesk;