import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage from "../images/giveaway.png";
import featureimage1 from "../images/fees.png";
import featureimage2 from "../images/smart-swap.png";
function Feature() {
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox image={featureimage} title="GIVEAWAYS" />
        <FeatureBox image={featureimage1} title="FEES STRUCTURE" />
        <FeatureBox image={featureimage2} title="SMART SWAP" />
      </div>
    </div>
  );
}
export default Feature;
