import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import LandingPage from './SignUp/LandingPage';
import Signup from './SignUp/Signup';
import { GameProvider } from './Games/GameContext';
import Home from './Home';
import CategoryPage from './Genre/CategoryPage';
import PurchasePage from './Purchase/PurchasePage';
import DealsPage from './Deals/DealsPage';

function App() {
  return (
    <div className="App">

      <GameProvider>
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/category/:genre" element={<CategoryPage />} />
              <Route path="/purchase/:id" element={<PurchasePage />} />
              <Route path="/deals" element={<DealsPage />} />

            </Routes>
        </BrowserRouter>
       </GameProvider>

    </div>
  );
}

export default App;
