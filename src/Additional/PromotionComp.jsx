import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PromotionComp.css';

import onepunch from '../Images/OnePunchCover.jpg';
import rocket from '../Images/RocketLeagueCover.jpg';
import forza from '../Images/ForzaCover.jpg';
import overwatch from "../Images/Overwatch.jpg"

function PromotionComp() {
  const navigate = useNavigate();

  const promos = [
    {
      id: 575,
      title: 'ONE PUNCH MAN',
      description: 'A free-to-play multiplayer 3D action game from Crunchyroll Games.',
      image: onepunch,
    },
    {
      id: 474,
      title: 'ROCKET LEAGUE',
      description: 'Fast-paced arcade soccer with rocket-powered cars.',
      image: rocket,
    },
    {
      id: 121,
      title: 'FORZA MOTORSPORT',
      description: 'A MMO racing game that comes from makers of one of the most popular video game racing series ever.',
      image: forza,
    },
    {
      id: 540,
      title: 'OVERWATCH',
      description: 'A hero-focused first-person team shooter from Blizzard Entertainment.',
      image: overwatch,
    },
  ];

  return (
    <div>
      <div className="promo-container">
      {promos.map((promo) => (
        <div key={promo.id} className="promo-card">
          <div className="promo-text">
            <div className="promo-tag">NOW AVAILABLE</div>
            <h2 className="promo-title">{promo.title}</h2>
            <p className="promo-desc">{promo.description}</p>
            <button
              className="promo-button"
              onClick={() => navigate(`/purchase/${promo.id}`)}
            >
              CHECK IT OUT
            </button>
          </div>

          <div className="promo-image-container">
            <img
              src={promo.image}
              alt={`${promo.title} Cover`}
              className="promo-image"
            />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default PromotionComp;
