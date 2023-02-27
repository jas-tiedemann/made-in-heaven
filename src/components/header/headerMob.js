import React, { useState } from "react";
import "./header.scss";
import { HiLocationMarker } from "react-icons/hi";
import { IconContext } from "react-icons";
import { TfiClose } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";


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
          <button onClick={handleExtend} className="headerMob__nav__button">
            <IconContext.Provider value={{className: "icon--large"}} >
              <FiMenu />
            </IconContext.Provider>
          </button>
        </nav>
      </div>
    )
  } else {
    return (
      <div className="headerMob" id="start">
        <nav className="headerMob__nav">
          <button onClick={handleCollapse} className="headerMob__nav__button">
            <IconContext.Provider value={{className: "icon--large"}}>
              <TfiClose />
            </IconContext.Provider>
          </button>
          <ul className="headerMob__nav__list">
            <li className="headerMob__item">
              <a className="headerMob__link" href="#start" onClick={handleCollapse}>Start</a>
            </li>
            <li className="headerMob__item">
              <a className="headerMob__link" href="#tattoos" onClick={handleCollapse}>Tattoo-Service</a>
            </li>
            <li className="headerMob__item">
              <a className="headerMob__link" href="#piercing" onClick={handleCollapse}>Piercing-Service</a>
            </li>
            <li className="headerMob__item">
              <a className="headerMob__link" href="#kontakt" onClick={handleCollapse}>Kontakt</a>
            </li>
            <li className="headerMob__item">
              <a className="headerMob__link" href="#oeffnungszeiten" onClick={handleCollapse}>Öffnungszeiten</a>
            </li>
            <li className="headerMob__item">
              <a className="headerMob__link" href="#maps" onClick={handleCollapse}><HiLocationMarker /></a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
export default HeaderMob;