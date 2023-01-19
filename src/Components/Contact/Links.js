import React from "react";

function Links(props) {
  return (
    <div className="col-lg-6 d-flex">
      <i className={props.class}></i> {"  "}
      <p className="para LinkPara">{props.text}</p>
    </div>
  );
}

export default Links;
