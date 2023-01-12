import React from "react";
import "./tattoo.scss";
import imgSchnecke from "../../assets/images/tattoo-schnecke.jpg";
import imgWaschbär from "../../assets/images/tattoo-waschbär.jpg";
import imgSchädel from "../../assets/images/tattoo-schädel.jpg";
import imgBlumen from "../../assets/images/tattoo-blumen.jpg";

const Tattoo = () => {
  return (
    <div className="tattoo">
        <h2 className="tattoo__header">Wer wir sind und was dich erwartet</h2>
        <div className="tattoo__row">
            <div className="tattoo__text__wrapper">
                <h3 className="tattoo__text__header">WIR MACHEN DEINE WÜNSCHE WAHR!</h3>
                <h4>Liebe deine Tattoos</h4>
                <p className="tattoo__text__paragraph">
                    Das Made in Heaven ist ein professionelles Tattoo- und Piercingstudio. Insgesamt sind wir 6 Mädels, die für euch alles geben. 
                    Wir sind immer bemüht unsere Kunden glücklich zu machen und arbeiten mit den höchsten Standards, um dies zu Gewährleisten.
                    Wir nehmen uns gerne die Zeit, die DU brauchst. Wie wir so gerne sagen, „Alles in deinem Tempo“. Egal ob dein erstes Tattoo oder Piercing oder dein 10tes, wir passen darauf auf, dass DU dich wohlfühlst. Und wenn dir irgendwas zu schnell oder zu undeutlich ist, sprich uns an, wir hören DIR zu. Aber auch wenn du beim Termin nicht groß mit uns reden möchtest, sag uns das, wir wollen den Aufenthalt so angenehm wie möglich machen. 
                    Wir sind ein Safespace für jeden.
                </p>
                <p className="tattoo__text__paragraph">
                    Dazu sind wir noch ganz spaßige Zeitgenossen, sodass der Aufenthalt bei uns auch nicht zu langweilig wird.
                </p>
            </div>
            <div className="tattoo__image__wrapper -upper">
                <img src={imgSchnecke} alt="img-schnecke" className="tattoo__image"></img>
                <img src={imgWaschbär} alt="img-schnecke" className="tattoo__image"></img>
            </div>
        </div>
        <div className="tattoo__row">
            <div className="tattoo__image__wrapper -lower">
                <img src={imgSchädel} alt="img-schädel" className="tattoo__image"></img>
                <img src={imgBlumen} alt="img-blumen" className="tattoo__image"></img>
            </div>
            <div className="tattoo__text__wrapper">
                <h3 className="tattoo__text__header">DEINE IDEEN</h3>
                <h4>Kunst auf deinem Körper</h4>
                <p className="tattoo__text__paragraph">
                    Lass uns dein individuelles Tattoo entwickeln. Du teilst uns deine Wünsche mit und wir schauen, was wir daraus machen können. Wir wissen, dass es in Osnabrück und Umgebung eine große Auswahl an Studios gibt. Aber Made in Heaven gibt es nur ein Mal! Wir freuen uns über dein Vertrauen und werden ein einzigartiges Tattoo für dich entwickeln.
                </p>
                <p className="tattoo__text__paragraph">
                    Wir freuen uns auf dich!
                </p>
                <p className="tattoo__text__paragraph">
                    Euer Made in Heaven Team
                </p>
            </div>
        </div>
    </div>
  )
}

export default Tattoo;