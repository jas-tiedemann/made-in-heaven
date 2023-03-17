import React from "react";
import "./gallery.scss";
import ImageGallery from "react-image-gallery";
import img00 from "../../assets/images/tattoo-schnecke.jpg";
import img01 from "../../assets/images/tattoo-blumen.jpg";
import img02 from "../../assets/images/tattoo-schädel.jpg";
import img03 from "../../assets/images/tattoo-waschbär.jpg";
import img04 from "../../assets/images/tattoo-blumen-01.jpg";
import img05 from "../../assets/images/tattoo-hirsch.jpg";
import img06 from "../../assets/images/piercing-ohr.jpg";

const Gallery = () => {

    const images = [
        {original: img00, thumbnail: img00},
        {original: img01, thumbnail: img01},
        {original: img02, thumbnail: img02},
        {original: img03, thumbnail: img03},
        {original: img04, thumbnail: img04},
        {original: img05, thumbnail: img05},
        {original: img06, thumbnail: img06}
    ];

    return (
        <section className="gallery" id="gallery-comp">
            <div className="gallery__header-wrapper standard--center">
                <h3 className="header--medium">Galerie</h3>
            </div>
            <ImageGallery className="gallery__slider" items={images} />
        </section>
    );
}

export default Gallery;