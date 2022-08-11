import React from "react";
import About from "./Components/About";
import Feature from "./Components/Feature";
import Header from "./Components/Header";
import aboutimage from "./images/nft-drop.png";
import roadmap from "./images/roadmap.png";
import nftDropDate from "./images/nft-date.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About
        image={aboutimage}
        title="NFT DROP"
        button="Collection"
        id="collection"
      />
      <About image={roadmap} title="Roadmap" button="Whitepaper" id="roadmap" />
    </div>
  );
}

export default App;
