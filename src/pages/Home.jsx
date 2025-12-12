import { proizvodiArr } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function Home() {
  const newProducts = proizvodiArr.slice(0, 3);
  const featured = proizvodiArr.slice(-3);

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Otkrijte savršen stil</h1>
          <p>Ekskluzivna kolekcija najnovijih trendova za svaku prigodu</p>
          <Link to="/products" className="hero-button">Kupi odmah</Link>
        </div>
      </section>

      <h1 className="home-header">Istaknuti proizvodi</h1>
      <div className="product-grid-featured">
        {featured.map((p) => (
          <ProductCard key={p.opis} product={p} />
        ))}
      </div>

      <h1 className="home-header">Novi proizvodi</h1>
      <div className="product-grid-new">
        {newProducts.map((p) => (
          <ProductCard key={p.opis} product={p} />
        ))}
      </div>

      <h1 className="category-title">Što nudimo</h1>
      <section className="category-grid">
        <Link to="products">
          <div className="category-box"><h3>Majice</h3></div>
        </Link>
        <Link to="products">
          <div className="category-box"><h3>Hlače</h3></div>
        </Link>
        <Link to="products">
          <div className="category-box"><h3>Tenisice</h3></div>
        </Link>
        <Link to="products">
          <div className="category-box"><h3>Torbe</h3></div>
        </Link>
      </section>


    </div>
  );
}