import React, { useState } from "react";
import arrowUp from "../../assets/vectors/arrow-up.svg";
import arrowDown from "../../assets/vectors/arrow-down.svg";

const Footer = () => {

  const [extended, setExtended] = useState(false);

  const handleExtend = () => {
    setExtended(true);
  }

  const handleCollapse = () => {
    setExtended(false);
  }

  const displayButton = () => {
    if (extended) {
      return (
        <button onClick={handleCollapse} className="footer__button text">
          <span className="footer__icon-wrapper text">
            Impressum
          </span>
          <img src={arrowUp} alt="arrow-up" className="footer__icon icon--medium"></img>
        </button>
      );
    } else {
      return (
        <button onClick={handleExtend} className="footer__button text">
          <span className="footer__icon-wrapper text">
            Impressum
          </span>
          <img src={arrowDown} alt="arrow-down" className="footer__icon icon--medium"></img>
        </button>
      );
    }
  }

  return (
    <section className="footer">
      <div className="footer__imprint-wrapper">
        <div className="footer__collapse">
          {displayButton()}
        </div>
        <div className={extended ? "footer__imprint" : "footer__imprint_hidden"}>
          <ul className="footer__list">
            <li>Made in Heaven</li>
            <li>Katharina-Sophie Pieper</li>
            <li>Dielingerstraße 42a</li>
            <li>49074 Osnabrück</li>
            <li>Einzelunternehmer</li>
            <li><a className="footer__anchor" href="mailto:madeinheaven.pt@outlook.de">madeinheaven.pt@outlook.de</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__phone">
        <p className="footer__text text">Telefon
          <a className="footer__anchor text" href="tel:01573 6824997">: 01573 6824997</a>
        </p>
      </div>
    </section>
  );
}

export default Footer;