import React from 'react';
import { useParams } from 'react-router-dom';
import { useGameContext } from '../Games/GameContext';

const PaymentPage = () => {
  const { id } = useParams();
  const { games } = useGameContext();
  const game = games.find(g => g.id === parseInt(id)); // This code checks if the game’s id matches the URL id.

  if (!game) return <p>Loading...</p>;

  const total = game.price;
  const tax = +(total * 0.15).toFixed(2); // This code calculates the 15% of the price and the .toFixed(2) ensures that its only two decimals to show the cents. When I did it without it, it displayed a number like: R234.8343489230
  const subtotal = total; 

  //const tax = +(game.price * 0.02).toFixed(2);       //At first I added 15% tax on the game price, then I remembered that it wouldn't be ethical whereas the user will only
  //const total = +(game.price + tax).toFixed(2);      //be seeing the "hidden costs" upon purchase and this would reduce the user experience as users will feel like the application is not transparent with the pricing of games.

  return (
    <div className="PaymentPage">
      <h2>Payment Details</h2>

      <div className="OrderSummary">
        <h3>{game.title}</h3>
        <img src={game.thumbnail} alt={game.title} ></img>
        <p><strong>Platform:</strong> {game.platform}</p>
        <p><strong>Price:</strong> R{game.price}</p>
      </div>

      <form className="PaymentForm">
        <label>Email Address</label>
        <input type="email" required />

        <label>Card Holder</label>
        <input type="text" required />

        <label>Card Number</label>
        <input type="text" required />

        <label>CVV</label>
        <input type="password" required />

        <div className="Total">
          <p><strong>Subtotal:</strong> R{subtotal}</p>
          <p><strong>Tax (15%):</strong> R{tax}</p>
          <p><strong>Total:</strong> R{total}</p>
        </div>

        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default PaymentPage;
