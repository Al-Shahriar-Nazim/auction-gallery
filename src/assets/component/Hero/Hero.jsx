import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage:
            "url('./assets/Banner-min.jpg')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className=" text-neutral-content">
          <div className="text-center">
            <h1 className="mb-5 text-5xl font-bold"> Bid on Unique Items from <br /> Around the World</h1>
            <p className="mb-5 w-[]">
           Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions 
            </p>
            <button className="btn bg-[Explore Auctions]">Explore Auctions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
