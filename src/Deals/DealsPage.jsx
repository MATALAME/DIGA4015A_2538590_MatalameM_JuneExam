import React from 'react';
import { useState } from 'react';
import { useGameContext } from '../Games/GameContext';
import GameComp from '../Games/GameComp';
import "./DealsStyle.css";

const DealsPage = () => {
  const { games } = useGameContext();

  // const randomFive = (list) => {
  //   const add = [...list];
  //   add.sort(() => Math.random() - 0.5); //Shuffles the copied list into a random order.
  //   return add.slice(0, 5); //Takes the first 5 items from the randomly shuffled list and gives them back.
  // };
  
  const randomList = (list) => {
    return [...list].sort(() => Math.random() - 0.5);
  }

  const [visibleGames, setVisibleGames] = useState({
    under500: 5, under1000: 5, discount15: 5, discount30: 5, discount50: 5,
  });

  const increaseVisible = (key) => {
    setVisibleGames((prev) => ({
      ...prev, [key] : prev[key] + 5
    }));
  }

  // const under500 = randomFive(games.filter(game => game.price < 500));  
  // const under1000 = randomFive(games.filter(game => game.price < 1000));
  // //These two lines filter games with a price under R500 and price under R1000. Picks 5 random ones using randomFive.

  const under500List = randomList(games.filter(game => game.price < 500));
  const under1000List = randomList(games.filter(game => game.price < 1000));
  const discount15List = randomList(games).map(game => ({...game, title: `${game.title} (15% OFF)`}));
  const discount30List = randomList(games).map(game => ({...game, title: `${game.title} (30% OFF)`}));
  const discount50List = randomList(games).map(game => ({...game, title: `${game.title} (50% OFF)`}));

  return (
    <div>
      <h2 className='deals-heading'>Raw Games Deals</h2>

      <div className='deal-container'>
        <h3 className='deal-title'>Under R500</h3>
        <button className="show-more-btn" onClick={() => increaseVisible('under500')}>Show More ▼ </button>
      </div>
      <GameComp games={under500List.slice(0, visibleGames.under500)} />

      <div className='deal-container'>
        <h3 className='deal-title'>Under R1000</h3>
        <button className="show-more-btn" onClick={() => increaseVisible('under1000')}>Show More ▼</button>
      </div>
      <GameComp games={under1000List.slice(0, visibleGames.under1000)} />

      <div className='deal-container'>
        <h3 className='deal-title'>15% OFF</h3>
        <button className="show-more-btn"  onClick={() => increaseVisible('discount15')}>Show More ▼</button>
      </div>
      <GameComp games={discount15List.slice(0, visibleGames.discount15)} />

      <div className='deal-container'>
        <h3 className='deal-title'>30% OFF</h3>
        <button className="show-more-btn"  onClick={() => increaseVisible('discount30')}>Show More ▼</button>
      </div>
      <GameComp games={discount30List.slice(0, visibleGames.discount30)} />
  
      <div className='deal-container'>
      <h3 className='deal-title'>50% OFF</h3>
        <button className="show-more-btn" onClick={() => increaseVisible('discount50')}>Show More ▼</button>
      </div>
      <GameComp games={discount50List.slice(0, visibleGames.discount50)} />
  
    </div>
  );
};

export default DealsPage;
