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
          <p>
            Lorem ipsum dolor sit , amet consectetur adipisicing elit .Dolore
            dolor ipsa modi perspiciatis , corporis reprehenderit sequi neque
            impedit! Labore itaque, earum quae iusto quia sapiente doloremque
            ipsa alias fugiat accusamus nostrum impedit quod repudiandae
            molestias .
          </p>
          <button>{props.button} </button>
        </div>
      </div>
    </div>
  );
}
export default About;
