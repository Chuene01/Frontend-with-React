import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector(state => state.cart.items);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header>
      <h2>GreenLeaf</h2>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 {totalItems}</Link>
      </nav>
    </header>
  );
}
