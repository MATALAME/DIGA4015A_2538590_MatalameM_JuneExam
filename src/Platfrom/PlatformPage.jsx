import React from 'react';
import { useParams } from 'react-router-dom';
import GameComp from '../Games/GameComp';
import { useGameContext } from '../Games/GameContext'; 


const PlatformPage = () => {

  const { platform } = useParams();  
  const { games } = useGameContext(); 

  const filteredGames = games.filter(game =>
    game.platform.toLowerCase() === platform.toLowerCase()
  );

  return (
    <div>
      <h2>{platform} Games</h2>
      <GameComp games={filteredGames} />
    </div>
  );
};

export default PlatformPage;
