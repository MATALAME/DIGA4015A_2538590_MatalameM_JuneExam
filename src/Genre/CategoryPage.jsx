import React from 'react';
import { useParams } from 'react-router-dom';
import GameComp from '../Games/GameComp';
import { useGameContext } from '../Games/GameContext'; 


const CategoryPage = () => {

//     useEffect(() => {
//   fetch('https://www.freetogame.com/api/games')  
//     .then(res => res.json())
//     .then(data => {
//       const filtered = data.filter(game =>
//         game.genre.toLowerCase() === genre.toLowerCase()
//       );
//       setFilteredGames(filtered);
//     });}, [genre]);

  const { genre } = useParams();
  const { games } = useGameContext(); 

  const filteredGames = games.filter(game =>
    game.genre.toLowerCase() === genre.toLowerCase()
  );

  return (
    <div>
      <h2>{genre} Games</h2>
      <GameComp games={filteredGames} />
    </div>
  );
};

export default CategoryPage;
