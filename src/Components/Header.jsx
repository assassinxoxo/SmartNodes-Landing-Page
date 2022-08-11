import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import smnVideo from "../images/smn-video.mp4";
import smnVideo2 from "../images/smn-video2.mp4";

function Header() {
  const [videoURL, setVideoURL] = useState(smnVideo);
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current?.load();
  }, [videoURL]);

  const videoHandler = () => {
    console.log("video ended");
    setVideoURL(smnVideo2);
    let video = window.document.getElementById("smn-video");
    video.setAttribute("loop", true);
    console.log(videoURL);
  };
  return (
    <div id="main">
      <Navbar />
      <video
        ref={videoRef}
        autoPlay
        muted
        id="smn-video"
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
        onEnded={videoHandler}
      >
        <source src={videoURL} type="video/mp4" />
      </video>
      <div className="name">
        <h1>
          <span>Lets Make The Swaps </span>
          with confidence and creativity
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          blanditiis!
        </p>
        {/* <a href="#" className="cv-btn">
          Download
        </a> */}
      </div>
    </div>
  );
}

export default Header;
