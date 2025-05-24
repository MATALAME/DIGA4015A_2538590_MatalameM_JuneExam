import React, { createContext, useContext, useEffect, useState } from 'react';

const GameContext = createContext(); 

export const GameProvider = ({ children }) => {  
//This will allow the children (all that's nested in this provider [the pages and components]) to have access to the game data through the context. 

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://www.freetogame.com/api/games')
      .then(res => res.json())
      .then(data => {

        const platforms = ['Playstation', 'XBOX', 'PC Games', 'Web Browser']; 
        //The API only had two platforms specifically "Web Browser" and "PC (Windows)" so I wanted to add different platforms and to also make them random.
        const additions = data.map(game => ({
          ...game,
          //I wasn't too sure how to add the price within the API array so I asked ChatGPT to help, it suggested using the spread operator "..." which
          //copies all the properties from the original data and allows the code to add the prices without changing the original API data. 
          //Reference: Fetch API data in React (2025) CHATGPT. Available at: https://chatgpt.com/c/682c7a45-9d6c-800e-b74a-685f12a8d075 (Accessed: 20 May 2025). 

          price: Math.floor(Math.random() * (1900 - 300 + 1)) + 300, 
          //Since the API doesnt include prices, I included random prices between R300 - R1900

          platform: platforms[Math.floor(Math.random() * platforms.length)]
          
        }));
        setGames(additions);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <GameContext.Provider value={{ games }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
