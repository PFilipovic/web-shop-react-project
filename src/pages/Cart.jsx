import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, p) => acc + p.cijena, 0);

  if (cart.length === 0) return <p>Košarica je prazna.</p>;

  return (
    <div className="cart-page-wrapper">
      <h2>Košarica</h2>

      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.slika} alt={item.ime} />
          <p>{item.ime}</p>
          <p>€{item.cijena.toFixed(2)}</p>
          <button className="cart-remove-button" onClick={() => removeFromCart(index)}>Ukloni</button>
        </div>
      ))}

      <h3 className="cart-total">Ukupno: €{total.toFixed(2)}</h3>
      <button className="cart-clear-button" onClick={clearCart}>Isprazni košaricu</button>
    </div>
  );
}