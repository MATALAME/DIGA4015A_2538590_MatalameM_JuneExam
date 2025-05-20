import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryStyle.css';

const CategoryCard = ({ name, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${name.toLowerCase()}`);
  };

  return (
    <div className="category-card" onClick={handleClick}>
      <img src={image} alt={name} className="category-image" />
      <p>{name}</p>
    </div>
  );
};

export default CategoryCard;
