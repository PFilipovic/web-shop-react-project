import { useState } from "react";
import { proizvodiArr } from "../data/products";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [found, setFound] = useState([]);

  function handleSearch(value) {
    setQuery(value);

    if (value.trim() === "") {
      setFound([]);
      return;
    }

    const filtered = proizvodiArr.filter(p =>
      p.ime.toLowerCase().includes(value.toLowerCase())
    );

    setFound(filtered);
  }

  function goToProduct(product) {
    window.location.href = `/product/${product.opis}`;
  }

  return (
    <div className="search-bar-container">
      <input
        className="search-input"
        value={query}
        placeholder="Pretraži proizvode..."
        onChange={(e) => handleSearch(e.target.value)}
      />

      {found.length > 0 && (
        <div className="search-results" style={{ display: "block" }}>
          {found.map((product) => (
            <div
              key={product.opis}
              className="search-item"
              onClick={() => goToProduct(product)}
            >
              <img src={product.slika} />
              <div>
                <p>{product.ime}</p>
                <p>€{product.cijena}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}