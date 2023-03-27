import React from "react";
import "./opening.scss";

const Opening = () => {
  return (
    <div className="opening" id="opening-hours">
        <h2 className="header--medium">Öffnungszeiten</h2>
        <p className="header--small">Meldet euch!</p>
        <div className="opening__wrapper">
            <p className="opening__time text--medium">Mo. - Fr.: 12:00 - 17:00 Uhr</p>
            <p className="opening__time text--medium">Sa.: 12:00 - 14:00 Uhr</p>
        </div>
        <p className="opening__time text--small">Nach Vereinbarung auch Termine vor der regulären Öffnungszeit möglich</p>
    </div>
  );
}

export default Opening;