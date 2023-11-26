import React from "react";
import bruchetta from "../../Assets/imgs/bruchetta.svg";
import GreekSalad from "../../Assets/imgs/greek salad.jpg";
import LemonDessert from "../../Assets/imgs/lemon dessert.jpg";
import { Link } from "react-router-dom";

import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const cards = [
  {
    picture: GreekSalad,
    name: "Greek salad",
    price: "$12.99",
    text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    url: "#GreekSalad",
  },
  {
    picture: bruchetta,
    name: "Bruchetta",
    price: "$5.99",
    text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    url: "#bruchetta",
  },
  {
    picture: LemonDessert,
    name: "Lemon Dessert",
    price: "$5.00",
    text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    url: "#LemonDessert",
  },
];

const Specials = () => {
  return (
    <div className="container-specials">
      <div className="double-centered">
        <h1>This Weeks Specials!</h1>
        <button className="menu-btn">Online Menu</button>
      </div>
      <div className="specials">
        {cards.map((card, index) => (
          <div className="card" key={card.url}>
            <img src={card.picture} alt={card.name} />
            <div className="content">
              <div className="double-centered">
                <h4>{card.name}</h4>
                <h4 className="price">{card.price}</h4>
              </div>
              <p>{card.text}</p>
              <Link className="link-btn" to={card.url}>
                <strong>Order Delivery</strong>{" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specials;
