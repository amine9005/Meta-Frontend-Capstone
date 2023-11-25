import React from "react";
import Restaurant from "../Assets/imgs/restauranfood.jpg";
import "./index.scss";

const HomePage = () => {
  return (
    <div className="container">
      <div className="background-top"></div>
      <div className="container-hero-section">
        <div className="container-text">
          <h2>Little Lemon</h2>
          <h4>Chicago</h4>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="reserve-btn">Reserve a Table</button>
        </div>
        <img className="main-img" src={Restaurant} alt="Main" />
      </div>
    </div>
  );
};

export default HomePage;
