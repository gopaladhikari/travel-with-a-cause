import React from "react";

function Btn(props) {
  return (
    <>
      <div className="m-2">
        <button className="btn contactBtn">{props.text}</button>
      </div>
    </>
  );
}

export default Btn;
