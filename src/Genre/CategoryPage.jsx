import React from 'react';
import { useParams } from 'react-router-dom';
import GameComp from '../Games/GameComp';
import { useGameContext } from '../Games/GameContext'; 

import mmorpg from "../Images/MMORPGCover.jpg";
import fighting from "../Images/FightingCover.jpg";
import racing from "../Images/RacingCover.jpg";
import sports from "../Images/SportsCover.jpg";
import shooter from "../Images/ShooterCover.jpg";
import strategy from "../Images/StrategyCover.jpg";

const genreImages = {
  mmorpg,
  fighting,
  racing,
  sports,
  shooter,
  strategy,
};


const CategoryPage = () => {

//     useEffect(() => {                                        //Instead of using context, I mistakenly fetched the data twice, in both the 
//   fetch('https://www.freetogame.com/api/games')              //GameComp and CategoryPage, making a filtered list for the categories but I noticed
//     .then(res => res.json())                                 //that it wasnt the same as the info in the GameComp which included prices, which made
//     .then(data => {                                          //it inefficient to fetch the data twice for the same information. So I had to go back and 
//       const filtered = data.filter(game =>                   //create the GameContext.
//         game.genre.toLowerCase() === genre.toLowerCase()
//       );
//       setFilteredGames(filtered);
//     });}, [genre]);

  const { genre } = useParams();  //The code checks the the part of the URL that changes (the genre) so it can then display the filtered right games. 
  const { games } = useGameContext(); 

  const genreCover = genreImages[genre.toLowerCase()];

  const filteredGames = games.filter(game =>
    game.genre.toLowerCase() === genre.toLowerCase()
  );
   return (
  <div>
    {/* <h2>{genre} Games</h2> */}

    {genreCover && (
      <div className="genre-cover-container">
        <img src={genreCover} alt={`${genre} cover`} className="genre-cover-image" />
      </div>
    )}

    <GameComp games={filteredGames} />
  </div>
);

};

export default CategoryPage;
