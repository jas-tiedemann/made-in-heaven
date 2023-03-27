import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <section className="footer standard--center">
      <div className="footer__imprint">
        <ul className="footer__list">
          <li>Made in Heaven</li>
          <li>Katharina-Sophie Pieper</li>
          <li>Dielingerstr 42a</li>
          <li>49074 Osnabrück</li>
          <li>Einzelunternehmer</li>
          <li>madeinheaven.pt@outlook.de</li>
        </ul>
      </div>
      <p className="footer__text text--medium">Telefon
        <a className="footer__anchor text--medium" href="tel:01573 6824997">: 01573 6824997</a>
      </p>
    </section>
  );
}

export default Footer;