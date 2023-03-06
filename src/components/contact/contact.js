import React from "react";
import "./contact.scss";
import "../../styles/config.scss";

const Contact = () => {
  return (
    <section className="contact" id="kontakt">
        <div className="small--width">
            <h2 className="contact__header header header--medium standard--center">KONTAKTIERE UNS</h2>
            <form className="contact__form standard--center rounded-cor info-wrapper">
                <div className="input--standard">
                    <label for="fname">Vorname</label>
                    <input className="input--small" type="text" id="fname" name="fname"></input>
                </div>
                <div className="input--standard">
                    <label for="sname">Nachname</label>
                    <input className="input--small" type="text" id="sname" name="sname"></input>
                </div>
                <div className="input--standard">
                    <label for="reference">Betreff</label>
                    <input className="input--small" type="text" id="reference" name="reference"></input>
                </div>
                <div className="input--standard">
                    <label for="message">Nachricht</label>
                    <input className="input--big" type="text" id="message" name="message"></input>
                </div>
                <button className="contact__button rounded-cor text--medium" type="submit">Senden</button>
            </form>
        </div>
    </section>
  );
}

export default Contact;