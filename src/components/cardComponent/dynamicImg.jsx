import React from "react";
import "./dynamic.css";

export const DynamicImg = ({ img, title, description }) => {
  return (
    <div className="main">
      <img className=" DynamicImg" src={img} alt="" />
      <div className="Data">
        <h2>{title} </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
