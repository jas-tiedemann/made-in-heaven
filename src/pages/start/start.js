import React from "react";
import Button from "../../components/button/button";

const Start = () => {
  return (
    <section className="start" id="start-comp">
      <div className="start__welcome">
        <h1 className="header header--large">Willkommen bei Made in Heaven</h1>
        <p className="text text--large">Das Made in Heaven ist ein professionelles Tattoo- und Piercingstudio aus Osnabrück. Wir sind ein 8-köpfiges Team, was bereit ist, alles für euch zu geben. Wir sind immer bemüht unsere Kundinnen und Kunden glücklich zu machen und arbeiten mit den höchsten Standards, um dies zu gewährleisten.</p>
        <Button link={"#appointment-comp"} text={"Termin buchen"} />
      </div>
    </section>
  );
}

export default Start;