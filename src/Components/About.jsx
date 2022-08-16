import React from "react";
function About(props) {
  return (
    <div id={props.id}>
      <div id="about">
        <div className="about-image">
          <img src={props.image} alt="" className="rounded-lg" />
        </div>
        <div className="about-text ">
          <h2>{props.title} </h2>
          <p>{props.content}</p>
          <button>{props.button} </button>
        </div>
      </div>
    </div>
  );
}
export default About;
