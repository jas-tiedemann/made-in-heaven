import React from "react";
import img00 from "../../assets/images/service-image00.webp";

const Service = () => {
  return (
    <section className="service" id="service-comp">
      <h2 className="service__header header header--medium">Unser Service</h2>
      <div className="service-wrapper">
        <div className="service__text">
          <article className="service__article_piercing"> 
          <h3 className="header--small">Kunst auf deinem Körper</h3>
          <p className="text">
            Lass uns dein individuelles Tattoo entwickeln. Du teilst uns deine Wünsche mit und wir schauen, was wir daraus machen können. Wir wissen, dass es in Osnabrück und Umgebung eine große Auswahl an Studios gibt. Aber Made in Heaven gibt es nur ein Mal! Wir freuen uns über dein Vertrauen und werden ein einzigartiges Tattoo für dich entwickeln.
          </p>
          </article>
          
          <article className="service__article_tattoo">
            <div className="service__text_tattoo">
              <h3 className="header--small">Komm in den Piercinghimmel</h3>
              <p className="text">
                Wir denken an dich! Bei uns bekommst du die wahrscheinlich ehrlichste Piercingberatung, die man sich nur wünschen kann. Uns geht es nicht nur darum DIR deinen Wunsch zu erfüllen, wir werden dir auch ehrlich von Piercings abraten, wenn sie zu gefährlich sind, deine Anatomie nicht passt oder wenn du unsere Meinung wissen möchtest, ob dir das Piercing steht oder nicht. Wir klären DICH zu 100% auf, damit du gut vorbereitet bist, dich gut um dein Piercing zu kümmern. Du darfst uns auch immer mit deinen Fragen löchern.
              </p>
              <p className="text">
                Wir lassen dich nicht im Stich! Du kannst uns bei Notfällen oder auch bei kleineren Fragen immer erreichen. 
              </p>
            </div>
            <img className="service__img" src={img00} alt="service-face"></img>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Service;