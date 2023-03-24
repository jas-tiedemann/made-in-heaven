import React from "react";
import "./appointment.scss";

const Appointment = () => {
  return (
    <section className="appointment" id="appointment-comp">
        <h2 className="appointment__header header--medium">Termin vereinbaren</h2>
        <p className="appointment__text text--medium">Du hast Interesse? Dann kannst du hier deinen Termin ausmachen</p>
        <iframe className="appointment__iframe rounded-cor" src="https://calendar.google.com/calendar/embed?src=gamepro62%40gmail.com&ctz=Europe%2FAmsterdam" scrolling="no"></iframe>
    </section>
  );
}

export default Appointment;