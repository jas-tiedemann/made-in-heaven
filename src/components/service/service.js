import React from "react";
import "./service.scss";
import img00 from "../../assets/images/piercing-gesicht-mb.jpg";

const Service = () => {
    return (
      <section className="service" id="service-comp">
        <h2 className="service__header header--medium">Unser Service</h2>
        <div className="service-wrapper">
          <div className="service__text">
              <h3 className="header--small">Kunst auf deinem Körper</h3>
              <p className="text--medium">
                  Lass uns dein individuelles Tattoo entwickeln. Du teilst uns deine Wünsche mit und wir schauen, was wir daraus machen können. Wir wissen, dass es in Osnabrück und Umgebung eine große Auswahl an Studios gibt. Aber Made in Heaven gibt es nur ein Mal! Wir freuen uns über dein Vertrauen und werden ein einzigartiges Tattoo für dich entwickeln.
              </p>
            <h3 className="header--small">Komm in den Piercinghimmel</h3>
            <p className="text--medium">
              Wir denken an dich! Bei uns bekommst du die wahrscheinlich ehrlichste Piercingberatung, die man sich nur wünschen kann. Uns geht es nicht nur darum DIR deinen Wunsch zu erfüllen, wir werden dir auch ehrlich von Piercings abraten, wenn sie zu gefährlich sind, deine Anatomie nicht passt oder wenn du unsere Meinung wissen möchtest, ob dir das Piercing steht oder nicht. Wir klären DICH zu 100% auf, damit du gut vorbereitet bist, dich gut um dein Piercing zu kümmern. Du darfst uns auch immer mit deinen Fragen löchern.
            </p>
            <p className="text--medium">
              Wir lassen dich nicht im Stich! Du kannst uns bei Notfällen oder auch bei kleineren Fragen immer erreichen. 
            </p>
          </div>
          <img className="service__img" src={img00} alt="service-face"></img>
        </div>
      </section>
    );
  }

export default Service;