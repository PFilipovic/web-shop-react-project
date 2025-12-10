import { Link } from "react-router-dom";
import SearchBar from "./SearchBox";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="left-side">
        <Link to="/">
          <i
            className="fa-solid fa-shop"
            style={{ color: "#000000", fontSize: "30px" }}
          ></i>
        </Link>

        <div className="nav-links">
          <Link to="/">Početna</Link>
          <Link to="/products">Proizvodi</Link>
        </div>
      </div>

      <div className="right-side">
        <SearchBar />

        <Link to="/cart">
          <i
            className="fa-solid fa-cart-shopping"
            style={{ color: "#000000", fontSize: "25px" }}
          ></i>
        </Link>
      </div>

    </nav>
  );
}