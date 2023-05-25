import React from "react";

const Opening = () => {
  return (
    <section className="opening" id="opening-hours">
        <h2 className="header--medium">Öffnungszeiten</h2>
        <p className="header--small">Meldet euch!</p>
        <div className="opening__wrapper">
            <p className="opening__time text">Mo. - Fr.: 12:00 - 17:00 Uhr</p>
            <p className="opening__time text">Sa.: 12:00 - 15:00 Uhr</p>
        </div>
        <p className="opening__time">Nach Vereinbarung auch Termine vor der regulären Öffnungszeit möglich</p>
    </section>
  );
}

export default Opening;