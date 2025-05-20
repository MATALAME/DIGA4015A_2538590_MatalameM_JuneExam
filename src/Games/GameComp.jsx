import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameContext } from './GameContext';

const GameComp = ({ games: propGames }) => { 
  //I made a mistake at first because I made the code only use the context without the exception of games prop, so the GameComp ended up rendering 
  //all games, not the filtered ones which I made in CategoryCard. 
  const { games: contextGames } = useGameContext();
  const games = propGames || contextGames; //uses propGames (genre) if its passed in, otherwise it uses the contextGames (all the other games)

  const navigate = useNavigate();

  const handleBuy = (id) => {
    navigate(`/purchase/${id}`);  
    //In class Andre showed us how the Takealot URLs look depending on the user's selected product, so since my app is also an ecommerce app, the 
    //app navigates to the purchase page using the selected game ID in the URL making the purchase page load the correct game.   
  };

  return (
    <div className="GameCard">
      {games.map((game) => (
        <div key={game.id}>
          <img src={game.thumbnail} alt={game.title} /> {/* dynamic alt text :)  */}
          <div className="GameCard">
            <h3>{game.title}</h3>
            <p>{game.platform}</p>
            <p>{game.short_description}</p>
            <p><strong>Price:</strong> R{game.price}</p>
            <div className="Buy-Details">
              <button className="Buy-Buttons" onClick={() => handleBuy(game.id)}>Buy</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameComp;
