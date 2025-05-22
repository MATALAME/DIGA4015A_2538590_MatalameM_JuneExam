import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGameContext } from '../Games/GameContext';

const PurchasePage = () => {
  const { id } = useParams();
  const { games } = useGameContext();
  const game = games.find(g => g.id === parseInt(id));
  const navigate = useNavigate();

  if (!game) return <p>Loading...</p>; 
  //A requirement from our final exam last year was to have a loading message for when the code is still trying to fetch data. So this checks 
  //if the game hasn't been found yet, and if so, it shows the temporary loading message.

  const handlePay = () => {
    navigate(`/pay/${id}`);
  };

  return (
    <div className="PurchasePage">
      <h2>{game.title}</h2>
      <img src={game.thumbnail} alt={game.title} />
      <p><strong>Genre:</strong> {game.genre}</p>
      <p><strong>Publisher:</strong> {game.publisher}</p>
      <p><strong>Developer:</strong> {game.developer}</p>
      <p><strong>Release Date:</strong> {game.release_date}</p>
      <p><strong>Price:</strong> R{game.price}</p>
      <p><strong>Description:</strong> {game.short_description}</p>
      <button onClick={handlePay}>Pay</button> 
    </div>
  );
};

export default PurchasePage;

