import "bulma/css/bulma.css";
import React from "react";

const CoolButton = (props) => {
  let look = "button ";
  if (props.isSmall) {
    look += "is-small ";
  }
  if (props.isDanger) {
    look += "is-danger ";
  }
  if (props.className) {
    look += props.className;
  }

  console.log(props.children);
  console.log(props.isSmall);
  console.log(props.className);
  return (
    <div>
      <button className={look}>{props.children}</button>
    </div>
  );
};

export default CoolButton;
