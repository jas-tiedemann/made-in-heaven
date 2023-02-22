import React from "react";
import "./zeiten.scss";

const Zeiten = () => {
  return (
    <div className="zeiten" id="oeffnungszeiten">
        <div className="zeiten__willkommen">
            <h1 className="zeiten__header header--large">WILLKOMMEN BEI MADE IN HEAVEN</h1>
            <button className="zeiten__button --btn-large"><a className="zeiten__anchor anchor--small" href="#tattoos">Mehr erfahren</a></button>
        </div>
        <div className="zeiten__info">
            <div className="zeiten__bgimg">
                <h2 className="zeiten__header header--medium">Öffnungszeiten</h2>
            </div>
            <div className="zeiten__list">
                <h3 className="header--small">Meldet euch!</h3>
                <div className="zeiten__wrapper">
                    <p className="zeiten__time text--medium">Mo. - Fr.: 12:00 - 17:00 Uhr</p>
                    <p className="zeiten__time text--medium">Sa.: 12:00 - 14:00 Uhr</p>
                </div>
                <p className="text--small">Nach Vereinbarung auch Termine vor der regulären Öffnungszeit möglich.</p>
            </div>
        </div>
    </div>
  );
}

export default Zeiten;