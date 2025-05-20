import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryStyle.css';

const CategoryCard = ({ name, image }) => { //The image and name come from the Home.jsx array
  const navigate = useNavigate();

  const handleClick = () => { 
    navigate(`/category/${name.toLowerCase()}`);
  };

  return (
    <div className="category-card" onClick={handleClick}> 
      <img src={image} alt={name} className="category-image" /> {/* This means you’re passing each genre.name and genre.image as props to CategoryCard. */}
      <p>{name}</p>
    </div>
  );
};

export default CategoryCard;
