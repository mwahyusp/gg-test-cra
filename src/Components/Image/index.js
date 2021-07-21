import React from "react";

function index(props) {
  return (
    <div className="gambar">
      <img
        src={props.img}
        alt={props.title}
        title={props.title}
      />
      <p>{props.title}</p>
    </div>
  );
}

export default index;
