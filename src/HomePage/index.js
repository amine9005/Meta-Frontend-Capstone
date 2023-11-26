import React from "react";
import "./index.scss";
import Hero from "./Hero";
import Specials from "./Specials";

const HomePage = () => {
  return (
    <div className="container">
      <Hero />
      <Specials />
    </div>
  );
};

export default HomePage;
