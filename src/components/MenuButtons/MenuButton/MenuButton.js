import React from "react";

const menuButton = (props) => (
  <button onClick={props.click} className="">
    {props.children}
  </button>
);

export default menuButton;
