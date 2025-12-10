import { Link } from "react-router-dom";

export default function Footer() {
  return (
      <footer className="footer-home">
        <div><h2 className="footer-title">Web-shop</h2></div>
        <div>
          <h3>Pravno</h3>
          <p>Pravila privatnosti</p>
          <p>Uvjeti korištenja</p>
          <p>Povrat</p>
        </div>

        <div>
          <h3>Pratite nas</h3>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>

        <div className="footer-links">
          <h3>Također pogledajte</h3>
          <Link to="/Home">Početna</Link>
          <Link to="/Products">Proizvodi</Link>
          <Link to="/Cart">Košarica</Link>
        </div>

        <div className="copyright">
          &copy; <span id="year"></span> Web-shop
        </div>
      </footer>
  );
}