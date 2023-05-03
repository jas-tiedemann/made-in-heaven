import React, { useState } from "react";
import headerImage from "../../assets/images/logo-small.webp";
import location from "../../assets/vectors/location.svg";
import burgerMenu from "../../assets/vectors/burger-menu.svg";
import close from "../../assets/vectors/close.svg";


const HeaderMob = () => {
  const [extended, setExtended] = useState(false);

  const handleExtend = () => {
    setExtended(true);
  }

  const handleCollapse = () => {
    setExtended(false);
  }

  if (!extended) {
    return (
      <div className="headerMob" id="start">
        <nav className="headerMob__nav">
          <button onClick={handleExtend} className="headerMob__button headerMob__button--collapsed">
              <img src={burgerMenu} alt="burger-menu" className="icon--medium"></img>
          </button>
          <img src={headerImage} className="headerMob__image" alt="headerMob__image"></img>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="headerMob" id="start">
        <nav className="headerMob__nav">
          <button onClick={handleCollapse} className="headerMob__button">
            <img src={close} alt="close" className="icon--medium"></img>
          </button>
          <ul className="headerMob__list">
            <li className="headerMob__item">
              <a className="headerMob__link" href="#start" onClick={handleCollapse}>Start</a>
            </li>
            <li className="headerMob__item">
              <a className="headerMob__link" href="#about" onClick={handleCollapse}>Über uns</a>
            </li>
            <li className="headerMob__item">
              <a className="headerMob__link" href="#gallery-comp" onClick={handleCollapse}>Galerie</a>
            </li>
            <li className="headerMob__item">
              <a className="headerMob__link" href="#service-comp" onClick={handleCollapse}>Service</a>
            </li>
            <li className="headerMob__item">
              <a className="headerMob__link" href="#appointment-comp" onClick={handleCollapse}>Termin buchen</a>
            </li>
            <li className="headerMob__item">
              <a className="headerMob__link" href="#opening-hours" onClick={handleCollapse}>Öffnungszeiten</a>
            </li>
            <li className="headerMob__item">
              <a className="headerMob__link" href="https://maps.google.com/?cid=17786562329460158763" rel="noreferrer" target="_blank" onClick={handleCollapse}><img src={location} alt="location" className="icon--medium"></img></a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default HeaderMob;