import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar";
import Formfield from "./formfield/Formfield";

const App = () => {
  return (
    <div>
      <Navbar />
      <Formfield label="Name" type="text" placeholder="Name" />
      <Formfield label="Email" type="email" placeholder="Email" />
    </div>
  );
};

export default App;
