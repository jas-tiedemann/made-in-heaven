import React from "react";
import "./piercing.scss";
import "../../styles/config.scss";
import imgPiercing from "../../assets/images/piercing-ohr.jpg";

const Piercing = () => {
  return (
    <section className="piercing standard--center" id="piercings">
      <div className="piercing__header header--medium standard--width">
        <h2 className="header--medium">DAS BESTE PIERCING</h2>
      </div>
      <div className="piercing__row standard--width info-wrapper rounded-cor">
        <div className="piercing__text">
          <h3 className="header--small">KOMM IN DEN PIERCINGHIMMEL</h3>
          <p className="text--medium">
            Wir denken an dich! Bei uns bekommst du die wahrscheinlich ehrlichste Piercingberatung, die man sich nur wünschen kann. Uns geht es nicht nur darum DIR deinen Wunsch zu erfüllen, wir werden dir auch ehrlich von Piercings abraten, wenn sie zu gefährlich sind, deine Anatomie nicht passt oder wenn du unsere Meinung wissen möchtest, ob dir das Piercing steht oder nicht. Wir klären DICH zu 100% auf, damit du gut vorbereitet bist, dich gut um dein Piercing zu kümmern. Du darfst uns auch immer mit deinen Fragen löchern.
          </p>
          <p className="text--medium">
            Wir lassen dich nicht im Stich! Du kannst uns bei Notfällen oder auch bei kleineren Fragen immer erreichen. 
          </p>
        </div>
        <img src={imgPiercing} alt="img-piercing" className="piercing--image"></img>
      </div>
    </section>
  );
}

export default Piercing;