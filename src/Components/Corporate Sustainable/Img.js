import React from "react";
import "./CorporateSustainable.css";
function Img(props) {
  return (
    <div>
      <figure>
        <img src={props.url} alt="" className="" />
        <figcaption className="">{props.caption}</figcaption>
      </figure>
    </div>
  );
}

export default Img;
