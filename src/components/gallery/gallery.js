import React from "react";
import "./gallery.scss";
import img00 from "../../assets/images/tattoo-schnecke.jpg";
import img01 from "../../assets/images/tattoo-blumen.jpg";
import img02 from "../../assets/images/tattoo-schädel.jpg";
import img03 from "../../assets/images/tattoo-waschbär.jpg";
import img04 from "../../assets/images/tattoo-blumen-01.jpg";
import img05 from "../../assets/images/tattoo-hirsch.jpg";
import img06 from "../../assets/images/tattoo-bein.jpg";
import img07 from "../../assets/images/tattoo-arm.jpg";
import img08 from "../../assets/images/tattoo-adler.jpg";

const Gallery = () => {
    const images = [[img00, "schnecke"], [img01, "schädel"], [img02, "waschbär"], [img03, "blumen00"], [img04, "blumen01"], [img05, "hirsch"], [img06, "arm"], [img07, "bein"], [img08, "adler"]]

    return (
        <section className="gallery" id="tattoos">
            <div className="gallery__header-wrapper standard--center">
                <h3 className="header--medium">Galerie</h3>
            </div>
            <div className="gallery__wrapper">
                {images.map((x) => {
                    return (
                        <div className="gallery__artist ">
                            <img src={x[0]} alt={x[1]} className="gallery__img"></img>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Gallery;