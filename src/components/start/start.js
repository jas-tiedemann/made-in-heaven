import React from "react";
import arrowDownScroll from "../../assets/vectors/arrow-down-scroll.svg"



const Start = () => {
  return (
    <section className="start">
      <div className="start__welcome">
            <h1 className="header--large">Willkommen bei Made in Heaven</h1>
            <p className="text text--large"> Das Made in Heaven ist ein professionelles Tattoo- und Piercingstudio. Insgesamt sind wir 6 Mädels, die für euch alles geben. Wir sind immer bemüht unsere Kundinnen und Kunden glücklich zu machen und arbeiten mit den höchsten Standards, um dies zu gewährleisten.</p>
            <div className="start__button-termin rounded-cor">
            <a className="book-appoi" href="#appointment-comp">Termin buchen</a>
            </div>
        </div>
        <button className="start__button-scroll">
          <a href="#about">
            <img src={arrowDownScroll} alt="arrow-down-scroll" className="start__icon icon--large"></img>
          </a>
        </button>
    </section>
  );
}

export default Start;