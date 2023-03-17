import React, { useState } from "react";
import "./header.scss";
import headerImage from "../../assets/images/logo.png";
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
          <button onClick={handleExtend} className="headerMob__button headerMob__button--collapsed">
            <IconContext.Provider value={{className: "icon--medium"}} >
              <FiMenu />
            </IconContext.Provider>
          </button>
          <img src={headerImage} className="headerMob__image" alt="headerMob__image"></img>
        </nav>
      </div>
    )
  } else {
    return (
      <div className="headerMob" id="start">
        <nav className="headerMob__nav">
          <button onClick={handleCollapse} className="headerMob__button">
            <IconContext.Provider value={{className: "icon--medium"}}>
              <TfiClose />
            </IconContext.Provider>
          </button>
          <ul className="headerMob__list">
            <li className="headerMob__item">
              <a className="headerMob__link" href="#start" onClick={handleCollapse}>Start</a>
            </li>
            <li className="headerMob__item">
              <a className="headerMob__link" href="#ueber" onClick={handleCollapse}>Über uns</a>
            </li>
            <li className="headerMob__item">
              <a className="headerMob__link" href="#gallery-comp" onClick={handleCollapse}>Galerie</a>
            </li>
            <li className="headerMob__item">
              <a className="headerMob__link" href="#piercings" onClick={handleCollapse}>Piercings</a>
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