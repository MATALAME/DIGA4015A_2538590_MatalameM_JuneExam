import React, { useState } from 'react';
import { useGameContext } from './GameContext';
import GameComp from './GameComp';
import "./GamesPage.css"

const GamesPage = () => {
  const { games } = useGameContext();

  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const platforms = ['All', 'Playstation', 'Xbox', 'PC Games', 'Web Browser'];
  const genres = ['All', 'MMORPG', 'Fighting', 'Shooter', 'Sports', 'Strategy', 'Racing'];

  const filteredGames = games.filter(game => {
    const matchesPlatform = selectedPlatform === 'All' || selectedPlatform === '' || game.platform === selectedPlatform;
    const matchesGenre = selectedGenre === 'All' || selectedGenre === '' || game.genre === selectedGenre;

    return matchesPlatform && matchesGenre;
  });

  return (
    <div className="games-page">
      <div className="filters">
        <select value={selectedPlatform} onChange={(e) => setSelectedPlatform(e.target.value)}>
          {platforms.map(platform => (
            <option key={platform} value={platform}>{platform}</option>
          ))}
        </select>

        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <GameComp games={filteredGames} />
    </div>
  );
};

export default GamesPage;
