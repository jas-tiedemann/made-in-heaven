import React from "react";
import "./tattoo.scss";
import "../../styles/config.scss";
import imgWaschbär from "../../assets/images/tattoo-waschbär.jpg";
import imgWaschbärTight from "../../assets/images/tattoo-waschbär-tight.jpg";
import imgBlumen from "../../assets/images/tattoo-blumen.jpg";
import imgBlumenTight from "../../assets/images/tattoo-blumen-tight.jpg";

const Tattoo = () => {

  return (
    <section className="tattoo standard--center" id="tattoos">
        <h2 className="header header--medium">WER WIR SIND UND WAS DICH ERWARTET</h2>
        <div className="tattoo__row standard--width info-wrapper rounded-cor">
            <div className="tattoo__text">
                <h3 className="header header--small">WIR MACHEN DEINE WÜNSCHE WAHR!</h3>
                <h4 className="header header--small">Liebe deine Tattoos</h4>
                <p className="text--medium">
                    Das Made in Heaven ist ein professionelles Tattoo- und Piercingstudio. Insgesamt sind wir 6 Mädels, die für euch alles geben. 
                    Wir sind immer bemüht unsere Kunden glücklich zu machen und arbeiten mit den höchsten Standards, um dies zu gewährleisten.
                    Wir nehmen uns gerne die Zeit, die DU brauchst. Wie wir so gerne sagen, „Alles in deinem Tempo“. Egal ob dein erstes Tattoo oder Piercing oder dein 10tes, wir passen darauf auf, dass DU dich wohlfühlst. Und wenn dir irgendwas zu schnell oder zu undeutlich ist, sprich uns an, wir hören DIR zu. Aber auch wenn du beim Termin nicht groß mit uns reden möchtest, sag uns das, wir wollen den Aufenthalt so angenehm wie möglich machen. 
                    Wir sind ein Safespace für jeden.
                </p>
                <p className="text--medium">
                    Dazu sind wir noch ganz spaßige Zeitgenossen, sodass der Aufenthalt bei uns auch nicht zu langweilig wird.
                </p>
            </div>
            <img src={imgWaschbärTight} alt="img-waschbär" className="tattoo__image"></img>
        </div>
        <div className="tattoo__row standard--width info-wrapper rounded-cor">
            <img src={imgBlumenTight} alt="img-blumen" className="tattoo__image"></img>
            <div className="tattoo__text">
                <h3 className="header header--small">DEINE IDEEN</h3>
                <h4 className="header header--small">Kunst auf deinem Körper</h4>
                <p className="text--medium">
                    Lass uns dein individuelles Tattoo entwickeln. Du teilst uns deine Wünsche mit und wir schauen, was wir daraus machen können. Wir wissen, dass es in Osnabrück und Umgebung eine große Auswahl an Studios gibt. Aber Made in Heaven gibt es nur ein Mal! Wir freuen uns über dein Vertrauen und werden ein einzigartiges Tattoo für dich entwickeln.
                </p>
                <p className="text--medium">
                    Wir freuen uns auf dich!
                </p>
                <p className="text--medium">
                    Euer Made in Heaven Team
                </p>
            </div>
        </div>
    </section>
  );
}

export default Tattoo;