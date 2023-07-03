import React from "react";

const Button = (props) => {
  return (
    <div className="button rounded-cor">
        <a className="button__anchor" href={props.link}>{props.text}</a>
    </div>
  );
}

export default Button;