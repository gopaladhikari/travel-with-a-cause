import React from "react";
import "./AboutImg.css";

function AboutImg(props) {
  return (
    <div className="col-lg-4">
      <img src={props.imgUrl} className="img-fluid about-img" />
      <h1 className="heading my-3 text-center">{props.heading}</h1>
      <div className="text-center mb-5">
        <button className="btn about-btn ">{props.btnCap}</button>
      </div>
    </div>
  );
}

export default AboutImg;
