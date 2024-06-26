import React from "react";
import Button from "../../components/button/button";

const Appointment = () => {
  return (
    <section className="appointment" id="appointment-comp">
      <div className="appointment__background">
        <div className="appointment__header-wrapper">
          <h2 className="appointment__header header header--medium">Termin vereinbaren</h2>
        </div>
        <div className="appointment-wrapper">
          <div className="">
            <div className="appointment__sect">
              <p className="appointment__text text">Wir haben dein Interesse geweckt? Dann vereinbare doch hier ganz einfach einen Termin über unser Kalendersystem:</p>
              <div className="appointment__button-wrapper">
                <Button link="https://cp.kisscalservice.de/booking?studioDB=ks_madeinheaven&configId=1" text="Zum Kalendersystem" />
              </div>
            </div>
            <div className="appointment__sect">
              <p className="appointment__text text">Alternativ kannst du uns natürlich auch gerne per E-Mail erreichen: <a className="appointment__anchor" href="mailto:madeinheaven.pt@outlook.de">madeinheaven.pt@outlook.de</a></p>
            </div>
          </div>
          <div className="appointment__iframe-wrapper">
            <iframe className="appointment__iframe" src="https://cp.kisscalservice.de/booking?studioDB=ks_madeinheaven&configId=1" title="Calendar Service"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointment;