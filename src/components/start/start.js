import React from "react";
import "./start.scss";
import { AiOutlineArrowDown } from "react-icons/ai";



const Start = () => {
  return (
    <div className="start">
      <div className="start__willkommen small--width">
            <h1 className="header--large">Willkommen bei Made in Heaven</h1>
            <p className="text--large">Das Made in Heaven ist ein professionelles Tattoo- und Piercingstudio. Insgesamt sind wir 6 Mädels, die für euch alles geben. Wir sind immer bemüht unsere Kunden glücklich zu machen und arbeiten mit den höchsten Standards, um dies zu gewährleisten.</p>
            <div className="start__button-termin rounded-cor">
              <a className="book-appoi" href="#tattoos">Termin buchen</a>
            </div>
        </div>
        <button className="start__button-scroll">
          <a className="start__arrow" href="#about">
            <AiOutlineArrowDown className="icon--large arrow-scroll" />
          </a>
        </button>
    </div>
  );
}

export default Start;