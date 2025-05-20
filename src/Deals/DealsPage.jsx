import React from 'react';
import { useGameContext } from '../Games/GameContext';
import GameComp from '../Games/GameComp';

const DealsPage = () => {
  const { games } = useGameContext();

  
  const getRandomFive = (list) => {
    const copy = [...list];
    copy.sort(() => Math.random() - 0.5);
    return copy.slice(0, 5);
  };

  const under500 = getRandomFive(games.filter(game => game.price < 500));
  const under1000 = getRandomFive(games.filter(game => game.price < 1000));


  const discount15 = getRandomFive(games).map(game => ({
    ...game,
    title: `${game.title} (15% OFF)`
  }));

  const discount30 = getRandomFive(games).map(game => ({
    ...game,
    title: `${game.title} (30% OFF)`
  }));

   const discount50 = getRandomFive(games).map(game => ({
    ...game,
    title: `${game.title} (50% OFF)`
  }));

  return (
    <div>
      <h2>Deals</h2>

      <h3>Under R500</h3>
      <GameComp games={under500} />

      <h3>Under R1000</h3>
      <GameComp games={under1000} />

      <h3>15% OFF</h3>
      <GameComp games={discount15} />

      <h3>30% OFF</h3>
      <GameComp games={discount30} />

      <h3>50% OFF</h3>
      <GameComp games={discount50} />
    </div>
  );
};

export default DealsPage;
