import React, { useState } from "react";
import img00 from "../../assets/images/tattoo-schnecke.webp";
import img01 from "../../assets/images/tattoo-blumen.webp";
import img02 from "../../assets/images/tattoo-schädel.webp";
import img03 from "../../assets/images/tattoo-waschbär.webp";
import img04 from "../../assets/images/tattoo-blumen-01.webp";
import img05 from "../../assets/images/tattoo-hirsch.webp";
import img06 from "../../assets/images/piercing-ohr.webp";

const Artist = ( {name, imgPerson, pronouns, instagram, position, imgArray} ) => {

  const [extended, setExtended] = useState(false);

  const displayComp = (extendedComp, collapsedComp) => {
      if (extended) {
          return extendedComp;
      } else {
          return collapsedComp;
      }
  }

  const displayExtended = () => {
      setExtended(true);
  }
  
  const displayCollapsed = () => {
      setExtended(false);
  }

  const collapsedComp = (
    <div className="artist-wrapper_collapsed">
      <a className="artist__link" onClick={displayExtended}>
        <img className="artist__portrait_collapsed" src={imgPerson} alt="person-img"></img>
        <p className="artist__text artist__text_collapsed text--large">{name}</p>
      </a>
    </div>
  );

  const extendedComp = (
    <div className="artist-wrapper_extended rounded-cor">
      <button onClick={displayCollapsed}>Close</button>
      <div className="artist__info-wrapper">
        <div className="artist__image-wrapper">
          <img className="artist__portrait_extended" src={imgPerson} alt="person-img"></img>
        </div>
        <div className="artist__text-wrapper">
          <h3 className="artist__text artist__text_extended">{name}</h3>
          <p className="artist__text artist__text_extended">{pronouns}</p>
          <p className="artist__text artist__text_extended">{position}</p>
          <a className="artist__text artist__text_extended"  href={instagram}>{"Instagram: "+ instagram}</a>
        </div>
      </div>
      <div className="artist__gallery-wrapper">
        <img src={img00} alt="" className="artist__image"></img>
        <img src={img01} alt="" className="artist__image"></img>
        <img src={img02} alt="" className="artist__image"></img>
        <img src={img03} alt="" className="artist__image"></img>
        <img src={img04} alt="" className="artist__image"></img>
        <img src={img05} alt="" className="artist__image"></img>
        <img src={img06} alt="" className="artist__image"></img>
        <img src={img06} alt="" className="artist__image"></img>
        <img src={img06} alt="" className="artist__image"></img>
        <img src={img06} alt="" className="artist__image"></img>
      </div>
    </div>
  );

  return(
    <article className="artist">
      {displayComp(extendedComp, collapsedComp)}  
    </article>
  ); 
}

export default Artist;