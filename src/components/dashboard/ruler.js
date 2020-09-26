import React from "react";
import Ruler from "@scena/react-ruler";
import { store, view } from "@risingstack/react-easy-state";

const Rule = (props) => {
  // create a local store (which is NOT shared between component instances)
  const pos = store({
    x: 0
  });
  const {
    types
  } = props;

  return (
    <Ruler type={types} backgroundColor="#0c1f3e" scrollPos={pos.x} />
    
  );
};

export default view(Rule);