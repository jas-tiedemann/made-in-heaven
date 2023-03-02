import React from "react";
import "./zeiten.scss";

const Zeiten = () => {
  return (
    <div className="zeiten" id="oeffnungszeiten">
        <div className="zeiten__info standard--width info-wrapper rounded-cor">
            <div className="zeiten__bgimg">
                <h2 className="zeiten__header header--medium">Öffnungszeiten</h2>
            </div>
            <div className="zeiten__list">
                <p className="header--small">Meldet euch!</p>
                <div className="zeiten__wrapper">
                    <p className="zeiten__time text--medium">Mo. - Fr.: 12:00 - 17:00 Uhr</p>
                    <p className="zeiten__time text--medium">Sa.: 12:00 - 14:00 Uhr</p>
                </div>
                <p className="zeiten__time text--small">Nach Vereinbarung auch Termine vor der regulären Öffnungszeit möglich.</p>
            </div>
        </div>
    </div>
  );
}

export default Zeiten;