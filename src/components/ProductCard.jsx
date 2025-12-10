import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, onAdd }) {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.opis}`)}
    >
      <img src={product.slika} alt={product.ime} />
      <h3>{product.ime}</h3>
      <p>{product.opis}</p>
      <p>€{product.cijena.toFixed(2)}</p>

      {onAdd && (
        <button className="products-add-to-cart-button"
          onClick={(e) => {
            e.stopPropagation();
            onAdd(product);
            alert("Proizvod dodan u košaricu");
          }}
        >
          Dodaj u košaricu
        </button>
      )}
    </div>
  );
}