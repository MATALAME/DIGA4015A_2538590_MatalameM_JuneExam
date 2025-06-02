import React from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { useGameContext } from '../Games/GameContext';
import "./PaymentPage.css"

const PaymentPage = () => {
  const { id } = useParams();
  const { games } = useGameContext();
  const game = games.find(g => g.id === parseInt(id)); // This code checks if the game’s id matches the URL id.
  const navigate = useNavigate(); 

  if (!game) return <p>Loading...</p>;

  const total = game.price;
  const tax = +(total * 0.15).toFixed(2); // This code calculates the 15% of the price and the .toFixed(2) ensures that its only two decimals to show the cents. When I did it without it, it displayed a number like: R234.8343489230
  const subtotal = total; 

  //const tax = +(game.price * 0.02).toFixed(2);       //At first I added 15% tax on the game price, then I remembered that it wouldn't be ethical whereas the user will only
  //const total = +(game.price + tax).toFixed(2);      //be seeing the "hidden costs" upon purchase and this would reduce the user experience as users will feel like the application is not transparent with the pricing of games.

   const handlePay = (e) => {
    e.preventDefault();
    navigate('/download');
  };
  
  return (
    <div className="payment-container">
      <div className="summary-section">
        <h2>Summary Order</h2>
        <p>Check your order and select your payment method</p>
        <div className="game-summary">
          <img src={game.thumbnail} alt={game.title} />
          <div>
            <h3>{game.title}</h3>
            <p>{game.platform}</p>
            <p><strong>R{game.price}</strong></p>
          </div>
        </div>
      </div>

      <div className="form-section">
        <h2>Payment Details</h2>
        <p>Complete your purchase by providing your payment details.</p>
        <form className="payment-form" onSubmit={handlePay}>

          <label>Email Address</label>
          <input type="email" required placeholder=''/>

          <label>Card Holder</label>
          <input type="text" required placeholder=''/>

          <div className="card-info">
             <div className="card-number">
              <label>Card Number</label>
              <input type="text" />
             </div>

            <div className="cvv">
              <label>CVV</label>
              <input type="password"/>
            </div>
          </div>

          <div className="price-breakdown">
            <p><span>Subtotal</span><span>R{subtotal}</span></p>
            <p><span>Tax</span><span>R{tax}</span></p>
            <p className="total"><span>Total</span><span>R{total}</span></p>
          </div>

          <button type="submit" className="pay-button">PAY</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
