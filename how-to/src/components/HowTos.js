import React from "react";

import HowToForm from "./HowToForm";
import HowToList from "./HowToList";

const HowTos = () => {
  return (
    <div className="How-Tos-wrapper">
      <h1> Add Your How To </h1>
      <HowToForm />
      <HowToList />
    </div>
  );
};

export default HowTos;
