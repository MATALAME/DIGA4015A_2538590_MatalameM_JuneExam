import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GameComp from "./Games/GameComp";
import CategoryCard from "./Genre/CategoryCard";
import PlatformCard from "./Platfrom/PlatformCard";
import { useGameContext } from "./Games/GameContext";
import FooterComp from "./Additional/FooterComp";
import PromotionComp from "./Additional/PromotionComp";
import "./Home.css"
import DiscountComp from "./Additional/DiscountComp";

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
    const { games } = useGameContext();

    const getRandomGame = (list) => {
    const randomIndex = Math.floor(Math.random() * list.length);
      return list[randomIndex];
    };

    const games30 = games.map(game => ({ ...game, image: game.thumbnail }));
    const games50 = games.map(game => ({ ...game, image: game.thumbnail }));

    const discountGame30 = getRandomGame(games30);
    const discountGame50 = getRandomGame(games50);

    return(
    <div>
      {/* <h2>Deals</h2> */}
     <div className="both">
        <div className="discount-games">
         <DiscountComp game={discountGame30} discount={30} />
         <DiscountComp game={discountGame50} discount={50} />
      </div>

        <div className="platforms">
          {platforms.map((platform) => (
            <PlatformCard key={platform.name} name={platform.name} image={platform.image} />
          ))}
        </div>
      </div>

      <h2 className="category-title">CATEGORIES</h2>
      <div className="Genre">
        {genres.map((genre) => (
          <CategoryCard key={genre.name} name={genre.name} image={genre.image} />
        ))}
      </div>

      <h2 className="all-games">NEW GAMES</h2>
      <GameComp games={[...games].sort(() => 0.5 - Math.random()).slice(0, 10)} />

      <div className="promotion-container">
          <PromotionComp/>
      </div>

      <FooterComp/>
    </div>
  );
}
export default Home;