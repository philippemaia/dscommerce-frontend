import "./styles.css";
import cartIcon from "../../assets/cart.svg";
import { Link } from "react-router-dom";

export default function HeaderClient() {
  return (
    <header class="dsc-header-client">
      <nav class="dsc-container">
        <Link to="/">
          <h1>DSCommerce</h1>
        </Link>
        <div class="dsc-navbar-right">
          <div class="dsc-menu-items-container">
            <div class="dsc-menu-item">
              <Link to="/cart">
                <img src={cartIcon} alt="Carrinho de compras" />
              </Link>
            </div>
          </div>
          <Link to="/login">Entrar</Link>
        </div>
      </nav>
    </header>
  );
}
