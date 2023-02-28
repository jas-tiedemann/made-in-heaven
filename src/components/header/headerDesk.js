import React from "react";
import "./header.scss";
import headerImage from "../../assets/images/logo.png";
import { HiLocationMarker } from "react-icons/hi";

const HeaderDesk = () => {
  return (
    <div className="headerDesk" id="start">
      <div className="headerDesk__image_wrapper">
        <img src={headerImage} className="headerDesk__image" alt="headerDesk__image"></img>
      </div>
        <nav className="headerDesk__nav">
          <ul className="headerDesk__list">
            <li className="headerDesk__item">
              <a className="headerDesk__link" href="#start">Start</a>
            </li>
            <li className="headerDesk__item">
              <a className="headerDesk__link" href="#tattoos">Tattoo-Service</a>
            </li>
            <li className="headerDesk__item">
              <a className="headerDesk__link" href="#piercings">Piercing-Service</a>
            </li>
            <li className="headerDesk__item">
              <a className="headerDesk__link" href="#kontakt">Kontakt</a>
            </li>
            <li className="headerDesk__item">
              <a className="headerDesk__link" href="#oeffnungszeiten">Öffnungszeiten</a>
            </li>
            <li className="headerDesk__item">
              <a className="headerDesk__link " href="#maps"><HiLocationMarker /></a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default HeaderDesk;