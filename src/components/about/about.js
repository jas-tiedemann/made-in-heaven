import React from "react";
import "./about.scss";

const About = () => {

  return (
    <section className="about" id="about">
        <h2 className="about__header header--medium">Was dich bei uns erwartet</h2>
        <p className="about__text text--medium">
            Wir nehmen uns gerne die Zeit, die DU brauchst. Wie wir so gerne sagen, „Alles in deinem Tempo“. Egal ob dein erstes Tattoo oder Piercing oder dein 10tes, wir passen darauf auf, dass DU dich wohlfühlst. Und wenn dir irgendwas zu schnell oder zu undeutlich ist, sprich uns an, wir hören DIR zu. Aber auch wenn du beim Termin nicht groß mit uns reden möchtest, sag uns das, wir wollen den Aufenthalt so angenehm wie möglich machen. 
            Wir sind ein Safespace für jeden.
        </p>
    </section>
  );
}

export default About;