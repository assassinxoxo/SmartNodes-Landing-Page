import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage from "../images/giveaway.png";
import featureimage1 from "../images/fees.png";
import featureimage2 from "../images/smart-swap.png";
function Feature() {
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox image={featureimage} title="GIVEAWAYS" content="Content" />
        <FeatureBox
          image={featureimage1}
          title="FEES STRUCTURE"
          content="The OG NFT's- 10,000 - Split 30% of EVERY Smart Swap Transaction Fee
          Limited Smart Swap NFT's- TBA - Split 21% of EVERY Smart Swap
          Transaction Fee 51% of every dollar that the Smart Swap DEX yields on
          Transaction Fees are redistributed to the community!"
        />
        <FeatureBox
          image={featureimage2}
          title="SMART SWAP"
          content="Content"
        />
      </div>
    </div>
  );
}
export default Feature;
