import React from "react";
import About from "./Components/About";
import Feature from "./Components/Feature";
import Header from "./Components/Header";
import aboutimage from "./images/nft-overview.png";
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
        content='Smart Swap "Limited NFTs" are a rare collection of only 2100 NFTs.

        Built on the Avalanche C-Chain, The Limited NFTs will Split 21% of the daily accumulated Smart Swap Transaction Fees. [Smart-Finance.io]
        
        Smart Finance accumulates fees from its Multi-Chain Smart Swap Dex and then equally distributes the fees directly to the NFT holders.
        
        The more you hold, the larger your share of the daily fee pool.'
      />
      <About
        image={roadmap}
        title="Roadmap"
        button="Whitepaper"
        id="roadmap"
        content="Future development to come such as Smart Bridge, LPs, Farming, Staking, Etc 
        Investing in DeFi is inherently risky! Your funds can be partially or completely lost. Please invest responsibly. Investing 101, Do not put more money than you're willing to lose.,Diversify your portfolio across several protocols and different types of crypto investments."
      />
    </div>
  );
}

export default App;
