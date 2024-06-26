import React, { useState } from "react";
import close from "../../assets/vectors/close.svg";

const Artist = (props) => {
  const [extended, setExtended] = useState(false);

  const displayExtended = () => {
    setExtended(true);
    document.body.style.overflow = "hidden";
  }

  const displayCollapsed = () => {
    setExtended(false);
    document.body.style.overflow = "auto";
  }

  return (
    <article className="artist rounded-cor">
      <div className="artist-wrapper_collapsed">
        <a className="artist__link" href="#artist" onClick={displayExtended}>
          <img className="artist__portrait_collapsed" src={props.imgPerson} alt="person-img"></img>
          <div className="artist__text-wrapper_collapsed">
            <p className="artist__text artist__text_collapsed header header--small">{props.name}</p>
            <p className="artist__text artist__text_collapsed">{props.position}</p>
          </div>
        </a>
      </div>
      <div className={extended ? "artist-wrapper_extended" : "artist-wrapper_extended--hidden"}>
        <button className="artist__button rounded-cor" type="button" onClick={displayCollapsed}>
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
        {extended && 
          <div className="artist__image-wrapper">
            {props.imgArray.map((x, index) => {
              return (
                <img key={index} src={x} alt="" className="artist__image"></img>
              );
            })}
          </div>
        }
      </div>
    </article>
  );
}

export default Artist;
