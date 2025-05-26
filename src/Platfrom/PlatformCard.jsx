import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PlatformStyle.css';

const PlatformCard = ({ name, image }) => { 
  const navigate = useNavigate();

  const handleClick = () => { 
    navigate(`/platform/${name.toLowerCase()}`); //URLs are usually all in lowercase, so the 'toLowercase' helps keep it consistant. 
  };

  return (
    <div className="platform-card" onClick={handleClick}> 
      <img src={image} alt={name} className="platform-image" /> 
      <p>{name.toUpperCase()}</p>
    </div>
  );
};

export default PlatformCard;
