import React, { useState } from 'react';
import './style.css';
import ReactCardFlip from "react-card-flip";

const Card = ({ found, flipped, flip, id, imgUrl }) => {

  flipCard = e => {
    if (found || flipped)
      return;
    flip(e.target.id);
  };

  return (
    <div className="card">
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <div id={id}
          className="memoryCard front"
          onClick={this.flipCard}
          style={cardBack}
          key="front"
        />
        <div
          className="memoryCard"
          onClick={this.flipCard}
          key="back"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat", backgroundPosition: "center",
            backgroundColor: found ? "green" : "#3700B3",
            cursor: found ? "" : "pointer",
          }}
        >
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Card;