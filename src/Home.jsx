import React from "react";
import { Link } from "react-router-dom";
import GameComp from "./Games/GameComp";
import CategoryCard from "./Genre/CategoryCard";
import PlatformCard from "./Platfrom/PlatformCard";

//Images for Categories
import shooter from "./Images/Shooter.jpg";
import racing from "./Images/Racing.jpg";
import rpg from "./Images/RPG.jpg";
import action from "./Images/Action.jpg";
import card from "./Images/CardGame.jpg";

//Images for Platfroms
import playstation from "./Images/PlaystationLogo.png"
import xbox from "./Images/XBOXLogo.png"
import pcgames from "./Images/PCGameLogo.png"
import webrowser from "./Images/WebBrowserLogo.jpg"

const genres = [
    { name: "Shooter", image: shooter },
    { name: "Racing", image: racing },
    { name: "RPG", image: rpg },
    { name: "Action", image: action },
    { name: "Card Games", image: card },
  ];

  const platforms = [
    { name: "Playstation", image: playstation },
    { name: "xbox", image: xbox },
    { name: "pcgames", image: pcgames },
    { name: "webrowser", image: webrowser },
  ];

function Home (){
    return(

        <div>
          <h2>Platfroms</h2>
          <div className="Platforms">
            {platforms.map((platform) => ( 
              <PlatformCard key={platform.name} name={platform.name} image={platform.image} /> 
            ))}
          </div>

        <h2>CATEGORIES</h2>
          <div className="Genre">
            {genres.map((genre) => ( 
              <CategoryCard key={genre.name} name={genre.name} image={genre.image} /> // Passing each 'genre.name' and 'genre.image' as props to be accessible in CategoryCard.
            ))}
          </div>

      <h2 className="All Games">All Games</h2>
            <GameComp/>  {/* //All the games will appear here */}
        </div>
    )
}

export default Home;