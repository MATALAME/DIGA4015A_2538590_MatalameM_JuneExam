import React from "react";
import { useNavigate } from "react-router-dom";
import "./DiscountComp.css";

function DiscountComp({ game, discount }) {
  const navigate = useNavigate();

  if (!game) return null;

  return (
    <div className="discount-game button" onClick={() => navigate('/deals')}>
      <div className="discount-badge">{discount}% SALE</div>
      <img
        src={game.image}
        alt={game.title}
        className="discount-game-image"
      />
    </div>
  );
}

export default DiscountComp;
