import React from "react";

function FeatureBox(props) {
  return (
    <div className="a-box">
      <div className="a-b-img p-4">
        <img src={props.image} className="rounded-lg" />
      </div>
      <div className="s-b-text">
        <h2> {props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}
export default FeatureBox;
