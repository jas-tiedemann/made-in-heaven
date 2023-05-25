import React, { useState } from "react";
import close from "../../assets/vectors/close.svg";

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
      <a className="artist__link" href="#artist" onClick={displayExtended}>
        <img className="artist__portrait_collapsed" src={imgPerson} alt="person-img"></img>
        <p className="artist__text artist__text_collapsed  header--medium">{name}</p>
      </a>
    </div>
  );

  const extendedComp = (
    <div className="artist-wrapper_extended">
      <button className="artist__button rounded-cor" onClick={displayCollapsed}><img className="icon--large" src={close} alt="close-button"></img></button>
      <div className="artist__info-wrapper">
        <div className="artist__portrait-wrapper">
          <img className="artist__portrait_extended rounded-cor" src={imgPerson} alt="person-img"></img>
        </div>
        <div className="artist__text-wrapper">
          <h3 className="artist__text artist__text_extended">{name}</h3>
          <p className="artist__text artist__text_extended">{pronouns}</p>
          <p className="artist__text artist__text_extended">{position}</p>
          <a className="artist__text artist__text_extended"  href={instagram}>{"Instagram: "+ instagram}</a>
        </div>
      </div>
      <div className="artist__image-wrapper">
        {imgArray.map(x => {
          return (
            <img src={x} alt="" className="artist__image"></img>
          );
        })}
      </div>
    </div>
  );

  return(
    <article className="artist rounded-cor">
      {displayComp(extendedComp, collapsedComp)}
    </article>
  );
}

export default Artist;