import { useParams } from "react-router-dom";
import { proizvodiArr } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = proizvodiArr.find((p) => p.opis === id);

  if (!product) return <p>Proizvod nije pronađen.</p>;

  return (
    <div className="product-details-wrapper">
      <img src={product.slika} alt={product.ime} />
      <div className="product-info">
        <h2>{product.ime}</h2>
        <p>{product.opis}</p>
        <p>€{product.cijena.toFixed(2)}</p>
        <button className="product-details-button" onClick={() => addToCart(product)}>Dodaj u košaricu</button>
      </div>
    </div>
  );
}