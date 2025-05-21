import React from 'react';
import { useGameContext } from '../Games/GameContext';
import GameComp from '../Games/GameComp';

const DealsPage = () => {
  const { games } = useGameContext();

  
  const randomFive = (list) => {
    const add = [...list];
    add.sort(() => Math.random() - 0.5); //Shuffles the copied list into a random order.
    return add.slice(0, 5); //Takes the first 5 items from the randomly shuffled list and gives them back.
  };
  
  const under500 = randomFive(games.filter(game => game.price < 500));  
  const under1000 = randomFive(games.filter(game => game.price < 1000));
  //These two lines filter games with a price under R500 and price under R1000. Picks 5 random ones using randomFive.


  const discount15 = randomFive(games).map(game => ({
    ...game,
    title: `${game.title} (15% OFF)`
  }));  //This adds “(15% OFF)” to each gaming title without changing the actual pricing logic from my other scripts. The ones under are "30% OFF" and "50% OFF"

  const discount30 = randomFive(games).map(game => ({
    ...game,
    title: `${game.title} (30% OFF)`
  }));

   const discount50 = randomFive(games).map(game => ({
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
