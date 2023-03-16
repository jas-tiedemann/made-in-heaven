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
              <a className="headerDesk__link" href="#ueber">Über uns</a>
            </li>
            <li className="headerDesk__item">
              <a className="headerDesk__link" href="#tattoos">Tattoos</a>
            </li>
            <li className="headerDesk__item">
              <a className="headerDesk__link" href="#piercings">Piercings</a>
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