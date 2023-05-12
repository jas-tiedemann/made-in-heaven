import React from "react";
import headerImage from "../../assets/images/logo-small.webp";
import location from "../../assets/vectors/location.svg";

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
              <a className="headerDesk__link" href="#team">Team</a>
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
              <a className="headerDesk__link" href="https://maps.google.com/?cid=17786562329460158763" rel="noreferrer" target="_blank"><img src={location} alt="location" className="icon--medium"></img></a>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default HeaderDesk;