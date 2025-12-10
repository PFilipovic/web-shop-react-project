import { useContext, useState, useMemo } from "react";
import { proizvodiArr } from "../data/products";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

export default function Products() {
  const { addToCart } = useContext(CartContext);

  const [selectedCats, setSelectedCats] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const sveKategorije = [...new Set(proizvodiArr.map(p => p.kategorija))];

  const toggleCategory = (cat) => {
    setSelectedCats(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const filteredList = useMemo(() => {
    let arr = [...proizvodiArr];

    if (selectedCats.length > 0) {
      arr = arr.filter(p => selectedCats.includes(p.kategorija));
    }

    if (minPrice !== "") arr = arr.filter(p => p.cijena >= Number(minPrice));
    if (maxPrice !== "") arr = arr.filter(p => p.cijena <= Number(maxPrice));

    if (sortOrder === "asc") arr.sort((a, b) => a.cijena - b.cijena);
    if (sortOrder === "desc") arr.sort((a, b) => b.cijena - a.cijena);

    return arr;
  }, [selectedCats, minPrice, maxPrice, sortOrder]);

  return (
    <div className="products-page">

      <aside className="filters-box">

        <div className="filter-section">
          <h3>Kategorije</h3>

          {sveKategorije.map(cat => (
            <label key={cat} style={{ display: "block" }}>
              <input
                type="checkbox"
                checked={selectedCats.includes(cat)}
                onChange={() => toggleCategory(cat)}
              />
              {cat}
            </label>
          ))}
        </div>

        <hr />

        <div className="filter-section">
          <h3>Cijena</h3>
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        <hr />

        <div className="filter-section">
          <h3>Sortiraj</h3>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="">Odaberi</option>
            <option value="asc">Cijena raste</option>
            <option value="desc">Cijena pada</option>
          </select>
        </div>

      </aside>

      <div className="product-grid">
        {filteredList.map(p => (
          <ProductCard key={p.ime + p.cijena} product={p} onAdd={addToCart} />
        ))}
      </div>

    </div>
  );
}