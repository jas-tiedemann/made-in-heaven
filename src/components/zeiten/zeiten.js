import React from 'react'
import "./zeiten.css";

const Zeiten = () => {
  return (
    <div className="zeiten">
        <div className="zeiten__willkommen">
            <h1 className="zeiten__heading">WILLKOMMEN BEI MADE IN HEAVEN</h1>
            <p className="zeiten__paragraph">Mehr erfahren</p>
        </div>
        <div className="zeiten__info">
            <div className="zeiten__heading__wrapper">
                <h2 className="zeiten__heading">Öffnungszeiten</h2>
            </div>
            <div className="zeiten__list">
                <h3 className="zeiten__list__heading">Meldet euch!</h3>
                <div className="zeiten__time__wrapper">
                    <p className="zeiten__list__time">Mo. - Fr.: 12:00 - 17:00 Uhr</p>
                    <p className="zeiten__list__time">Sa.: 12:00 - 14:00 Uhr</p>
                </div>
                <p className="zeiten__list__paragraph">Nach Vereinbarung auch Termine vor der regulären Öffnungszeit möglich.</p>
            </div>
        </div>
    </div>
  )
}

export default Zeiten;