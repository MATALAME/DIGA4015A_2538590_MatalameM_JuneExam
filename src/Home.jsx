import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GameComp from "./Games/GameComp";
import CategoryCard from "./Genre/CategoryCard";
import PlatformCard from "./Platfrom/PlatformCard";
import { useGameContext } from "./Games/GameContext";
import "./Home.css"

//Images for Categories
import mmorpg from "./Images/MMORPG.jpg";
import fighting from "./Images/Fight.jpg"
import racing from "./Images/Racing.jpg";
import sports from "./Images/Sports.jpg";
import shooter from "./Images/Shooter.jpg";
import strategy from "./Images/Strategy.jpg";

//Images for Platfroms
import playstation from "./Images/PlaystationLogoWhite.png";
import xbox from "./Images/XBOXLogo.png";
import pcgames from "./Images/PCGameLogo.png";
import webrowser from "./Images/WebBrowserLogo.png";

//Images for Footer
import youtube from "./Images/Youtube.png";
import facebook from "./Images/Facebook.png";
import instagram from "./Images/Instagram.png";


const genres = [
    { name: "MMORPG", image: mmorpg },
    { name: "Fighting", image: fighting },
    { name: "Racing", image: racing },
    { name: "Sports", image: sports },
    { name: "Shooter", image: shooter },
    { name: "Strategy", image: strategy },
  ];

  const platforms = [
    { name: "Playstation", image: playstation },
    { name: "xbox", image: xbox },
    { name: "pc games", image: pcgames },
    { name: "web browser", image: webrowser },
  ];

function Home (){
    const navigate = useNavigate();
    const { games } = useGameContext();

    const getRandomGame = (list) => {
      const randomIndex = Math.floor(Math.random() * list.length);
      return list[randomIndex];
    };

    const games30 = games.map(game => ({
      ...game,title: `30% OFF`, image: game.thumbnail  
    }));

    const games50 = games.map(game => ({
      ...game,title: `50% OFF`,image: game.thumbnail  
    }));

    const discountGame30 = getRandomGame(games30);
    const discountGame50 = getRandomGame(games50);

    return(
    <div>
      {/* <h2>Deals</h2> */}
     <div className="both">
        <div className="discount-games">
         {discountGame30 && (
            <div className="discount-game clickable" onClick={() => navigate('/deals')}>
              <div className="discount-badge">30% SALE</div>
              <img src={discountGame30.image} alt={discountGame30.title} className="discount-game-image" />
              {/* <p>{discountGame30.title}</p> */}
            </div>
          )}
          {discountGame50 && (
            <div className="discount-game clickable" onClick={() => navigate('/deals')}>
              <div className="discount-badge">50% SALE</div>
              <img src={discountGame50.image} alt={discountGame50.title} className="discount-game-image" />
              {/* <p>{discountGame50.title}</p> */}
            </div>
          )}
      </div>

        <div className="Platforms">
          {platforms.map((platform) => (
            <PlatformCard key={platform.name} name={platform.name} image={platform.image} />
          ))}
        </div>
      </div>

      <h2 className="Category-title">CATEGORIES</h2>
      <div className="Genre">
        {genres.map((genre) => (
          <CategoryCard key={genre.name} name={genre.name} image={genre.image} />
        ))}
      </div>

      <h2 className="All-games">All Games</h2>
      <GameComp games={[...games].sort(() => 0.5 - Math.random()).slice(0, 10)} />

        <footer className="app-footer">
          <img src={youtube} alt="Youtube Icon" className="social-media-icon" onClick={() => window.open("https://www.youtube.com/@T5G", "_blank")}/>
          <img src={facebook} alt="Facebook Icon" className="social-media-icon" onClick={() => window.open("https://www.facebook.com/ign/", "_blank")} />
          <img src={instagram} alt="Instagram Icon" className="social-media-icon" onClick={() => window.open("https://www.instagram.com/matalame_/", "_blank")} />
        </footer>

        <p className="copyright"> © 2025 Raw Games. All rights reserved. </p>
    </div>
  );
}
export default Home;