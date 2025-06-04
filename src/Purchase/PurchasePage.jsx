import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGameContext } from '../Games/GameContext';
import GameComp from '../Games/GameComp';
import "./PurchasePage.css"

const PurchasePage = () => {
  const { id } = useParams();
  const { games } = useGameContext();
  const game = games.find(g => g.id === parseInt(id));
  const navigate = useNavigate();

  if (!game) return <p className='loading-purchase-text'>Loading...</p>; 
  //A requirement from our final exam last year was to have a loading message for when the code is still trying to fetch data. So this checks 
  //if the game hasn't been found yet, and if so, it shows the temporary loading message.

  const handlePay = () => {
    navigate(`/pay/${id}`);
  };

  const suggestedGames = [...games] 
    .sort(() => 0.5 - Math.random())  //Once again. I randomized the games to not give repetitive results to the users. 
    .slice(0, 5);                    

  return (
    <div className='purchase-page'>
    <div className="purchase-container">
      <div className="game-details">
        <img src={game.thumbnail} alt={game.title} className="game-image" />

        <div className="game-info">
          <h1 className="game-title">{game.title}</h1>
          <p className="game-description">{game.short_description}</p>

          <div className="game-more-info"> 
            <p><strong>Genre:</strong> {game.genre}</p>
            <p><strong>Publisher:</strong> {game.publisher}</p>
            <p><strong>Developer:</strong> {game.developer}</p>
            <p><strong>Release Date:</strong> {game.release_date}</p>
          </div>

          <p className="game-price">R {game.price}</p>

          <button onClick={handlePay} className="buy-button">BUY</button>

          <p className="purchase-note"> * All game purchases are final, but refunds may be issued for technical issues or accidental purchases within 48 hours. *</p>
        </div>
      </div>
    </div>

    <h2 className='suggested-heading'>Check out other games</h2>

      <div className="suggested-section">
        <GameComp games={suggestedGames} variant="suggested" />
      </div>
    </div>
    
  );
};

export default PurchasePage;

