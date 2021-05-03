import "bulma/css/bulma.css";
import React from "react";

// JSX version
const Formfield = (props) => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input
          className="label"
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default Formfield;
