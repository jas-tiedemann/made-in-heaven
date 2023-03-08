import React from "react";
import "./start.scss";
import "../../styles/config.scss";


const Start = () => {
  return (
    <div className="start">
      <div className="start__willkommen">
            <h1 className="start__header header header--large standard--width">WILLKOMMEN BEI MADE IN HEAVEN</h1>
            <button className="start__button --btn-large"><a className="start__anchor anchor--small" href="#tattoos">Mehr erfahren</a></button>
        </div>
    </div>
  );
}

export default Start;