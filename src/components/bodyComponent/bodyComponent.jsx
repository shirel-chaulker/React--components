import React from "react";
import { DynamicImg } from "../cardComponent/dynamicImg";
import deadpool from "../image/iron-man.jpg";
import batman from "../image/bat-man.jpg";
import spiderman from "../image/spider-man.jpg";
import "./body.css";

export const BodyComponent = () => {
  return (
    <div className="main1">
      <DynamicImg
        img={deadpool}
        title={"Lorem ipsum dolor sit"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quisquam aperiam quos?"
        }
      ></DynamicImg>
      <DynamicImg
        img={batman}
        title={"Lorem ipsum dolor sit"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quisquam aperiam quos?"
        }
      ></DynamicImg>
      <DynamicImg
        img={spiderman}
        title={"Lorem ipsum dolor sit"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quisquam aperiam quos?"
        }
      ></DynamicImg>
    </div>
  );
};
