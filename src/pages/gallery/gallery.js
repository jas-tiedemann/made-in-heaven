import React from "react";
import ImageGallery from "react-image-gallery";
import img00 from "../../assets/images/gallery-image00.webp";
import img01 from "../../assets/images/gallery-image01.webp";
import img02 from "../../assets/images/gallery-image02.webp";
import img03 from "../../assets/images/gallery-image03.webp";
import img04 from "../../assets/images/gallery-image04.webp";
import img05 from "../../assets/images/gallery-image05.webp";
import img06 from "../../assets/images/gallery-image06.webp";
import img07 from "../../assets/images/gallery-image07.webp";
import img08 from "../../assets/images/gallery-image08.webp";
import img00Small from "../../assets/images/gallery-image00-small.webp";
import img01Small from "../../assets/images/gallery-image01-small.webp";
import img02Small from "../../assets/images/gallery-image02-small.webp";
import img03Small from "../../assets/images/gallery-image03-small.webp";
import img04Small from "../../assets/images/gallery-image04-small.webp";
import img05Small from "../../assets/images/gallery-image05-small.webp";
import img06Small from "../../assets/images/gallery-image06-small.webp";
import img07Small from "../../assets/images/gallery-image07-small.webp";
import img08Small from "../../assets/images/gallery-image08-small.webp";

const Gallery = () => {

    const images = [
        {original: img00, thumbnail: img00Small},
        {original: img01, thumbnail: img01Small},
        {original: img02, thumbnail: img02Small},
        {original: img03, thumbnail: img03Small},
        {original: img04, thumbnail: img04Small},
        {original: img05, thumbnail: img05Small},
        {original: img06, thumbnail: img06Small},
        {original: img07, thumbnail: img07Small},
        {original: img08, thumbnail: img08Small}
    ];

    return (
        <section className="gallery" id="gallery-comp">
            <div className="gallery__header-wrapper">
                <h3 className="header header--medium">Galerie</h3>
            </div>
            <ImageGallery className="gallery__slider" items={images} />
        </section>
    );
}

export default Gallery;