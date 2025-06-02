import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import "./App.css";
import LandingPage from './SignUp/LandingPage';
import Signup from './SignUp/Signup';
import { GameProvider } from './Games/GameContext';
import Home from './Home';
import CategoryPage from './Genre/CategoryPage';
import PurchasePage from './Purchase/PurchasePage';
import DealsPage from './Deals/DealsPage';
import PaymentPage from './Payment/PaymentPage';
import PlatformPage from './Platfrom/PlatformPage';
import GamesPage from './Games/GamesPage';
import ProfilePage from './Profile/ProfilePage';
import Scroll from './Technical/Scroll';
import Download from './Payment/Download';

function App() {
  return (
    <div className="App">

      <GameProvider>
        <BrowserRouter>
          <NavBar/>
          <Scroll/>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/category/:genre" element={<CategoryPage />} />
              <Route path="/platform/:platform" element={<PlatformPage />} />
              <Route path="/purchase/:id" element={<PurchasePage />} />
              <Route path="/deals" element={<DealsPage />} />
              <Route path="/pay/:id" element={<PaymentPage />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/profile" element={<ProfilePage/>} />
              <Route path="/download" element={<Download />} />
            </Routes>
        </BrowserRouter>
       </GameProvider>

    </div>
  );
}

export default App;
