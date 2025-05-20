import React from 'react';
import { useParams } from 'react-router-dom';
import { useGameContext } from '../Games/GameContext';

const PurchasePage = () => {
  const { id } = useParams();
  const { games } = useGameContext();
  const game = games.find(g => g.id === parseInt(id));

  if (!game) return <p>Loading...</p>;

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
    </div>
  );
};

export default PurchasePage;
