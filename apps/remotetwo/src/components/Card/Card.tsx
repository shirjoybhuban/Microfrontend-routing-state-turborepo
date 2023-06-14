import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="cardContainer">
      <a
        href="https://www.mythrillfiction.com/the-dark-rider"
        target="_blank"
        rel="noreferrer"
      >
        <div className="card">
          <div className="wrapper">
            <img
              alt="Mythrill"
              src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
              className="cover-image"
            />
          </div>
          <img
            alt="Mythrill"
            src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
            className="title"
          />
          <img
            alt="Mythrill"
            src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
            className="character"
          />
        </div>
      </a>

      <a
        href="https://www.mythrillfiction.com/force-mage"
        target="_blank"
        rel="noreferrer"
      >
        <div className="card">
          <div className="wrapper">
            <img
              alt="Mythrill"
              src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
              className="cover-image"
            />
          </div>
          <img
            alt="Mythrill"
            src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
            className="title"
          />
          <img
            alt="Mythrill"
            src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
            className="character"
          />
        </div>
      </a>
    </div>
  );
};

export default Card;
