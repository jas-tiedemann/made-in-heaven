import React from "react";
import "./about.scss";
import "../../styles/config.scss";

const About = () => {

  return (
    <section className="about" id="ueber">
        <h2 className="about__header header--medium">Wer wir sind und was dich erwartet</h2>
        <div className="about__info">
            <div className="about__column">
                <h3 className="header--small standard--center">Deine Ideen</h3>
                <p className="about__text text--medium">
                    Wir nehmen uns gerne die Zeit, die DU brauchst. Wie wir so gerne sagen, „Alles in deinem Tempo“. Egal ob dein erstes Tattoo oder Piercing oder dein 10tes, wir passen darauf auf, dass DU dich wohlfühlst. Und wenn dir irgendwas zu schnell oder zu undeutlich ist, sprich uns an, wir hören DIR zu. Aber auch wenn du beim Termin nicht groß mit uns reden möchtest, sag uns das, wir wollen den Aufenthalt so angenehm wie möglich machen. 
                    Wir sind ein Safespace für jeden.
                </p>
            </div>
            <div className="about__column">
                <h3 className="header--small standard--center">Kunst auf deinem Körper</h3>
                <p className="about__text text--medium">
                    Lass uns dein individuelles Tattoo entwickeln. Du teilst uns deine Wünsche mit und wir schauen, was wir daraus machen können. Wir wissen, dass es in Osnabrück und Umgebung eine große Auswahl an Studios gibt. Aber Made in Heaven gibt es nur ein Mal! Wir freuen uns über dein Vertrauen und werden ein einzigartiges Tattoo für dich entwickeln.
                </p>
            </div>
        </div>
    </section>
  );
}

export default About;