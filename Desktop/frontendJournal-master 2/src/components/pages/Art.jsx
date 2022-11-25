// include Art, poem, photographs
import React, {Component} from "react";
import navbar from "../navbar";
import ImageOne from "./ImageOne";
import ImageThree from "./ImageThree";
import ImageTwo from "./ImageTwo";
import TextBox from "./TextBox";
import './images.css';


const Art = () => {
  return (
    <div className="mainBody">
        <navbar/>
        <ImageOne/>
        <ImageTwo/>
        <ImageThree/>
        <TextBox/>
    </div>
  )
}

export default Art
