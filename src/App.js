import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar";
import Formfield from "./formfield/Formfield";
import CoolButton from "./coolbutton/CoolButton";

const App = () => {
  return (
    <div>
      <Navbar />
      <Formfield label="Name" type="text" placeholder="Name" />
      <Formfield label="Email" type="email" placeholder="Email" />
      <Formfield
        label="Password"
        type="password"
        placeholder="Please enter your Password"
      />
      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
    </div>
  );
};

export default App;
