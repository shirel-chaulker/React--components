import React from "react";
import headerPic from "../image/marvel.jpg";
import "./header.css";

export const HeaderComponet = (props) => {
  return (
    <>
      <img className="topimg" src={headerPic} alt="" />
      <h1>Lorem ipsum dolor sit</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        mollitia, doloremque similique rerum et esse fugiat aliquid pariatur
        voluptates reiciendis.
      </h5>
    </>
  );
};
