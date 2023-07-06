import React, { useState } from "react";
import close from "../../assets/vectors/close.svg";

const Artist = (props) => {

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
        <img className="artist__portrait_collapsed" src={props.imgPerson} alt="person-img"></img>
        <div className="artist__text-wrapper_collapsed">
          <p className="artist__text artist__text_collapsed header header--small">{props.name}</p>
          <p className="artist__text artist__text_collapsed">{props.position}</p>
        </div>
      </a>
    </div>
  );

  const extendedComp = (
    <div className="artist-wrapper_extended">
      <button className="artist__button rounded-cor" onClick={displayCollapsed}>
        <img className="icon--large" src={close} alt="close-button"></img>
      </button>
      <div className="artist__info-wrapper">
        <div className="artist__portrait-wrapper">
          <img className="artist__portrait_extended rounded-cor" src={props.imgPerson} alt="person-img"></img>
        </div>
        <div className="artist__text-wrapper_extended">
          <h3 className="artist__text artist__text_extended">{props.name}</h3>
          <p className="artist__text artist__text_extended">{props.pronouns}</p>
          <p className="artist__text artist__text_extended">{props.position}</p>
          <a className="artist__text artist__text_extended"  name={props.instaName} href={props.instaLink} target="_blank" rel="noreferrer">{"Instagram: "+ props.instaName}</a>
        </div>
      </div>
      <div className="artist__image-wrapper">
        {props.imgArray.map(x => {
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