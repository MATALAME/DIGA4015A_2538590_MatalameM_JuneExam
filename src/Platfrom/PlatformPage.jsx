import React from 'react';
import { useParams } from 'react-router-dom';
import GameComp from '../Games/GameComp';
import { useGameContext } from '../Games/GameContext'; 

import playstation from "../Images/PlaystationCover.jpg";
import xbox from "../Images/XboxCover.jpg";
import webrowser from "../Images/WebBrowserCover.jpg";
import pcgames from "../Images/PCCover.jpg";

const platformImages = {
  playstation,
  xbox,
 'pc games': pcgames,        // My platformImages was failing for "PC Games" and "Web Browser" because platform.toLowerCase() includes spaces,
  'web browser': webrowser,  // but my image keys here didn't. I fixed it by updating the keys to include the correct strings with spaces.  
};

const PlatformPage = () => {

  const { platform } = useParams();  
  const { games } = useGameContext(); 

  const platformCover = platformImages[platform.toLowerCase()];

  const filteredGames = games.filter(game =>
    game.platform.toLowerCase() === platform.toLowerCase()
  );

  return (
    <div>
      {/* <h2>{platform} Games</h2> */}
      <div className="platform-cover-container">
      <img src={platformCover} alt={`${platform} cover`} className="platform-cover-image" />
      </div>
      <GameComp games={filteredGames} />
    </div>
  );
};

export default PlatformPage;
